# Docker Demo

This is just simple proof of concept demo app for getting Node.js, Hapi and Docker (Beta for Mac) up and running.

To get started, first you need to build the Docker container. This may take a while.

```
docker-compose build
```

Once that has been run, you can start the app at any time with

```
docker-compose up
```

Go to [http://localhost:3000](http://localhost:3000)

Changes made in you local folder, especially front and scripts will be immediately reflected
in the docker container.

Commands to be run on startup can be added in the docker-compose.yml.
