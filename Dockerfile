FROM ubuntu

RUN \
   apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10 && \
   echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list && \
   apt-get update && \
   apt-get install -y mongodb-org

VOLUME ["/data/db/newapp"]
WORKDIR /data

EXPOSE 27017

CMD ["mongod"]

RUN apt-get install --no-cache nodejs npm 
FROM node:12
WORKDIR /var/www/newapp
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "node", "server.js" ]
