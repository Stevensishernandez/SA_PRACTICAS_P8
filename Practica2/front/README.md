# Front

## Dockerfile and ngix

The docker file 2 basic operations:

### create angular as build

    FROM node:14 as build
    WORKDIR /usr/local/app
    COPY ./ /usr/local/app/
    RUN npm install
    RUN npm run build

### create image of nginx as server

    FROM nginx:latest
    WORKDIR /usr/share/nginx/html
    COPY --from=build /usr/local/app/dist/front .
    COPY ./nginx.conf /etc/nginx/conf.d/default.conf
    EXPOSE 80

this copy all files from the build into nginx server. 

## Commands Docker Image Push
    
    docker build -t jeamv/pareja8 .
    docker push -t userX/imageX .

example

    docker build -t jeamv/pareja8 .
    docker push jeamv/pareja8 .

## Commands Docker Image Pull

    docker pull -t userX/imageX .

example

    docker pull jeamv/pareja8 .

## Command Run Image

    docker run -d -p 8080:8080 --name X -it X

example

    docker run -d -p 4200:80 --name pareja_ocho -it jeamv/pareja8


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

