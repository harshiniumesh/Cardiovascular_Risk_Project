# 🫀 CardioSense AI — Cardiovascular Risk Assessment Platform

**CardioSense AI** is a web-based cardiovascular risk analysis application powered by a **1D Convolutional Neural Network (1D-CNN)**. The application processes clinical and demographic metrics in real-time to generate interactive risk scores, personalized health recommendations, and population risk analytics.

---

## 📌 Table of Contents
- [Features](#-features)
- [System Screenshots](#-system-screenshots)
- [Architecture & Tech Stack](#-architecture--tech-stack)
- [Dataset & Feature Requirements](#-dataset--feature-requirements)
- [Deep Learning Model Architecture](#-deep-learning-model-architecture)
- [Installation & Setup](#-installation--setup)
- [License](#-license)

---

## ✨ Features

* **Real-time Risk Prediction:** Instant calculation of Low/High cardiovascular risk percentages with dynamic gauge visualizations.
* **Personalised Health Tips:** Dynamic medical advice triggered according to specific patient risk factors (e.g., elevated fasting blood sugar, exercise-induced angina).
* **Analytics Dashboard:** Visual breakdown of population risk profiles across demographic bands (e.g., *Risk Rate by Age Group*, *Risk Rate by Cholesterol Band*).
* **Privacy-Focused:** Local client-side or zero-retention backend processing ensuring patient data is never stored.

---

## 📸 System Screenshots

### 1. Health Assessment Interface
<img width="1536" height="1024" alt="cardio risk prediction system" src="https://github.com/user-attachments/assets/c24afdfc-37f1-4044-98d7-9497277e4cb1" /> 
<img width="1536" height="1024" alt="dashboard" src="https://github.com/user-attachments/assets/a6ecc97f-8773-4092-a5d9-e75cac09c03e" />

### 2. Risk Assessment Results & Gauge
<img width="866" height="819" alt="Screenshot 2026-05-06 145412" src="https://github.com/user-attachments/assets/2316b113-ee47-4583-b074-d30552d85541" />
<img width="887" height="764" alt="Screenshot 2026-05-06 145354" src="https://github.com/user-attachments/assets/8e5fa9d9-4a24-4e93-8eb9-23c48dac8aba" />
<img width="1809" height="849" alt="Screenshot 2026-05-06 145219" src="https://github.com/user-attachments/assets/320fe6a0-8c4f-46df-8b0b-0eedb90de1fe" />
<img width="1895" height="832" alt="Screenshot 2026-05-06 144917" src="https://github.com/user-attachments/assets/66d7d938-71b3-48fb-a2a6-9d32d4f1d5b5" />
<img width="1891" height="962" alt="Screenshot 2026-05-06 144820" src="https://github.com/user-attachments/assets/00fa36bb-a488-4fbb-b299-575e3c07a7f8" />

### 3. Analytics Dashboard
<img width="911" height="727" alt="Screenshot 2026-05-07 063432" src="https://github.com/user-attachments/assets/0236f563-70bd-44f1-a66f-9e70c32972e0" />
<img width="1913" height="902" alt="Screenshot 2026-05-07 062746" src="https://github.com/user-attachments/assets/0e0d4b3c-9d84-4449-baba-d756940c5032" />
<img width="1873" height="488" alt="Screenshot 2026-05-07 064211" src="https://github.com/user-attachments/assets/1e2c54bf-a661-47aa-acce-41f33666119a" />
<img width="835" height="751" alt="Screenshot 2026-05-07 064142" src="https://github.com/user-attachments/assets/3f3603fb-e64d-4099-8360-fea2fd9733ce" />
<img width="845" height="381" alt="Screenshot 2026-05-07 064128" src="https://github.com/user-attachments/assets/f77eba5f-d681-4374-8c41-afa1279d0b56" />
<img width="1755" height="765" alt="Screenshot 2026-05-07 064101" src="https://github.com/user-attachments/assets/7e645c9e-1c69-49c9-ac11-874b2768e988" />
<img width="1883" height="872" alt="Screenshot 2026-05-07 064023" src="https://github.com/user-attachments/assets/ac6368b5-34f8-4ef3-8f29-920969a0a98b" />
<img width="1108" height="908" alt="Screenshot 2026-05-07 063942" src="https://github.com/user-attachments/assets/c581c543-c0d4-426a-ab6c-ba5de019a50d" />
<img width="789" height="530" alt="Screenshot 2026-05-07 064242" src="https://github.com/user-attachments/assets/b9fd1299-4985-4fd1-9f56-5be07cfffa1d" />
<img width="780" height="414" alt="Screenshot 2026-05-07 064229" src="https://github.com/user-attachments/assets/5fa86150-0006-40c7-acd1-55601b59f60e" />
<img width="1873" height="488" alt="Screenshot 2026-05-07 064211" src="https://github.com/user-attachments/assets/5e7d098a-71be-4c76-8958-b2a096d70dfe" />



---

## 🛠️ Architecture & Tech Stack

* **Frontend:** HTML5, CSS3 (Dark Theme Design System), JavaScript (ES6+), Chart.js / D3.js (Analytics & Risk Gauge)
* **Model Engine:** 1D Convolutional Neural Network (1D-CNN) built with Python (TensorFlow/Keras or PyTorch)
* **API / Backend Integration:** Flask / FastAPI REST Endpoints

---

## 📋 Dataset & Feature Requirements

The 1D-CNN model evaluates the following 13 clinical features:

| Parameter | UI Field | Unit / Type | Description |
|---|---|---|---|
| `age` | Age | Years | Patient age |
| `sex` | Biological Sex | Categorical | Male / Female |
| `cp` | Chest Pain Type | Categorical | Typical Angina, Atypical Angina, Non-Anginal, Asymptomatic |
| `trestbps` | Resting Blood Pressure | mm Hg | Resting blood pressure on admission |
| `chol` | Serum Cholesterol | mg/dL | Serum cholesterol levels |
| `fbs` | Fasting Blood Sugar | Binary | $> 120$ mg/dL ($1 = \text{True}, 0 = \text{False}$) |
| `restecg` | Resting ECG Results | Categorical | Normal, ST-T wave abnormality, Left ventricular hypertrophy |
| `thalach` | Max Heart Rate Achieved | bpm | Maximum heart rate reached during exercise |
| `exang` | Exercise-Induced Angina | Binary | Yes / No |
| `oldpeak` | ST Depression | Numeric | ST depression induced by exercise relative to rest |
| `slope` | Slope of Peak ST Segment | Categorical | Upsloping, Flat, Downsloping |
| `ca` | Major Vessels Coloured | Numeric | Number of major vessels ($0-3$) coloured by fluoroscopy |
| `thal` | Thalassemia | Categorical | Normal, Fixed Defect, Reversible Defect |

---

## 🧠 Deep Learning Model Architecture

Unlike traditional machine learning models, **CardioSense AI** uses a **1D Convolutional Neural Network (1D-CNN)** to extract spatial feature patterns from 1D tabular health sequences:

1. **Input Layer:** Reshaped $1D$ feature vector ($13 \times 1$).
2. **Conv1D Layers:** Extracts local feature relationships (e.g., combined effect of `oldpeak` and `thalach`).
3. **Batch Normalisation & Dropout:** Prevents overfitting and stabilizes learning.
4. **Dense & Sigmoid Output:** Produces a calibrated probability score ($0.0 - 1.0$) mapped to **Low Risk** vs. **High Risk**.

---

## 🚀 Installation & Setup

### Prerequisites
* Python 3.8+
* Web Browser (Chrome, Firefox, Edge)

### Quick Run
1. Open `frontend/index.html` directly in your browser to view the interface.
2. Start the backend model server:
   ```bash
   python backend/app.py
