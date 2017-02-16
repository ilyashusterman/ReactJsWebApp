# ReactJsWebApp
React Application based using node packages such as axios

List of commands to get started: 


*****************************Boiler Plate Npm commands for react**********************
mkdir <app-folder>
npm init + Enter * manytimes
npm install --save react react-dom
npm install babel webpack webpack-dev-server -g (if you not installed already)

npm install babel-loader babel-core babel-preset-es2015 babel-preset-react

 *deprecated * npm install --save-dev html-webpack-plugin webpack webpack-dev-server babel-{core,loader} babel-preset-react

mkdir app && cd app

copy NUL index.html App.js main.js webpack.config.js
cd..


*****************************Set up webpack.config.js*********************************
*****************************STEP 1***************************************************

module.exports = {
    entry: './main.js',
    output: {
      path: './',
      filename: 'index.js'
    },
    devServer: {
    inLine: true,
    port: 3333
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            presets: ['es2015', 'react']
          }
        }
      ]
    }
}

*****************************On index.html *******************************************
*****************************STEP 2***************************************************

 add to index.html inside
<body>
 <div id="app"></div>
 <script src="index.js"></script>
</body>

*****************************on App.js ***********************************************
*****************************STEP 3***************************************************

make our first component

import React from 'react';

class App extends React.Component{

  render() {
    return (
      <div> Hello world! </div>
    );
  }

}

export default App;

*****************************on main.js ***********************************************
*****************************STEP 4****************************************************

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('app'))

*****************************on package.json ******************************************
*****************************STEP 5****************************************************

{
  "name": "couponwebapp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "webpack-dev-server"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "react": "^15.4.0",
    "react-dom": "^15.4.0"
  }
}

*****************************on command line ******************************************
*****************************STEP 6****************************************************
to debug and test the react application:

npm start


*****************************on package.json ******************************************
*****************************STEP 7****************************************************
STEP 7:
inside file package.json
add to "scripts"  >

"scripts": {
    "production": "webpack -p"
},

*****************************on command line ******************************************
*****************************STEP 8****************************************************
STEP 8:
command cmd :
npm run production
(*a dist folder has been created! with the index.html and the index.js*)

*****************************on command line ******************************************
*****************************STEP 9****************************************************

npn install --save axios

*****************************on command line ******************************************
*****************************STEP 10****************************************************

on webpack

npm install --save-dev webpack-validator

