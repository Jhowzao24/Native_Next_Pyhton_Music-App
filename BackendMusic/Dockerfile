FROM python:3.11-slim

ENV PYTHONUNBUFFERED=1
WORKDIR /app

# Instalar dependências
COPY BackendMusic/requirements-deploy.txt ./requirements-deploy.txt
RUN apt-get update && apt-get install -y build-essential libpq-dev && rm -rf /var/lib/apt/lists/* \
    && python -m pip install --upgrade pip \
    && pip install -r requirements-deploy.txt

# Copiar projeto
COPY BackendMusic /app

ENV PORT=8000

# Coletar estáticos e migrar (será executado na build para garantir arquivos estáticos)
RUN python manage.py collectstatic --noinput || true

CMD gunicorn music_dj_project.wsgi:application --bind 0.0.0.0:$PORT
