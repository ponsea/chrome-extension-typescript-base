const webpack = require("webpack");
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    popup: path.join(__dirname, './src/popup/main.ts'),
    options: path.join(__dirname, './src/options/main.ts'),
    background: path.join(__dirname, './src/background/main.ts'),
  },
  output: {
    path: path.join(__dirname, './dist/'),
    filename: '[name]/main.js'
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: "initial"
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Popup Page",
      filename: 'popup/index.html',
      template: 'src/popup/index.html',
      chunks: ['popup']
    }),
    new HtmlWebpackPlugin({
      title: 'Options Page',
      filename: 'options/index.html',
      template: 'src/options/index.html',
      chunks: ['options']
    }),
    new CopyPlugin({
      patterns: [
        'src/manifest.json',
      ],
    }),
  ]
};
