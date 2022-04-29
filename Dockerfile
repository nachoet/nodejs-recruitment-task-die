FROM node:14.15-alpine

RUN mkdir -p /app

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000:3000

CMD ["node", "./src/server.js"]