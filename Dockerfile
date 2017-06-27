FROM nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY dist /usr/share/nginx/html

#BELOW IS DOCKERFILE FOR A NODE SERVER
#FROM node:latest

#RUN npm install -g http-server

#RUN mkdir /www
#WORKDIR /www

#COPY ./dist /www

#EXPOSE 5058
#CMD ["http-server", "-p", "5058"]