# Checklist de Deploy no Render

Este documento descreve os passos práticos para implantar o frontend (Next.js) e o backend (Django) no Render usando os Dockerfiles e o `render.yaml` já presentes no repositório.

**Pré-requisitos**
- Ter o repositório com as alterações commitadas e push para `main`.
- Conta no Render e acesso ao repositório GitHub conectado.
- (Opcional) Docker instalado localmente para testes de build.

**1. Commit e push das mudanças**
```bash
git add render.yaml BackendMusic/Dockerfile FrontMusic/music-front/music_environment/Dockerfile BackendMusic/requirements-deploy.txt BackendMusic/music_dj_project/settings.py DEPLOY_RENDER.md
git commit -m "Add Render deploy files and production settings"
git push origin main
```

**2. Criar o serviço do backend (music-backend)**
- No Render: New → Web Service → Connect to GitHub → selecione `Native_Next_Pyhton_Music-App` → Branch `main`.
- Environment: `Docker`.
- Dockerfile path: `BackendMusic/Dockerfile`.
- Start command (se necessário):
```
gunicorn music_dj_project.wsgi:application --bind 0.0.0.0:8000
```
- Defina as seguintes Environment Variables (Settings → Environment):
  - `DATABASE_URL` = postgres://<user>:<pass>@<host>:<port>/<dbname>
  - `SECRET_KEY` = <uma string segura>
  - `DJANGO_DEBUG` = False
  - `EMAIL_HOST`, `EMAIL_HOST_USER`, `EMAIL_HOST_PASSWORD` (se for enviar e-mails)

Observação: se preferir, crie um Managed PostgreSQL no Render e copie a `DATABASE_URL` gerada.

**3. Criar o serviço do frontend (music-frontend)**
- New → Web Service → Connect to GitHub → selecione `main`.
- Environment: `Docker`.
- Dockerfile path: `FrontMusic/music-front/music_environment/Dockerfile`.
- Defina as Environment Variables:
  - `NEXT_PUBLIC_API_URL` = https://<music-backend>.onrender.com (defina após o deploy do backend)
  - `NODE_ENV` = production

**4. Migrar banco e coletar estáticos**
Após o backend estar ativo, abra o Console do serviço no Render (Shell) e execute:
```bash
python manage.py migrate
python manage.py collectstatic --noinput
```
Você pode configurar um Job em Render para executar essas tarefas automaticamente após o deploy, ou executá-las manualmente via Console.

**5. CORS e ALLOWED_HOSTS**
- `settings.py` já inclui `.onrender.com` em `ALLOWED_HOSTS`.
- Atualize `CORS_ALLOWED_ORIGINS` no painel do Django (ou defina via env var se implementado) para incluir a URL do frontend (`https://<music-frontend>.onrender.com`).

**6. Testes locais (opcional)**
Se tiver Docker instalado pode testar os builds localmente:
```bash
# Backend
docker build -f BackendMusic/Dockerfile -t music-backend:local .

# Frontend
docker build -f FrontMusic/music-front/music_environment/Dockerfile -t music-frontend:local .

# Rodar containers (exemplo)
docker run -p 8000:8000 --env DATABASE_URL="sqlite:///db.sqlite3" music-backend:local
docker run -p 3000:3000 --env NEXT_PUBLIC_API_URL=http://localhost:8000 music-frontend:local
```
Se o `docker` não estiver instalado localmente, pule este passo e use os builds do Render.

**7. Logs e debugging**
- Use o painel de Logs do Render para ver saídas de build e runtime.
- Para rodar comandos ad-hoc (migrate, createsuperuser), abra o Shell do serviço no Render.

**8. Rotinas recomendadas**
- Configure Health Check no serviço backend para `/health` ou `/` conforme necessário.
- Habilite Auto-Deploy se quiser deploy automático em pushes para `main`.

**9. Agendamento automático (cron) do Job de migrations**
- O `render.yaml` inclui um Job `music-backend-migrations` com agendamento cron diário às 03:00 UTC (`0 3 * * *`).
- Para desativar temporariamente o cron: no painel do Render → Jobs → selecione `music-backend-migrations` → Disable Schedule.
- Para alterar o horário: edite `render.yaml` (campo `schedule`) e atualize o repositório ou ajuste diretamente no painel do Render.

**10. Commit e push (comandos prontos)**
Após revisar as alterações, faça commit e push com estes comandos:
```bash
git add render.yaml BackendMusic/Dockerfile FrontMusic/music-front/music_environment/Dockerfile BackendMusic/requirements-deploy.txt BackendMusic/music_dj_project/settings.py DEPLOY_RENDER.md
git commit -m "Add Render deploy files, scheduled migration job and deploy instructions"
git push origin main
```

Se quiser que eu execute o `git commit` e `git push` agora, autorize-me ou execute os comandos localmente.

Se quiser, eu também posso:
- Gerar um Job no Render para rodar `migrate` e `collectstatic` automaticamente, ou
- Criar scripts `deploy/render-create-resources.sh` para automação via API (requer token).

Arquivo criado: `DEPLOY_RENDER.md`.
