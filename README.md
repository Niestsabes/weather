# Weather

This project was generated with [Ionic Angular](https://ionicframework.com/docs/angular/your-first-app) version 7.0.0.

## Setup

Follow the next steps to setup the project:
- Sign up and generate your API key on [OpenWeather](https://openweathermap.org/api).
- In the project, duplicate the ```src/environment/environment.dist.ts``` twice. Rename them ```src/environment/environment.ts``` and ```src/environment/environment.prod.ts```.
- In both created files, replace ```weatherApiKey``` value by your OpenWeather API.

## Running application

### Development Server

Run ```ionic serve``` for a dev server. Navigate to ```http://localhost:8100```. The app will automatically reload if you change any of the source files.

### Build

Run ```ionic build``` to build the project. The build artifacts will be stored in the ```dist/``` directory. Use the ```--prod``` flag for a production build.

## Running tests

### Unit tests

Run ```ng test``` to execute the unit tests via [Karma](https://karma-runner.github.io/latest/index.html).

### End-to-end tests

Run ```ng e2e``` to execute the end-to-end.

## Icons

Icons has been provided by [FontAwesome](https://fontawesome.com/) and are powered by [Icomoon](https://icomoon.io/).

For using icons from Icomoon font export:
- Copy the content of ```./font``` folder in ```src/assets/font/icomoon```.
- Copy the ```style.css``` in ```src/assets/font/icomoon```.
- In the ```style.css``` file, replace the src urls ```./font/icomoon.{extention}``` by ```./icomoon.{extention}```.

## Further help

To get more help on the Angular CLI, use ```ng help``` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/main/README.md).

To get more help on Ionic, go check out the [Ionic Documentation](https://ionicframework.com/docs/).

To get more help on Icomoon, go check out the [Icomoon Documentation](https://icomoon.io/docs.html).