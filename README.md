<h1 align="center">
  <br>
  Hotpot
  <br>
</h1>

<h4 align="center">
A html5 game
</h4>

## Overview

This is what you get after installing this template. A simple and clean starter template written in ES6+. [Try it!](https://s3.eu-central-1.amazonaws.com/phaser3-typescript/starter-template/index.html)

<a href="https://etechfocus.github.io/hotpot/dist/">Let's start!</a>

## How To Use

From your command line:

```bash
# Clone this repository
$ git clone --depth 1 https://github.com/etechfocus/hotpot.git hotpot

# Go into the repository
$ cd hotpot

# Install dependencies
$ npm install

# Start the local development server (on port 8080)
$ npm start

# Ready for production?
# Build the production ready code to the /dist folder
$ npm run build
```

Change the **gameName** in /webpack/webpack.common.js.

All your game code lies inside the **/src/scripts** folder. All assets need to be inside the **/src/assets** folder in order to get copied to /dist while creating the production build. Do not change the name of the index.html and game.ts files.

## Progressive Web App (PWA)

![PWA](readme/pwa.png)

This template is **100% PWA ready**.

The ServiceWorker is **disabled by default**. Uncomment the line below inside /src/index.html to enable it.

```html
<script>
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
    })
  }
</script>
```

You can easily personalize its settings by following these steps:

- Replace both icons in /pwa/icons with your own.
  - One is **512x512** the other **192x192**
- Add your own **favicon.ico** to /src
- Adjust these parameters in the **manifest.json** file in /pwa
  - **short_name**: Max. 12 characters
  - **name**: The full game name
  - **orientation**: "landscape" or "portrait"
  - **background_color**: color of the splash screen
  - **theme_color**: color of the navbar - has to match the theme-color in the index.html file
- You can leave the **sw.js** (serviceWorker) in /pwa how it is.
- Change the **gameName** in /webpack/webpack.common.js

Read more about PWA on [developers.google.com](https://developers.google.com/web/progressive-web-apps/)

## Native App

The simplest way to build a Native App is using [Capacitor](https://capacitor.ionicframework.com/) and following its [Documentation](https://capacitor.ionicframework.com/docs/).

The only thing you need to change after installing Capacitor is the **webDir** inside the **capacitor.config.json** file. Set it to **dist** like so:

```json
{
  "appId": "com.example.app",
  "appName": "YOUR_APP_NAME",
  "bundledWebRuntime": false,
  "webDir": "dist"
}
```

## Custom Configurations

### Babel Compiler

Change the Babel compiler's settings in the .babelrc file.

You'll find more information about the babel [here](https://babeljs.io/).

### Webpack

All webpack configs are in the **webpack** folder.

#### Obfuscation

We are using the [webpack-obfuscator](https://github.com/javascript-obfuscator/webpack-obfuscator). Change its settings in webpack/webpack.prod.js if needed. All available options are listed [here](https://github.com/javascript-obfuscator/javascript-obfuscator#javascript-obfuscator-options).

## TypeScript

Want to use TypeScript instead of ES6? Switch to the [phaser-project-template](https://github.com/yandeu/phaser-project-template#readme)

## Multiplayer Game

Making a multiplayer game? Check out [geckos.io](https://github.com/geckosio/geckos.io#readme)

## Useful Links

- [Phaser Website](https://phaser.io/)
- [Phaser 3 Forum](https://phaser.discourse.group/)
- [Phaser 3 API Docs](https://photonstorm.github.io/phaser3-docs/)
- [Official Phaser 3 Examples](http://labs.phaser.io/)
- [Notes of Phaser 3](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/index.html)

## Examples

### Game Examples Built with the TypeScript Starter Template

#### Platformer Example [[Play this game](https://s3.eu-central-1.amazonaws.com/phaser3-typescript/platformer-example/index.html) - [Visit its Repository](https://github.com/yandeu/phaser3-typescript-platformer-example#readme)]

[![phaser3-typescript-platformer](https://raw.githubusercontent.com/yandeu/phaser3-typescript-platformer-example/master/screenshots/nexus6-640x360.png)](https://github.com/yandeu/phaser3-typescript-platformer-example#readme)

#### Phaser 3 + Matter.js: Car Example [[Play this game](https://s3.eu-central-1.amazonaws.com/phaser3-typescript/car-on-curved-tarrain/index.html) - [Visit its Repository](https://github.com/yandeu/phaser3-matter-car-on-curved-terrain#readme)]

<a href="https://github.com/yandeu/phaser3-matter-car-on-curved-terrain#readme">
<img src="https://raw.githubusercontent.com/yandeu/phaser3-matter-car-on-curved-terrain/master/readme/myimage.gif" width="640" alt="phaser3-matter-car-example">
</a>

## Credits

A huge thank you to Rich [@photonstorm](https://github.com/photonstorm) for creating Phaser

## License

The MIT License (MIT) 2019 - [Yannick Deubel](https://github.com/yandeu). Please have a look at the [LICENSE](LICENSE) for more details.
