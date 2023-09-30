# README

Simple RabbitMQ consumer / producer example written in NodeJS.

**NOTE**: To be used for microservice based architecture.

## SETUP ENV

    pip install nodeenv
    nodeenv --force --prebuilt -n 18.18.0 env
    . env/bin/activate

## USE DOCKER TO LAUNCH A RABBITMQ INSTANCE

To launch an instance of RabbitMQ locally:

    docker run --rm -it \
      -p 15672:15672 \
      -p 5672:5672 \
      -e "RABBITMQ_DEFAULT_PASS=pass" \
      -e "RABBITMQ_DEFAULT_USER=user" \
      rabbitmq:3.9.13-management-alpine

**NOTE**: The management interface is running on [http://localhost:15672](http://localhost:15672).

## INSTALL THE DEPENDENCIES

    npm install

## RUN THE PRODUCER(S)

In order to create a few messages run one or more producers:

    npm run producer

## RUN THE CONSUMER(S)

In order to consume the messages run one or more consumers:

    npm run consumer

## HELP

In order to get help or support please contact [klipitkas@gmail.com](mailto:klipitkas@gmail.com).
