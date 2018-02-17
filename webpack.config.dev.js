const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const baseConfig = require('./webpack.config.base');

const PATH = {
  INDEX: {
    JS: './src/scripts/index.js',
    CSS: './src/styles/index.css',
    HTML: './src/index.html'
  },
  DIST: path.join(__dirname, 'public'),
  IMG: {
    IN: 'src/images',
    OUT: 'images'
  }
};

const BUILD_FILE_NAME = {
  JS: '[name].[hash:base64:5].js',
  CSS: 'bundle.[hash:base64:5].css'
};

const config = {
  entry: {
    bundle: [PATH.INDEX.JS, PATH.INDEX.HTML],
    style: PATH.INDEX.CSS
  },
  output: {
    path: PATH.DIST,
    filename: BUILD_FILE_NAME.JS
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new HtmlWebpackPlugin({
      template: PATH.INDEX.HTML
    }),
    new ExtractTextPlugin(BUILD_FILE_NAME.CSS),
    new CopyWebpackPlugin([{ from: PATH.IMG.IN, to: PATH.IMG.OUT }]),
    new webpack.HotModuleReplacementPlugin(),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 8080,
      server: { baseDir: [PATH.DIST] },
      reload: true
    })
  ],
  devtool: 'source-map'
};

module.exports = merge(baseConfig, config);
