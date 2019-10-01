<div align="center">
<a href="https://github.com/babel/babel">
    <img src="https://rawgit.com/babel/logo/master/babel.svg" alt="Babel logo" width="200" height="200">
  </a>
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>

# React with Webpack

## Configurations
You might find it troublesome at first. But trust me it's just one time configuration!

### Webpack Config
First you need to understand concept of Webpack <a href="https://webpack.js.org/concepts/">here</a>

You can find the config in `webpack.config.js` in root folder.

### Babel Config
For using Babel with the latest React (16.10.1) you need to install 
`@babel/<package-name>` instead of `babel` except `babel-loader` in devDependecies.

You can find this config in `.babelrc` in root folder.

### Start Creating App
Our entry point has been defined on `webpack.config.js` as `index.js` on `src` folder. What in it is just create ReactDOM and import it as App.

You can find this config in `./src/index.js`

### Create HTML template
This is unnecesary things to do, but it might be useful if you want to add extra dependencies later or import something in html. What it really do is just import `index.js` above.

You can find this config in `./src/index.html`

### Running Script
Because we don't create react app with `react-create-app` so we need to define how to serve our app in `package.json` at `scripts` section

You can find this config in `package.json` in root folder

## Development
After the struggle configuring this package. Now you can start developing, there is no difference between developing React with or without Webpack.

```bash
npm start
```

## Production Build
```bash
npm run build
```