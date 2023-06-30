FROM python:3.9-slim

ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1
ENV LOG_LEVEL=INFO

WORKDIR /

COPY requirements.txt .
RUN pip install --no-cache-dir --upgrade -r requirements.txt

COPY main_twi.py .

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "80", "--proxy-headers"]
