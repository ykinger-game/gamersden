FROM node:lts

# Udpate
RUN apt-get update
RUN apt-get install curl -y

WORKDIR /app

COPY ./frontend .

# Install the rest
RUN npm ci
RUN npm run build
RUN npm audit fix

EXPOSE 8080