FROM node:15.11
WORKDIR /home/usr/app

COPY package.json ./
RUN npm install

COPY . .
EXPOSE 3000