#BULDER
FROM node:12.16.1-alpine3.9 as builder

COPY ./apps /workspace

#API
WORKDIR /workspace/api
RUN npm install
RUN npm run build

#Frontend
WORKDIR /workspace/frontend
RUN npm install
RUN npm run build

#RUNNER
FROM node:12.16.1-alpine3.9

RUN apk add bash
RUN npm install pm2 -g

COPY --from=builder /workspace/api/dist /app
COPY --from=builder /workspace/frontend/dist /app/web

WORKDIR /app
RUN npm install --only=production

ENTRYPOINT ["pm2-runtime", "start", "index.js", "--name", "dracul-scaffold"]