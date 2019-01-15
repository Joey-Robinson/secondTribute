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
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: './images/**/**',
      to: path.resolve(__dirname, 'dist')
    }]),
    new ImageminPlugin({
      plugins: [ImageminWebP({
        quality: 50
      })]
    })
  ]
};