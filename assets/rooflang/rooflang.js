(function () {
  "use strict";

  const SVG_NS = "http://www.w3.org/2000/svg";
  const MODEL_LABELS = {
    dsv4_flash: "DeepSeek V4 Flash",
    glm_5_2_fp8: "GLM-5.3",
    dsv4_pro: "DeepSeek V4 Pro",
    kimi_k3: "Kimi K3",
  };
  const HARDWARE_LABELS = {
    h200: "NVIDIA H200",
    gh200: "NVIDIA GH200",
    b300: "NVIDIA B300",
    gb300: "NVIDIA GB300",
    rtx6000d: "NVIDIA RTX 6000D",
    ascend950dt: "Huawei Ascend 950DT",
  };
  const MODEL_ORDER = Object.keys(MODEL_LABELS);
  const HARDWARE_ORDER = Object.keys(HARDWARE_LABELS);
  const COLORS = [
    "#174a7e", "#d55e00", "#009e73", "#7f3c8d", "#e69f00", "#56b4e9",
    "#cc79a7", "#11a579", "#3969ac", "#f2b701", "#e73f74", "#80ba5a",
  ];
  const MARKERS = ["circle", "square", "triangle", "diamond", "cross", "plus"];
  const MARKER_GLYPHS = { circle: "●", square: "■", triangle: "▲", diamond: "◆", cross: "×", plus: "+" };
  const DASHES = {
    h200: "",
    gh200: "7 4",
    b300: "",
    gb300: "3 3",
    rtx6000d: "10 4",
    ascend950dt: "10 3 2 3",
  };
  const MAX_SERIES = 24;

  const state = {
    points: [],
    seriesIndex: new Map(),
    active: new Map(),
    scale: "linear",
    nextColor: 0,
  };

  const chart = document.getElementById("pareto-chart");
  if (!chart) return;

  const wrap = document.getElementById("chart-wrap");
  const tooltip = document.getElementById("chart-tooltip");
  const loading = document.getElementById("chart-loading");
  const seriesList = document.getElementById("series-list");
  const seriesCount = document.getElementById("series-count");
  const controlStatus = document.getElementById("control-status");

  function seriesKey(point) {
    return [point.stage, point.context, point.model, point.hardware, point.gpus].join("|");
  }

  function makeKey(stage, context, model, hardware, gpus) {
    return [stage, context, model, hardware, Number(gpus)].join("|");
  }

  function parseKey(key) {
    const [stage, context, model, hardware, gpus] = key.split("|");
    return { stage, context, model, hardware, gpus: Number(gpus) };
  }

  function shortLabel(key) {
    const item = parseKey(key);
    return `${MODEL_LABELS[item.model]} · ${configurationLabel(item)}`;
  }

  function fullLabel(key) {
    return shortLabel(key);
  }

  function configurationLabel(item) {
    return `${capitalize(item.stage)} ${item.context.toUpperCase()} · ${item.gpus} ${HARDWARE_LABELS[item.hardware]}`;
  }

  function capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  function svgElement(name, attributes, text) {
    const element = document.createElementNS(SVG_NS, name);
    Object.entries(attributes || {}).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== "") {
        element.setAttribute(key, String(value));
      }
    });
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function pointMarker(shape, x, y, color) {
    const common = { stroke: color, class: "frontier-point", fill: "#ffffff" };
    if (shape === "square") {
      return svgElement("rect", { ...common, x: x - 4, y: y - 4, width: 8, height: 8 });
    }
    if (shape === "triangle") {
      return svgElement("path", { ...common, d: `M${x},${y - 5} L${x + 5},${y + 4} L${x - 5},${y + 4} Z` });
    }
    if (shape === "diamond") {
      return svgElement("path", { ...common, d: `M${x},${y - 5} L${x + 5},${y} L${x},${y + 5} L${x - 5},${y} Z` });
    }
    if (shape === "cross") {
      return svgElement("path", { ...common, d: `M${x - 4},${y - 4} L${x + 4},${y + 4} M${x + 4},${y - 4} L${x - 4},${y + 4}`, fill: "none" });
    }
    if (shape === "plus") {
      return svgElement("path", { ...common, d: `M${x - 5},${y} L${x + 5},${y} M${x},${y - 5} L${x},${y + 5}`, fill: "none" });
    }
    return svgElement("circle", { ...common, cx: x, cy: y, r: 4 });
  }

  function niceStep(span, count) {
    const rough = span / Math.max(1, count);
    const power = Math.pow(10, Math.floor(Math.log10(rough || 1)));
    const error = rough / power;
    const factor = error >= 7.5 ? 10 : error >= 3.5 ? 5 : error >= 1.5 ? 2 : 1;
    return factor * power;
  }

  function linearTicks(max, count) {
    const step = niceStep(max, count);
    const upper = Math.ceil(max / step) * step;
    const ticks = [];
    for (let value = 0; value <= upper + step * 0.1; value += step) ticks.push(value);
    return { ticks, domain: [0, upper || 1] };
  }

  function logTicks(min, max) {
    const minPower = Math.floor(Math.log10(min));
    const maxPower = Math.ceil(Math.log10(max));
    const powers = maxPower - minPower;
    const multipliers = powers <= 3 ? [1, 2, 5] : [1];
    const ticks = [];
    for (let power = minPower; power <= maxPower; power += 1) {
      multipliers.forEach((multiplier) => {
        const value = multiplier * Math.pow(10, power);
        if (value >= min * 0.999 && value <= max * 1.001) ticks.push(value);
      });
    }
    return ticks;
  }

  function formatCompact(value) {
    const absolute = Math.abs(value);
    if (absolute >= 1e9) return `${trimNumber(value / 1e9)}B`;
    if (absolute >= 1e6) return `${trimNumber(value / 1e6)}M`;
    if (absolute >= 1e3) return `${trimNumber(value / 1e3)}K`;
    if (absolute >= 10) return Math.round(value).toLocaleString("en-US");
    if (absolute >= 1) return trimNumber(value);
    return value.toPrecision(2);
  }

  function trimNumber(value) {
    return Number(value.toFixed(Math.abs(value) < 10 ? 1 : 0)).toLocaleString("en-US");
  }

  function formatMetric(value, digits) {
    if (value === null || value === undefined || Number.isNaN(Number(value))) return "—";
    return Number(value).toLocaleString("en-US", { maximumFractionDigits: digits });
  }

  function activeSeries() {
    return Array.from(state.active.entries())
      .filter(([, meta]) => meta.visible)
      .map(([key, meta]) => ({ key, meta, points: state.seriesIndex.get(key) || [] }))
      .filter((series) => series.points.length);
  }

  function renderChart() {
    chart.replaceChildren(
      svgElement("desc", { id: "chart-desc" }, "Interactive chart of per-user interactivity against per-GPU throughput."),
    );
    tooltip.hidden = true;

    const empty = wrap.querySelector(".chart-empty");
    if (empty) empty.remove();
    const series = activeSeries();
    if (!series.length) {
      const message = document.createElement("div");
      message.className = "chart-empty";
      message.textContent = state.active.size ? "All frontiers are hidden." : "Add a frontier to begin comparing designs.";
      wrap.appendChild(message);
      renderSeriesList();
      return;
    }

    const allPoints = series.flatMap((item) => item.points).filter((point) => point.x > 0 && point.y > 0);
    const width = 960;
    const height = 570;
    const margin = { top: 25, right: 30, bottom: 68, left: 91 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    let xDomain;
    let yDomain;
    let xTicks;
    let yTicks;

    if (state.scale === "log") {
      const xs = allPoints.map((point) => point.x);
      const ys = allPoints.map((point) => point.y);
      xDomain = [Math.min(...xs) * 0.82, Math.max(...xs) * 1.18];
      yDomain = [Math.min(...ys) * 0.82, Math.max(...ys) * 1.18];
      xTicks = logTicks(xDomain[0], xDomain[1]);
      yTicks = logTicks(yDomain[0], yDomain[1]);
    } else {
      const xResult = linearTicks(Math.max(...allPoints.map((point) => point.x)) * 1.06, 6);
      const yResult = linearTicks(Math.max(...allPoints.map((point) => point.y)) * 1.06, 6);
      xDomain = xResult.domain;
      yDomain = yResult.domain;
      xTicks = xResult.ticks;
      yTicks = yResult.ticks;
    }

    const scaleX = state.scale === "log"
      ? (value) => margin.left + (Math.log10(value) - Math.log10(xDomain[0])) / (Math.log10(xDomain[1]) - Math.log10(xDomain[0])) * innerWidth
      : (value) => margin.left + (value - xDomain[0]) / (xDomain[1] - xDomain[0]) * innerWidth;
    const scaleY = state.scale === "log"
      ? (value) => margin.top + innerHeight - (Math.log10(value) - Math.log10(yDomain[0])) / (Math.log10(yDomain[1]) - Math.log10(yDomain[0])) * innerHeight
      : (value) => margin.top + innerHeight - (value - yDomain[0]) / (yDomain[1] - yDomain[0]) * innerHeight;

    const gridGroup = svgElement("g", { "aria-hidden": "true" });
    xTicks.forEach((tick) => {
      const x = scaleX(tick || (state.scale === "log" ? xDomain[0] : 0));
      gridGroup.appendChild(svgElement("line", { x1: x, y1: margin.top, x2: x, y2: margin.top + innerHeight, class: "grid-line" }));
      gridGroup.appendChild(svgElement("text", { x, y: margin.top + innerHeight + 24, class: "axis-tick", "text-anchor": "middle" }, formatCompact(tick)));
    });
    yTicks.forEach((tick) => {
      const y = scaleY(tick || (state.scale === "log" ? yDomain[0] : 0));
      gridGroup.appendChild(svgElement("line", { x1: margin.left, y1: y, x2: margin.left + innerWidth, y2: y, class: "grid-line" }));
      gridGroup.appendChild(svgElement("text", { x: margin.left - 15, y: y + 3, class: "axis-tick", "text-anchor": "end" }, formatCompact(tick)));
    });
    chart.appendChild(gridGroup);

    chart.appendChild(svgElement("line", { x1: margin.left, y1: margin.top + innerHeight, x2: margin.left + innerWidth, y2: margin.top + innerHeight, class: "axis-line" }));
    chart.appendChild(svgElement("line", { x1: margin.left, y1: margin.top, x2: margin.left, y2: margin.top + innerHeight, class: "axis-line" }));
    chart.appendChild(svgElement("text", { x: margin.left + innerWidth / 2, y: height - 13, class: "axis-label", "text-anchor": "middle" }, "INTERACTIVITY · TOKENS / S / USER"));
    chart.appendChild(svgElement("text", { x: 22, y: margin.top + innerHeight / 2, class: "axis-label", "text-anchor": "middle", transform: `rotate(-90 22 ${margin.top + innerHeight / 2})` }, "THROUGHPUT · TOKENS / S / GPU"));

    const pathsGroup = svgElement("g", {});
    const pointsGroup = svgElement("g", {});
    series.forEach(({ key, meta, points }) => {
      const valid = points.filter((point) => point.x > 0 && point.y > 0).sort((a, b) => a.x - b.x);
      if (!valid.length) return;
      const pathData = valid.map((point, index) => `${index ? "L" : "M"}${scaleX(point.x).toFixed(2)},${scaleY(point.y).toFixed(2)}`).join(" ");
      const path = svgElement("path", {
        d: pathData,
        class: "frontier-path",
        stroke: meta.color,
        "stroke-dasharray": DASHES[parseKey(key).hardware],
        "data-key": key,
      });
      pathsGroup.appendChild(path);

      valid.forEach((point) => {
        const marker = pointMarker(meta.marker, scaleX(point.x), scaleY(point.y), meta.color);
        marker.setAttribute("tabindex", "0");
        marker.setAttribute("role", "button");
        marker.setAttribute("data-key", key);
        marker.setAttribute("aria-label", `${fullLabel(key)}; batch ${point.batch}; ${formatMetric(point.x, 1)} tokens per second per user; ${formatMetric(point.y, 1)} tokens per second per GPU`);
        marker.addEventListener("mouseenter", (event) => showTooltip(event, point, key));
        marker.addEventListener("mousemove", positionTooltip);
        marker.addEventListener("mouseleave", hideTooltip);
        marker.addEventListener("focus", (event) => showTooltip(event, point, key));
        marker.addEventListener("blur", hideTooltip);
        pointsGroup.appendChild(marker);
      });
    });
    chart.appendChild(pathsGroup);
    chart.appendChild(pointsGroup);
    renderSeriesList();
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, (character) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;",
    }[character]));
  }

  function showTooltip(event, point, key) {
    const parallelism = `CP ${point.cp} · DP ${point.dp} · EP ${point.ep} · PP ${point.pp}`;
    tooltip.innerHTML = `
      <div class="tooltip-title">${escapeHtml(MODEL_LABELS[point.model])}<span>${escapeHtml(configurationLabel(point))}</span></div>
      <div class="tooltip-grid">
        <div class="tooltip-item"><span>Interactivity</span><strong>${formatMetric(point.x, 1)} tok/s/user</strong></div>
        <div class="tooltip-item"><span>Throughput</span><strong>${formatMetric(point.y, 1)} tok/s/GPU</strong></div>
        <div class="tooltip-item"><span>Batch size</span><strong>${formatMetric(point.batch, 0)}</strong></div>
        <div class="tooltip-item"><span>Latency</span><strong>${formatMetric(point.latencyMs, 2)} ms</strong></div>
        <div class="tooltip-item wide"><span>Parallelism</span><strong>${escapeHtml(parallelism)} · partition ${escapeHtml(point.ppPartition || "—")}</strong></div>
        <div class="tooltip-item"><span>Compute / comm.</span><strong>${formatMetric(point.computeRatio * 100, 1)}% / ${formatMetric(point.communicationRatio * 100, 1)}%</strong></div>
        <div class="tooltip-item"><span>Concurrent batches</span><strong>${formatMetric(point.concurrentBatches, 0)}</strong></div>
        <div class="tooltip-item"><span>Peak accelerator memory</span><strong>${formatMetric(point.peakHbmGb, 2)} GB</strong></div>
        <div class="tooltip-item"><span>KV cache / accelerator</span><strong>${formatMetric(point.kvCacheHbmGb, 2)} GB</strong></div>
        <div class="tooltip-item wide"><span>Case ID</span><strong>${escapeHtml(point.caseId)}</strong></div>
      </div>`;
    tooltip.hidden = false;
    focusSeries(key);
    positionTooltip(event);
  }

  function positionTooltip(event) {
    if (tooltip.hidden) return;
    const wrapRect = wrap.getBoundingClientRect();
    let clientX;
    let clientY;
    if (event.clientX || event.clientY) {
      clientX = event.clientX;
      clientY = event.clientY;
    } else {
      const rect = event.currentTarget.getBoundingClientRect();
      clientX = rect.left + rect.width / 2;
      clientY = rect.top;
    }
    const tooltipRect = tooltip.getBoundingClientRect();
    let left = clientX - wrapRect.left + 15;
    let top = clientY - wrapRect.top + 15;
    if (left + tooltipRect.width > wrapRect.width - 8) left = clientX - wrapRect.left - tooltipRect.width - 15;
    if (top + tooltipRect.height > wrapRect.height - 8) top = clientY - wrapRect.top - tooltipRect.height - 15;
    tooltip.style.left = `${Math.max(8, left)}px`;
    tooltip.style.top = `${Math.max(8, top)}px`;
  }

  function hideTooltip() {
    tooltip.hidden = true;
    focusSeries(null);
  }

  function focusSeries(key) {
    chart.querySelectorAll("[data-key]").forEach((element) => {
      element.classList.toggle("is-focused", Boolean(key) && element.dataset.key === key);
      element.classList.toggle("is-muted", Boolean(key) && element.dataset.key !== key);
    });
    seriesList.querySelectorAll(".series-chip").forEach((element) => {
      element.classList.toggle("is-focused", Boolean(key) && element.dataset.key === key);
    });
  }

  function renderSeriesList() {
    seriesList.replaceChildren();
    seriesCount.textContent = `${state.active.size} ${state.active.size === 1 ? "case" : "cases"}`;
    state.active.forEach((meta, key) => {
      const chip = document.createElement("div");
      chip.className = `series-chip${meta.visible ? "" : " is-hidden"}`;
      chip.dataset.key = key;
      chip.title = fullLabel(key);

      const toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "series-toggle";
      toggle.setAttribute("aria-pressed", String(meta.visible));
      toggle.setAttribute("aria-label", `${meta.visible ? "Hide" : "Show"} ${fullLabel(key)}`);
      toggle.innerHTML = `<i class="series-marker" style="color:${meta.color}">${MARKER_GLYPHS[meta.marker] || "●"}</i><i class="series-swatch" style="background:${meta.color}"></i><span>${escapeHtml(shortLabel(key))}</span>`;
      toggle.addEventListener("click", () => {
        meta.visible = !meta.visible;
        renderChart();
      });

      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "series-remove";
      remove.setAttribute("aria-label", `Remove ${fullLabel(key)}`);
      remove.textContent = "×";
      remove.addEventListener("click", () => {
        state.active.delete(key);
        renderChart();
      });

      chip.addEventListener("mouseenter", () => focusSeries(key));
      chip.addEventListener("mouseleave", () => focusSeries(null));
      chip.append(toggle, remove);
      seriesList.appendChild(chip);
    });
  }

  function addKeys(keys, quiet) {
    const available = keys.filter((key) => state.seriesIndex.has(key));
    const missing = keys.length - available.length;
    let added = 0;
    let capped = false;
    available.forEach((key) => {
      if (state.active.has(key)) {
        state.active.get(key).visible = true;
        return;
      }
      if (state.active.size >= MAX_SERIES) {
        capped = true;
        return;
      }
      state.active.set(key, {
        visible: true,
        color: COLORS[state.nextColor % COLORS.length],
        marker: MARKERS[state.nextColor % MARKERS.length],
      });
      state.nextColor += 1;
      added += 1;
    });
    if (!quiet) {
      controlStatus.classList.toggle("is-error", !added && (missing || capped));
      if (capped) controlStatus.textContent = `The chart is limited to ${MAX_SERIES} simultaneous frontiers.`;
      else if (!available.length) controlStatus.textContent = "No feasible frontier is available for that configuration.";
      else if (!added) controlStatus.textContent = "That frontier is already in view.";
      else controlStatus.textContent = `Added ${added} frontier${added === 1 ? "" : "s"}${missing ? `; ${missing} unavailable case${missing === 1 ? "" : "s"} skipped` : ""}.`;
    }
    renderChart();
  }

  function selectedKeys() {
    const stage = document.getElementById("stage-select").value;
    const context = document.getElementById("context-select").value;
    const model = document.getElementById("model-select").value;
    const hardware = document.getElementById("hardware-select").value;
    const gpus = document.getElementById("gpu-select").value;
    const models = model === "*" ? MODEL_ORDER : [model];
    const hardwareItems = hardware === "*" ? HARDWARE_ORDER : [hardware];
    return models.flatMap((modelItem) => hardwareItems.map((hardwareItem) => makeKey(stage, context, modelItem, hardwareItem, gpus)));
  }

  function resetSeries() {
    state.active.clear();
    state.nextColor = 0;
    const defaults = MODEL_ORDER.map((model) => makeKey("decode", "64k", model, "gb300", 64));
    addKeys(defaults, true);
    controlStatus.textContent = "Showing the default four-model comparison.";
    controlStatus.classList.remove("is-error");
  }

  document.getElementById("add-series").addEventListener("click", () => addKeys(selectedKeys(), false));
  document.getElementById("clear-series").addEventListener("click", () => {
    state.active.clear();
    controlStatus.textContent = "Chart cleared.";
    controlStatus.classList.remove("is-error");
    renderChart();
  });
  document.getElementById("reset-series").addEventListener("click", resetSeries);

  document.querySelectorAll("[data-scale]").forEach((button) => {
    button.addEventListener("click", () => {
      state.scale = button.dataset.scale;
      document.querySelectorAll("[data-scale]").forEach((item) => {
        const active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      renderChart();
    });
  });

  document.getElementById("copy-citation").addEventListener("click", async (event) => {
    const button = event.currentTarget;
    const text = document.getElementById("bibtex").innerText;
    try {
      await navigator.clipboard.writeText(text);
    } catch (_error) {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
    const label = button.querySelector("span:first-child");
    label.textContent = "Copied";
    window.setTimeout(() => { label.textContent = "Copy BibTeX"; }, 1600);
  });

  fetch(window.ROOFLANG_DATA_URL)
    .then((response) => {
      if (!response.ok) throw new Error(`Data request failed (${response.status})`);
      return response.json();
    })
    .then((data) => {
      state.points = data.points || [];
      state.points.forEach((point) => {
        const key = seriesKey(point);
        if (!state.seriesIndex.has(key)) state.seriesIndex.set(key, []);
        state.seriesIndex.get(key).push(point);
      });
      state.seriesIndex.forEach((points) => points.sort((a, b) => a.x - b.x));
      document.getElementById("dataset-summary").textContent = `${state.points.length.toLocaleString("en-US")} points · ${state.seriesIndex.size} available cases`;
      loading.hidden = true;
      resetSeries();
    })
    .catch((error) => {
      loading.innerHTML = `Unable to load Pareto data. <span class="sr-only">${escapeHtml(error.message)}</span>`;
      controlStatus.textContent = "The chart data could not be loaded.";
      controlStatus.classList.add("is-error");
    });
}());
