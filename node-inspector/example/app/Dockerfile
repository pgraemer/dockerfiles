FROM node:latest

RUN npm install -g nodemon

# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies:
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /src && cp -a /tmp/node_modules /src

# Bundle app source
COPY . /src
WORKDIR /src

CMD ["nodemon", "server.js"]
