// load node helper module for absolute pathing in output parameter
const path = require('path')
// for extracting text/css out of html head style
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// instructions for webpack
// configuration object
const config = {
  // 2 minimum properties
  // entry property is what runs the application (root of app)
  // conventionally called index.js
  // index.js is going to execute first and starts the module building process
  // webpack looks at what index.js imports and then looks within those modules to see what they import and so on...
  entry: './src/index.js',
      // .^relative to root dir (js_modules) ./ = in current dir
  // output property object
  output: {
    // reference to dir that we want to save output to
    // path is not a relative file reference, it's ABSOLUTE! WTF
    // so we're going to use a node helper (path module, part of node)
    // allows webpack to work cross-platform/OS
    // what this is doing is saying: whenever webpack runs save file, call it bundle.js inside of a path inside the project directory inside a folder/directory called build
    path: path.resolve(__dirname, 'build'),
                      // ^dirname is a node constant
    // whatever you want to call the output, conventially bundle.js
    filename: 'bundle.js',
    // images: to handle our routing predicament
    publicPath: '/trivia-game/'
  },
  // in webpack 2, loaders are module rules [{}]
  module: {
    rules: [
      {
        use: 'babel-loader',
        // regex looking for .js files, babel will be applied in this case
        test: /\.js$/,
      },
    ]
  },
  // for plugins (e.g., css)
  plugins: [
    // css files will be combined and stuffed into a single file
    new ExtractTextPlugin('style.css')
  ]
}
// export this module
module.exports = config
