FROM node:20-alpine

WORKDIR /app

# Copiar package.json e instalar dependências
COPY FrontMusic/music-front/music_environment/package.json ./package.json
COPY FrontMusic/music-front/music_environment/package-lock.json* ./
RUN npm ci --silent || npm install --silent

# Copiar o restante e buildar
COPY FrontMusic/music-front/music_environment /app
RUN npm run build

ENV PORT=3000
EXPOSE 3000

# Usar next start em modo produção
CMD npm run start -- -p $PORT
