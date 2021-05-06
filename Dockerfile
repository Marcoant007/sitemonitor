FROM node:12-alpine

LABEL maintainer="Silas de Moraes <silas.moraes@etaure.com.br>"
LABEL description="Sistema para moniturar recursos do contaure"

WORKDIR /home/sitemonitor

COPY package*.json ./

RUN chown -R node:node /home/sitemonitor

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 3000/tcp

CMD ["node", "server.js"]