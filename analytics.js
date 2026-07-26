/* ═══════════════════════════════════════════════════════════════
   CardioSense AI — Main Stylesheet
   Aesthetic: clinical-dark / editorial / data-rich
   Palette: deep navy · crimson pulse · cool slate
   Fonts: DM Serif Display (headings) · DM Sans (body)
═══════════════════════════════════════════════════════════════ */

/* ─── Custom Properties ──────────────────────────────────────── */
:root {
  --bg:         #070d1a;
  --bg2:        #0f172a;
  --bg3:        #1e293b;
  --bg4:        #273548;
  --border:     #1e3a5f;
  --border2:    #2d4a6a;

  --red:        #f43f5e;
  --red-dim:    #be123c;
  --red-glow:   rgba(244,63,94,0.18);
  --blue:       #38bdf8;
  --blue-dim:   #0284c7;
  --green:      #34d399;

  --text:       #e2e8f0;
  --text-muted: #94a3b8;
  --text-dim:   #64748b;

  --radius:     12px;
  --radius-lg:  20px;
  --shadow:     0 4px 32px rgba(0,0,0,0.4);
  --shadow-lg:  0 8px 64px rgba(0,0,0,0.6);

  --font-serif: 'DM Serif Display', Georgia, serif;
  --font-sans:  'DM Sans', system-ui, sans-serif;
}

/* ─── Reset ──────────────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: var(--font-sans);
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  min-height: 100vh;
  overflow-x: hidden;
}
img { max-width: 100%; display: block; }
a { text-decoration: none; }

/* ─── Navigation ─────────────────────────────────────────────── */
.nav {
  position: sticky; top: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 2.5rem;
  height: 64px;
  background: rgba(7,13,26,0.85);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
}
.nav-brand {
  display: flex; align-items: center; gap: 10px;
  font-family: var(--font-serif);
  font-size: 1.25rem; color: var(--text);
  letter-spacing: -0.01em;
}
.nav-brand em { color: var(--red); font-style: normal; }
.nav-pulse {
  width: 10px; height: 10px;
  background: var(--red);
  border-radius: 50%;
  box-shadow: 0 0 0 0 var(--red-glow);
  animation: pulse 1.8s ease-in-out infinite;
}
@keyframes pulse {
  0%,100% { box-shadow: 0 0 0 0 rgba(244,63,94,0.6); }
  50%      { box-shadow: 0 0 0 8px rgba(244,63,94,0); }
}
.nav-links { display: flex; gap: 0.25rem; }
.nav-link {
  padding: 0.4rem 1rem;
  border-radius: 8px;
  color: var(--text-muted);
  font-size: 0.875rem; font-weight: 500;
  transition: all 0.2s;
}
.nav-link:hover  { color: var(--text); background: var(--bg3); }
.nav-link.active { color: var(--red); background: rgba(244,63,94,0.1); }

/* ─── Hero ───────────────────────────────────────────────────── */
.hero {
  position: relative;
  padding: 4rem 2.5rem 3.5rem;
  overflow: hidden;
  border-bottom: 1px solid var(--border);
  background: linear-gradient(180deg, #0a1628 0%, var(--bg) 100%);
}
.hero-short { padding: 3rem 2.5rem 2.5rem; }
.hero-bg {
  position: absolute; inset: 0;
  pointer-events: none;
}
.heartbeat-svg {
  width: 100%; height: 100%;
  opacity: 0.12;
}
.heartbeat-line {
  stroke: var(--red);
  stroke-dasharray: 2000;
  stroke-dashoffset: 2000;
  animation: draw 3s ease forwards;
}
@keyframes draw { to { stroke-dashoffset: 0; } }

.hero-content { position: relative; max-width: 640px; }
.hero-eyebrow {
  font-size: 0.78rem; font-weight: 600; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--red);
  margin-bottom: 0.75rem;
}
.hero-title {
  font-family: var(--font-serif);
  font-size: clamp(2.4rem, 5vw, 3.6rem);
  line-height: 1.08;
  color: var(--text);
  margin-bottom: 1rem;
}
.hero-title em { color: var(--red); font-style: italic; }
.hero-sub {
  color: var(--text-muted);
  font-size: 1rem; font-weight: 300;
  max-width: 520px;
}

/* ─── Container ──────────────────────────────────────────────── */
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 2rem 6rem;
}

/* ─── Form Card ──────────────────────────────────────────────── */
.form-card {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2.5rem;
  box-shadow: var(--shadow);
}
.form-header { margin-bottom: 2rem; }
.form-header h2 {
  font-family: var(--font-serif);
  font-size: 1.6rem;
  margin-bottom: 0.3rem;
}
.form-header p { color: var(--text-muted); font-size: 0.875rem; }

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.25rem;
  margin-bottom: 2rem;
}
.field { display: flex; flex-direction: column; gap: 0.4rem; }
.field-wide { grid-column: 1 / -1; max-width: 340px; }

label {
  font-size: 0.8rem; font-weight: 500;
  color: var(--text-muted); letter-spacing: 0.02em;
  display: flex; align-items: center; gap: 0.4rem;
}
.unit { color: var(--text-dim); font-weight: 400; }

input, select {
  background: var(--bg3);
  border: 1px solid var(--border2);
  border-radius: 8px;
  color: var(--text);
  font-family: var(--font-sans);
  font-size: 0.925rem;
  padding: 0.6rem 0.9rem;
  transition: border-color 0.2s, box-shadow 0.2s;
  outline: none;
  appearance: none;
}
input:focus, select:focus {
  border-color: var(--blue);
  box-shadow: 0 0 0 3px rgba(56,189,248,0.12);
}
input.invalid, select.invalid {
  border-color: var(--red);
  box-shadow: 0 0 0 3px rgba(244,63,94,0.12);
}
select { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2394a3b8' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.9rem center;
  padding-right: 2.5rem;
}
.field-error {
  font-size: 0.75rem; color: var(--red);
  min-height: 1rem;
}
.tooltip {
  width: 16px; height: 16px;
  background: var(--bg4);
  border: 1px solid var(--border2);
  border-radius: 50%;
  font-size: 0.65rem;
  display: inline-flex; align-items: center; justify-content: center;
  color: var(--text-muted); cursor: help;
  flex-shrink: 0;
  position: relative;
}
.tooltip::after {
  content: attr(data-tip);
  position: absolute;
  bottom: calc(100% + 6px);
  left: 50%; transform: translateX(-50%);
  background: var(--bg4);
  border: 1px solid var(--border2);
  border-radius: 6px;
  padding: 0.4rem 0.7rem;
  font-size: 0.72rem; color: var(--text);
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s;
  z-index: 10;
}
.tooltip:hover::after { opacity: 1; }

/* ─── Submit button ──────────────────────────────────────────── */
.btn-predict {
  display: flex; align-items: center; justify-content: center; gap: 0.6rem;
  width: 100%;
  padding: 0.9rem 2rem;
  background: var(--red);
  color: white;
  border: none; border-radius: 10px;
  font-family: var(--font-sans); font-size: 1rem; font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
  box-shadow: 0 4px 20px rgba(244,63,94,0.35);
  position: relative; overflow: hidden;
}
.btn-predict:hover:not(:disabled) {
  background: #e11d48;
  transform: translateY(-1px);
  box-shadow: 0 6px 28px rgba(244,63,94,0.45);
}
.btn-predict:disabled { opacity: 0.6; cursor: not-allowed; }
.btn-icon { font-size: 1.1rem; transition: transform 0.2s; }
.btn-predict:hover .btn-icon { transform: translateX(4px); }
.btn-spinner {
  width: 18px; height: 18px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

.disclaimer {
  margin-top: 1rem;
  font-size: 0.72rem;
  color: var(--text-dim);
  text-align: center;
}

/* ─── Result Card ────────────────────────────────────────────── */
.result-card {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2.5rem;
  margin-top: 2rem;
  box-shadow: var(--shadow);
  animation: slideUp 0.4s ease;
}
@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
.result-header {
  display: flex; align-items: center; gap: 1.2rem;
  margin-bottom: 2rem;
}
.result-icon {
  width: 56px; height: 56px;
  border-radius: 14px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.6rem;
  flex-shrink: 0;
}
.result-icon.high { background: rgba(244,63,94,0.15); }
.result-icon.low  { background: rgba(52,211,153,0.15); }
.result-eyebrow {
  font-size: 0.75rem; font-weight: 600;
  letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--text-dim);
}
.result-label {
  font-family: var(--font-serif);
  font-size: 1.8rem;
}
.result-label.high { color: var(--red); }
.result-label.low  { color: var(--green); }

/* ─── Gauge canvas ───────────────────────────────────────────── */
.result-gauge-wrap {
  position: relative;
  display: flex; flex-direction: column; align-items: center;
  margin: 0 auto 2rem;
  max-width: 260px;
}
.gauge-value {
  position: absolute;
  bottom: 28px;
  font-family: var(--font-serif);
  font-size: 2.2rem;
  color: var(--text);
}
.gauge-caption {
  font-size: 0.75rem; color: var(--text-dim);
  margin-top: 0.5rem; letter-spacing: 0.05em;
}

/* ─── Probability bars ───────────────────────────────────────── */
.result-bars { margin-bottom: 2rem; display: flex; flex-direction: column; gap: 0.75rem; }
.bar-row {
  display: grid;
  grid-template-columns: 80px 1fr 48px;
  align-items: center; gap: 0.75rem;
  font-size: 0.85rem;
}
.bar-track {
  height: 8px; background: var(--bg4);
  border-radius: 4px; overflow: hidden;
}
.bar-fill {
  height: 100%; border-radius: 4px;
  width: 0; transition: width 1s cubic-bezier(0.4,0,0.2,1);
}
.bar-low  { background: var(--green); }
.bar-high { background: var(--red); }

/* ─── Tips section ───────────────────────────────────────────── */
.tips-section {
  background: var(--bg3);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.4rem;
  margin-bottom: 1.5rem;
}
.tips-section h4 {
  font-size: 0.8rem; font-weight: 600;
  letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--text-dim); margin-bottom: 1rem;
}
.tips-list { list-style: none; display: flex; flex-direction: column; gap: 0.6rem; }
.tips-list li {
  font-size: 0.9rem; color: var(--text-muted);
  padding-left: 1.2rem; position: relative;
}
.tips-list li::before {
  content: '→';
  position: absolute; left: 0;
  color: var(--blue);
}

.btn-reset {
  background: none;
  border: 1px solid var(--border2);
  color: var(--text-muted);
  padding: 0.6rem 1.4rem;
  border-radius: 8px;
  font-family: var(--font-sans); font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-reset:hover { border-color: var(--blue); color: var(--blue); }

/* ─── Analytics Page ─────────────────────────────────────────── */
.analytics-container { max-width: 960px; }
.analytics-section { margin-bottom: 3rem; }
.analytics-double { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
@media(max-width:640px) { .analytics-double { grid-template-columns: 1fr; } }

.section-header { margin-bottom: 1.25rem; }
.section-header h2 {
  font-family: var(--font-serif);
  font-size: 1.4rem; margin-bottom: 0.4rem;
}
.section-header p { color: var(--text-muted); font-size: 0.9rem; line-height: 1.65; }

.chart-card {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
}
.img-card {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1rem; overflow: hidden;
}
.eval-img {
  width: 100%; border-radius: 8px;
  transition: transform 0.3s;
}
.eval-img:hover { transform: scale(1.02); }

/* ─── Insights grid ──────────────────────────────────────────── */
.insights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.25rem;
  margin-top: 1rem;
}
.insight-card {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.4rem;
  transition: border-color 0.2s, transform 0.2s;
}
.insight-card:hover {
  border-color: var(--border2);
  transform: translateY(-3px);
}
.insight-icon { font-size: 1.6rem; margin-bottom: 0.7rem; }
.insight-card h3 {
  font-family: var(--font-serif);
  font-size: 1rem; margin-bottom: 0.5rem;
}
.insight-card p { font-size: 0.85rem; color: var(--text-muted); line-height: 1.6; }

/* ─── Metric tiles ───────────────────────────────────────────── */
.metric-tiles {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.25rem;
  margin-bottom: 3rem;
}
.metric-tile {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.5rem;
  text-align: center;
}
.metric-tile.loading { opacity: 0.5; }
.metric-label {
  font-size: 0.75rem; font-weight: 600;
  letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--text-dim); margin-bottom: 0.5rem;
}
.metric-value {
  font-family: var(--font-serif);
  font-size: 2.2rem; color: var(--text);
}
.metric-value.small { font-size: 1.2rem; }

/* ─── Architecture diagram ───────────────────────────────────── */
.arch-card {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2rem;
  display: flex; justify-content: center;
}
.arch-flow {
  display: flex; flex-direction: column; align-items: center;
  gap: 0.3rem;
}
.arch-block {
  min-width: 220px;
  border-radius: 10px;
  padding: 0.65rem 1.2rem;
  text-align: center;
  font-size: 0.875rem; font-weight: 500;
  border: 1px solid;
}
.arch-block span { display: block; font-size: 0.72rem; font-weight: 300; margin-top: 0.15rem; opacity: 0.7; }
.arch-input  { background: rgba(56,189,248,0.08); border-color: #38bdf8; color: var(--blue); }
.arch-conv   { background: rgba(168,85,247,0.08); border-color: #a855f7; color: #c084fc; }
.arch-conv2  { background: rgba(236,72,153,0.08); border-color: #ec4899; color: #f472b6; }
.arch-pool   { background: rgba(234,179,8,0.08);  border-color: #eab308; color: #fbbf24; }
.arch-dense  { background: rgba(52,211,153,0.08); border-color: #34d399; color: var(--green); }
.arch-output { background: rgba(244,63,94,0.12);  border-color: var(--red); color: var(--red); }
.arch-arrow  { color: var(--text-dim); font-size: 1rem; line-height: 1; }

code {
  background: var(--bg3);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 0.1rem 0.4rem;
  font-size: 0.8rem; color: var(--blue);
  font-family: 'Courier New', monospace;
}

/* ─── Footer ─────────────────────────────────────────────────── */
.footer {
  border-top: 1px solid var(--border);
  padding: 1.5rem 2.5rem;
  text-align: center;
  font-size: 0.8rem; color: var(--text-dim);
}

/* ─── Responsive ─────────────────────────────────────────────── */
@media (max-width: 640px) {
  .nav { padding: 0 1.2rem; }
  .hero { padding: 2.5rem 1.5rem 2rem; }
  .container { padding: 2rem 1.2rem 4rem; }
  .form-card { padding: 1.5rem; }
  .form-grid { grid-template-columns: 1fr; }
  .field-wide { max-width: 100%; }
}
