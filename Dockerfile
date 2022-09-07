FROM node:16-alpine

WORKDIR /storybook

COPY package*.json tsconfig*.json ./

RUN npm install

COPY . .

CMD npm run storybook
