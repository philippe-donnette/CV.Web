FROM node:latest

RUN npm install -g http-server

RUN mkdir /www
WORKDIR /www

COPY ./dist /www

EXPOSE 5058
CMD ["http-server", "-p", "5058"]