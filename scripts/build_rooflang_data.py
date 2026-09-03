#!/usr/bin/env python3
"""Build the compact data file used by the RoofLang project page.

The source CSVs are the per-model Pareto-frontier exports. The project page
shows their ideal-overlap projection, matching the technical report.
"""

from __future__ import annotations

import argparse
import csv
import json
from pathlib import Path


MODELS = (
    "dsv4_flash",
    "glm_5_2_fp8",
    "dsv4_pro",
    "kimi_k3",
)


def optional_float(row: dict[str, str], key: str) -> float | None:
    value = row.get(key, "").strip()
    return float(value) if value else None


def optional_int(row: dict[str, str], key: str) -> int | None:
    value = row.get(key, "").strip()
    return int(value) if value else None


def compact_point(model: str, row: dict[str, str]) -> dict[str, object]:
    stage, context = row["workload"].split("-", maxsplit=1)
    return {
        "model": model,
        "stage": stage,
        "context": context,
        "hardware": row["hardware"],
        "gpus": int(row["n_gpus"]),
        "x": float(row["_plot_tokens_per_s_user"]),
        "y": float(row["_plot_tokens_per_s_gpu"]),
        "batch": int(row["batch_size"]),
        "cp": int(row["cp"]),
        "dp": int(row["dp"]),
        "ep": int(row["ep"]),
        "pp": int(row["pp"]),
        "ppPartition": row.get("pp_partition") or None,
        "latencyMs": optional_float(row, "latency_ms"),
        "computeRatio": optional_float(row, "compute_ratio"),
        "communicationRatio": optional_float(row, "communication_ratio"),
        "concurrentBatches": optional_int(row, "concurrent_batches_overlapped"),
        "peakHbmGb": optional_float(row, "peak_hbm_gb_overlapped"),
        "peakDramGb": optional_float(row, "peak_dram_gb_overlapped"),
        "peakSsdGb": optional_float(row, "peak_ssd_gb_overlapped"),
        "kvCacheHbmGb": optional_float(row, "kv_cache_hbm_gb"),
        "kernelCount": optional_int(row, "kernel_count"),
        "caseId": row["case_id"],
    }


def build(source_root: Path) -> list[dict[str, object]]:
    points: list[dict[str, object]] = []
    for model in MODELS:
        source = source_root / f"{model}_pareto_frontier" / "pareto_frontier.csv"
        if not source.is_file():
            raise FileNotFoundError(source)
        with source.open(newline="", encoding="utf-8") as handle:
            for row in csv.DictReader(handle):
                if row.get("_plot_timing") != "overlapped":
                    continue
                if row.get("status") != "ok":
                    continue
                if row.get("memory_feasible_overlapped", "").lower() != "true":
                    continue
                points.append(compact_point(model, row))
    points.sort(key=lambda point: (
        str(point["stage"]), str(point["context"]), str(point["model"]),
        str(point["hardware"]), int(point["gpus"]), float(point["x"]),
    ))
    return points


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--source-root",
        type=Path,
        default=Path("/home/ziyue/projects/finalsystems/ltp-agents/ltp_agents/skills/model-roofline/scripts"),
        help="Directory containing the four *_pareto_frontier folders.",
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=Path("assets/rooflang/pareto-data.json"),
        help="Destination JSON file.",
    )
    args = parser.parse_args()
    payload = {
        "projection": "overlapped",
        "source": "RoofLang pareto_frontier.csv exports",
        "points": build(args.source_root),
    }
    args.output.parent.mkdir(parents=True, exist_ok=True)
    with args.output.open("w", encoding="utf-8") as handle:
        json.dump(payload, handle, ensure_ascii=False, separators=(",", ":"), allow_nan=False)
        handle.write("\n")
    print(f"Wrote {len(payload['points']):,} points to {args.output}")


if __name__ == "__main__":
    main()
