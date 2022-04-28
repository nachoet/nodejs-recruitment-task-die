FROM node:14.15-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 3000:3000

CMD ["node", "./src/server.js"]