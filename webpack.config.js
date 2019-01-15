const path = require("path");
const ImageminWebP = require('imagemin-webp');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: "development",
  entry: ["@babel/polyfill", "./src/js/index.js"],
  output: {
    path: path.resolve(__dirname, "dist/js"),
    filename: "bundle.js"
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: './images/',
      to: '../images/[name].jpg'
    }]),
    new ImageminPlugin({
      plugins: [ImageminWebP({
        quality: 50
      })]
    })
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["babel-preset-env"]
        }
      }
    }]
  }
};