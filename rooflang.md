---
layout: rooflang
title: RoofLang
permalink: /rooflang/
---

<main id="top">
  <section class="hero" id="paper" aria-labelledby="hero-title">
    <h1 id="hero-title">
      <span class="title-line"><span class="title-accent">RoofLang</span>: Enabling AI-Driven</span>
      <span class="title-line">Architecting of LLM Inference Systems</span>
    </h1>
    <div class="hero-actions">
      <a class="button button-primary" href="#paper" title="Technical report link coming soon">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2h8l4 4v16H6zM14 2v5h5M9 13h6M9 17h4" /></svg>
        Technical report
      </a>
      <a class="button button-secondary" href="https://github.com/yzygitzh/rooflang" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48v-1.86c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" /></svg>
        GitHub
      </a>
    </div>
  </section>

  <section class="content-section abstract-section" id="overview">
    <div class="section-label"><span>01</span> Overview</div>
    <div class="section-content">
      <h2>Abstract</h2>
      <p>AI is beginning to make substantive contributions to LLM inference optimization. Existing AI optimizations are predominantly profiling-based. Profiling-bound feedback confines the search to the capabilities and performance of an existing software stack, preventing a fundamentally better architecture of LLM inference systems from being identified. To enable the AI-driven LLM inference system architecting loop, we argue that a general workload representation, a verifiable mutation space, and an implementation-independent evaluator are required. We present the RoofLang domain-specific language (DSL) that provides these features. In our preliminary results, RoofLang reveals that DeepSeek V4-series models could achieve 3.5–39.5× higher peak decode throughput than other representative models. This gap is disproportionate to their total parameter counts and arises largely from compact KV-cache designs that support larger batches and reduce memory traffic. A persistent optimizer agent further discovered several new architectures that improved both throughput and interactivity of DeepSeek V4 Pro on NVIDIA B300 by 6.23–50.1%.</p>
    </div>
  </section>

  <section class="explorer-section" id="explorer">
    <div class="section-label light"><span>02</span> Interactive results</div>
    <div class="explorer-heading">
      <div>
        <h2>Explore the Pareto frontier.</h2>
        <p>Compare throughput-interactivity pareto frontiers, across workloads, models, accelerators, and cluster sizes. Each curve shows the ideal-overlap projection from RoofLang's roofline-based discrete-event simulator. Results are analytical estimates for comparing designs, not for real deployment predictions.</p>
      </div>
      <div class="metric-key" aria-label="Chart metrics">
        <span><i class="metric-dot x-dot"></i> x · interactivity</span>
        <span><i class="metric-dot y-dot"></i> y · throughput</span>
      </div>
    </div>

    <div class="explorer-shell" data-explorer>
      <aside class="controls" aria-label="Pareto frontier controls">
        <div class="controls-heading">
          <h3>Build a comparison</h3>
          <p>Choose a configuration, then add it to the chart.</p>
        </div>

        <label class="field">
          <span>Model</span>
          <select id="model-select">
            <option value="*" selected>All four models</option>
            <option value="dsv4_flash">DeepSeek V4 Flash</option>
            <option value="glm_5_2_fp8">GLM-5.3</option>
            <option value="dsv4_pro">DeepSeek V4 Pro</option>
            <option value="kimi_k3">Kimi K3</option>
          </select>
        </label>

        <label class="field">
          <span>Stage</span>
          <select id="stage-select">
            <option value="decode">Decode</option>
            <option value="prefill">Prefill</option>
          </select>
        </label>

        <label class="field">
          <span>Context length</span>
          <select id="context-select">
            <option value="8k">8K</option>
            <option value="64k" selected>64K</option>
            <option value="256k">256K</option>
            <option value="1m">1M</option>
          </select>
        </label>

        <label class="field">
          <span>Accelerator</span>
          <select id="hardware-select">
            <option value="*">All six accelerators</option>
            <option value="h200">NVIDIA H200</option>
            <option value="gh200">NVIDIA GH200</option>
            <option value="b300">NVIDIA B300</option>
            <option value="gb300" selected>NVIDIA GB300</option>
            <option value="rtx6000d">NVIDIA RTX 6000D</option>
            <option value="ascend950dt">Huawei Ascend 950DT</option>
          </select>
        </label>

        <label class="field">
          <span>Accelerator count</span>
          <select id="gpu-select">
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="32">32</option>
            <option value="64" selected>64</option>
            <option value="128">128</option>
            <option value="256">256</option>
          </select>
        </label>

        <button class="add-button" id="add-series" type="button">
          <span>Add frontier</span><span aria-hidden="true">+</span>
        </button>
        <p class="control-status" id="control-status" role="status" aria-live="polite"></p>

        <div class="dataset-note">
          <span class="live-pulse"></span>
          <div><strong>Simulation data</strong><span id="dataset-summary">Loading frontier points…</span></div>
        </div>
      </aside>

      <div class="chart-panel">
        <div class="chart-toolbar">
          <div>
            <span class="toolbar-label">Axis scale</span>
            <div class="segmented-control" role="group" aria-label="Axis scale">
              <button type="button" class="active" data-scale="linear" aria-pressed="true">Linear</button>
              <button type="button" data-scale="log" aria-pressed="false">Log</button>
            </div>
          </div>
          <div class="toolbar-actions">
            <button type="button" id="reset-series">Reset</button>
            <button type="button" id="clear-series">Clear</button>
          </div>
        </div>

        <div class="chart-wrap" id="chart-wrap">
          <div class="chart-loading" id="chart-loading"><span></span> Loading simulation data…</div>
          <svg id="pareto-chart" viewBox="0 0 960 570" role="img" aria-label="Interactive Pareto frontier chart" aria-describedby="chart-desc">
            <desc id="chart-desc">Interactive chart of per-user interactivity against per-GPU throughput.</desc>
          </svg>
          <div class="tooltip" id="chart-tooltip" role="tooltip" hidden></div>
        </div>

        <div class="series-area">
          <div class="series-heading">
            <span>Frontiers in view</span>
            <span id="series-count">0 cases</span>
          </div>
          <div class="series-list" id="series-list"></div>
        </div>
      </div>
    </div>
  </section>

  <section class="content-section citation-section" id="citation">
    <div class="section-label"><span>03</span> Reference</div>
    <div class="section-content">
      <h2>Citation</h2>
      <p>If RoofLang is useful in your work, please cite the technical report.</p>
      <div class="citation-box">
        <pre id="bibtex"><code>@misc{yang2026rooflang,
  title        = {RoofLang: Enabling AI-Driven Architecting of LLM Inference Systems},
  author       = &#123;&#123;RoofLang Project&#125;&#125;,
  year         = {2026},
  howpublished = {Technical report},
  url          = {https://yzygitzh.github.io/rooflang/}
}</code></pre>
        <button type="button" class="copy-button" id="copy-citation"><span>Copy BibTeX</span></button>
      </div>
    </div>
  </section>
</main>
