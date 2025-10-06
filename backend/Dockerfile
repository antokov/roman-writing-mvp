FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN python -m pip install --no-cache-dir -r requirements.txt
COPY . .
ENV PORT=8000
CMD ["gunicorn","app:app","-b","0.0.0.0:8000","--workers","3","--timeout","120"]
