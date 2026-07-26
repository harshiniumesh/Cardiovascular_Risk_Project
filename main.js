<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CardioSense AI — Cardiovascular Risk Prediction</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="css/main.css" />
</head>
<body>

<!-- ─── Navigation ──────────────────────────────────────────────────────────── -->
<nav class="nav">
  <div class="nav-brand">
    <div class="nav-pulse"></div>
    <span>CardioSense <em>AI</em></span>
  </div>
  <div class="nav-links">
    <a href="index.html" class="nav-link active">Predict</a>
    <a href="pages/analytics.html" class="nav-link">Analytics</a>
    <a href="pages/model.html" class="nav-link">Model</a>
  </div>
</nav>

<!-- ─── Hero ─────────────────────────────────────────────────────────────────── -->
<header class="hero">
  <div class="hero-bg">
    <svg class="heartbeat-svg" viewBox="0 0 900 120" preserveAspectRatio="none">
      <polyline class="heartbeat-line"
        points="0,60 120,60 160,60 180,10 200,110 220,30 240,90 260,60 380,60 420,60 460,5 500,115 540,20 570,95 590,60 900,60"
        fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
  <div class="hero-content">
    <p class="hero-eyebrow">1D Convolutional Neural Network</p>
    <h1 class="hero-title">Know Your Heart's<br/><em>Risk Profile</em></h1>
    <p class="hero-sub">Enter your clinical metrics below for an AI-powered cardiovascular risk assessment in seconds.</p>
  </div>
</header>

<!-- ─── Main form card ────────────────────────────────────────────────────────── -->
<main class="container">
  <form id="riskForm" class="form-card" novalidate>
    <div class="form-header">
      <h2>Health Assessment</h2>
      <p>All fields are required. Data is processed locally and never stored.</p>
    </div>

    <div class="form-grid">

      <!-- Age -->
      <div class="field">
        <label for="age">Age <span class="unit">years</span></label>
        <input type="number" id="age" name="age" min="20" max="100" placeholder="e.g. 54" required />
        <span class="field-error" id="err-age"></span>
      </div>

      <!-- Sex -->
      <div class="field">
        <label for="sex">Biological Sex</label>
        <select id="sex" name="sex" required>
          <option value="" disabled selected>Select…</option>
          <option value="1">Male</option>
          <option value="0">Female</option>
        </select>
        <span class="field-error" id="err-sex"></span>
      </div>

      <!-- Chest Pain Type -->
      <div class="field">
        <label for="cp">Chest Pain Type
          <span class="tooltip" data-tip="0=Typical Angina · 1=Atypical Angina · 2=Non-anginal · 3=Asymptomatic">?</span>
        </label>
        <select id="cp" name="cp" required>
          <option value="" disabled selected>Select type…</option>
          <option value="0">Typical Angina</option>
          <option value="1">Atypical Angina</option>
          <option value="2">Non-anginal Pain</option>
          <option value="3">Asymptomatic</option>
        </select>
        <span class="field-error" id="err-cp"></span>
      </div>

      <!-- Resting BP -->
      <div class="field">
        <label for="trestbps">Resting Blood Pressure <span class="unit">mm Hg</span></label>
        <input type="number" id="trestbps" name="trestbps" min="80" max="220" placeholder="e.g. 130" required />
        <span class="field-error" id="err-trestbps"></span>
      </div>

      <!-- Cholesterol -->
      <div class="field">
        <label for="chol">Serum Cholesterol <span class="unit">mg/dL</span></label>
        <input type="number" id="chol" name="chol" min="100" max="600" placeholder="e.g. 246" required />
        <span class="field-error" id="err-chol"></span>
      </div>

      <!-- Fasting Blood Sugar -->
      <div class="field">
        <label for="fbs">Fasting Blood Sugar &gt; 120 mg/dL</label>
        <select id="fbs" name="fbs" required>
          <option value="" disabled selected>Select…</option>
          <option value="1">Yes (&gt; 120 mg/dL)</option>
          <option value="0">No (≤ 120 mg/dL)</option>
        </select>
        <span class="field-error" id="err-fbs"></span>
      </div>

      <!-- Resting ECG -->
      <div class="field">
        <label for="restecg">Resting ECG Results
          <span class="tooltip" data-tip="0=Normal · 1=ST-T abnormality · 2=LV hypertrophy">?</span>
        </label>
        <select id="restecg" name="restecg" required>
          <option value="" disabled selected>Select…</option>
          <option value="0">Normal</option>
          <option value="1">ST-T Wave Abnormality</option>
          <option value="2">Left Ventricular Hypertrophy</option>
        </select>
        <span class="field-error" id="err-restecg"></span>
      </div>

      <!-- Max Heart Rate -->
      <div class="field">
        <label for="thalach">Max Heart Rate Achieved <span class="unit">bpm</span></label>
        <input type="number" id="thalach" name="thalach" min="60" max="220" placeholder="e.g. 150" required />
        <span class="field-error" id="err-thalach"></span>
      </div>

      <!-- Exercise Angina -->
      <div class="field">
        <label for="exang">Exercise-Induced Angina</label>
        <select id="exang" name="exang" required>
          <option value="" disabled selected>Select…</option>
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>
        <span class="field-error" id="err-exang"></span>
      </div>

      <!-- ST Depression -->
      <div class="field">
        <label for="oldpeak">ST Depression (Oldpeak)
          <span class="tooltip" data-tip="Exercise-relative ST depression (0.0 – 6.2)">?</span>
        </label>
        <input type="number" id="oldpeak" name="oldpeak" min="0" max="6.2" step="0.1" placeholder="e.g. 1.0" required />
        <span class="field-error" id="err-oldpeak"></span>
      </div>

      <!-- Slope -->
      <div class="field">
        <label for="slope">Slope of Peak ST Segment
          <span class="tooltip" data-tip="0=Upsloping · 1=Flat · 2=Downsloping">?</span>
        </label>
        <select id="slope" name="slope" required>
          <option value="" disabled selected>Select…</option>
          <option value="0">Upsloping</option>
          <option value="1">Flat</option>
          <option value="2">Downsloping</option>
        </select>
        <span class="field-error" id="err-slope"></span>
      </div>

      <!-- CA -->
      <div class="field">
        <label for="ca">Major Vessels Coloured (Fluoroscopy)
          <span class="tooltip" data-tip="Number of major vessels (0–3) coloured by fluoroscopy">?</span>
        </label>
        <select id="ca" name="ca" required>
          <option value="" disabled selected>Select…</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <span class="field-error" id="err-ca"></span>
      </div>

      <!-- Thal -->
      <div class="field field-wide">
        <label for="thal">Thalassemia
          <span class="tooltip" data-tip="1=Normal · 2=Fixed Defect · 3=Reversible Defect">?</span>
        </label>
        <select id="thal" name="thal" required>
          <option value="" disabled selected>Select…</option>
          <option value="1">Normal</option>
          <option value="2">Fixed Defect</option>
          <option value="3">Reversible Defect</option>
        </select>
        <span class="field-error" id="err-thal"></span>
      </div>

    </div><!-- /.form-grid -->

    <button type="submit" class="btn-predict" id="submitBtn">
      <span class="btn-text">Analyse Risk</span>
      <span class="btn-icon">→</span>
      <div class="btn-spinner" hidden></div>
    </button>

    <p class="disclaimer">⚠️ For informational purposes only. Not a substitute for professional medical advice.</p>
  </form>

  <!-- ─── Result card ──────────────────────────────────────────────────────── -->
  <div class="result-card" id="resultCard" hidden>
    <div class="result-header">
      <div class="result-icon" id="resultIcon"></div>
      <div>
        <p class="result-eyebrow">Prediction Result</p>
        <h3 class="result-label" id="resultLabel"></h3>
      </div>
    </div>

    <div class="result-gauge-wrap">
      <canvas class="result-gauge" id="gaugeCanvas" width="260" height="140"></canvas>
      <div class="gauge-value" id="gaugeValue"></div>
      <p class="gauge-caption">Cardiovascular Risk Score</p>
    </div>

    <div class="result-bars">
      <div class="bar-row">
        <span>Low Risk</span>
        <div class="bar-track"><div class="bar-fill bar-low" id="barLow"></div></div>
        <span id="pctLow"></span>
      </div>
      <div class="bar-row">
        <span>High Risk</span>
        <div class="bar-track"><div class="bar-fill bar-high" id="barHigh"></div></div>
        <span id="pctHigh"></span>
      </div>
    </div>

    <div class="tips-section">
      <h4>Personalised Health Tips</h4>
      <ul class="tips-list" id="tipsList"></ul>
    </div>

    <button class="btn-reset" onclick="resetForm()">← New Assessment</button>
  </div>

</main>

<!-- ─── Footer ────────────────────────────────────────────────────────────────── -->
<footer class="footer">
  <p>CardioSense AI · Built with TensorFlow 1D-CNN · UCI Heart Disease Dataset</p>
</footer>

<script src="js/main.js"></script>
</body>
</html>
