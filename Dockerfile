FROM node:20-alpine

WORKDIR /usr/src/app

RUN apk update && apk add --no-cache bash

COPY package*.json .
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]