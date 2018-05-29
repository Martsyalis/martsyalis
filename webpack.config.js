const HtmlWebPackPlugin = require('html-webpack-plugin');


const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');

const buildPath = `${__dirname}/build`;

module.exports = {
  entry:'./src/index.js',
  output: {
    path: buildPath,
    filename: 'bundle.[hash].js',
    publicPath: '/'
  },
  devServer: {
    contentBase: './build',
    historyApiFallback: true
  },
  plugins: [
    new CleanWebpackPlugin(`${buildPath}/bundle.*.js`),
    new HtmlPlugin({ template: './src/index.html' }),
  ],
  resolve: {
    symlinks: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
    ]
  },
};