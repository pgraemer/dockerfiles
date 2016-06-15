# Inspect existing nodejs docker applications

e.g. having an simple node-application services called "app" and started via docker-compose

starting the node application
```bash
docker-compose up
```
results in one container listening on _localhost:80_

when we start the docker-compose using the docker-compose-debug.yml

```bash
docker-compose -f docker-compose-debug.yml up
```

the node application is started normally, no additional dependencies have to be installed.

the result will be 2 running containers and 1 data container containing the node-inspector sources

- _localhost:80_   -- our node application
- _localhost:3000_ -- node inspector

its that easy.

just make sure when using the docker-compose-debug.yml your service name has to be "app" otherwise you have to edit the yml file.

also the command, nodemon or node depending on your application, needs to be started with the "--debug" option
