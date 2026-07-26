@echo off
setlocal
set PYTHON_EXE=%~dp0\.venv\Scripts\python.exe
if not exist "%PYTHON_EXE%" (
  echo ERROR: Python executable not found at %PYTHON_EXE%
  exit /b 1
)
echo Starting CardioSense Flask app...
echo URL: http://127.0.0.1:5000
"%PYTHON_EXE%" "%~dp0cardio_risk\backend\app.py"
