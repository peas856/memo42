FROM node:current-alpine3.16

RUN apk add nginx

COPY app /app
COPY app.conf /etc/nginx/http.d/app.conf

RUN rm /etc/nginx/http.d/default.conf

WORKDIR /app

RUN npm install
RUN npm run build

ENTRYPOINT [ "nginx",  "-g", "daemon off;" ]