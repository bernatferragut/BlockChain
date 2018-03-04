# WEBPACK INSTALLATION
1. npm init
2. npm i -D webpack
3. npm webpack version
4. webpack view setting => hide nodemodules and .vscode true
6. package.json
"scripts": {
    "dev": "webpack -d --watch"
  },
7. webpack.config.js
module.exports = {
    entry: './src/main.js',
    output: {
        filename : './dist/app.bundle.js'
    }
}