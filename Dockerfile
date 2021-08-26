FROM node:slim

WORKDIR /storybook

COPY package*.json tsconfig*.json ./

RUN npm install

COPY . .

CMD npm storybook
