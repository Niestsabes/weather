# Weather

This project was generated with [Ionic Angular](https://ionicframework.com/docs/angular/your-first-app) version 7.0.0.
Styling is powered by [Tailwind](https://tailwindcss.com) and [Ionic UI Components](https://ionicframework.com/docs/components).

## Setup

Follow the next steps to setup the project:
- Install [Node.js](https://nodejs.org/en/download/).
- Install [Angular CLI](https://angular.io/cli) globally: ```npm install -g @angular/cli```.
- Install [Ionic CLI](https://ionicframework.com/docs/intro/cli) globally: ```npm install -g @ionic/cli```.
- Sign up and generate your API key on [OpenWeather](https://openweathermap.org/api).
- In the project, duplicate the ```src/environment/environment.dist.ts``` twice. Rename them ```src/environment/environment.ts``` and ```src/environment/environment.prod.ts```.
- In both created files, replace ```weatherApiKey``` value by your OpenWeather API.

## Running application

### Development Server

Run ```ionic serve``` for a dev server. Navigate to ```http://localhost:8100```. The app will automatically reload if you change any of the source files.

Run ```npx tailwindcss -i ./src/global.scss -o ./src/theme/tailwind.scss --watch``` an the root of the repository to build tailwind stylesheet. The stylesheet will automatically rebuild if you change any of the source files.

### Build

Run ```ionic build``` to build the project. The build artifacts will be stored in the ```dist/``` directory. Use the ```--prod``` flag for a production build.

### Build Android App

- Install [Android Studio](https://developer.android.com/studio)
- Install the Android SDK and build tools via Android Studio's SDK Manager.
- Run ```ionic cap add android``` to add the Android platform to your project.
- Run ```ionic cap sync``` to sync the Ionic app with the native project.
- Run ```ionic cap open android``` to open the native Android project in Android Studio.
- In Android Studio, build the project to test it on a device or emulator.

## Running tests

### Unit tests

Run ```ng test``` to execute the unit tests via [Karma](https://karma-runner.github.io/latest/index.html).

### End-to-end tests

Run ```ng e2e``` to execute the end-to-end.

## Icons

Icons has been provided by [FontAwesome](https://fontawesome.com/) and are powered by [Icomoon](https://icomoon.io/).

In order to update the icon font used in the project:
- Go to [IcomoonApp](https://icomoon.io/app/#/select).
- Import the ```src/config/icomoon/selection.json``` file.
- Add the new icons you want to use.
- Generate the font.
- Download the font.
- Replace the fonts in ```src/assets/fonts/icomoon``` folder by the ones in the downloaded ```/font``` folder.
- Replace ```src/assets/fonts/icomoon/style.css``` file by the downloaded one.
- In the ```style.css``` file, replace the src urls ```./font/icomoon.{extention}``` by ```./icomoon.{extention}```.

## Further help

To get more help on the Angular CLI, use ```ng help``` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/main/README.md).

To get more help on Ionic, go check out the [Ionic Documentation](https://ionicframework.com/docs/).

To get more help on Icomoon, go check out the [Icomoon Documentation](https://icomoon.io/docs.html).