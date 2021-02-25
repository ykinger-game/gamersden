FROM node:lts-slim

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install -g nodemon typescript ts-node
RUN npm install
RUN npm audit fix

EXPOSE 3000
CMD ["npm", "start"]