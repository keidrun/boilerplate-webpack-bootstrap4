const path = require('path');
const merge = require('webpack-merge');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const baseConfig = require('./webpack.config.base');

const PATH = {
  INDEX: {
    JS: './src/scripts/index.js',
    CSS: './src/styles/index.css',
    HTML: './src/index.html'
  },
  SRC: {
    CSS: 'src/styles',
    IMG: 'src/images'
  },
  DIST: {
    ROOT: path.join(__dirname, 'public'),
    IMG: 'images'
  }
};

const BUILD_FILE_NAME = {
  JS: '[name].[chunkhash:8].js',
  CSS: '[name].[chunkhash:8].css'
};

const config = {
  entry: {
    bundle: [PATH.INDEX.JS, PATH.INDEX.CSS, PATH.INDEX.HTML]
  },
  output: {
    path: PATH.DIST.ROOT,
    filename: BUILD_FILE_NAME.JS
  },
  plugins: [
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      context: PATH.SRC.CSS,
      files: '**/*.css',
      failOnError: false
    }),
    new HtmlWebpackPlugin({
      template: PATH.INDEX.HTML
    }),
    new ExtractTextPlugin(BUILD_FILE_NAME.CSS),
    new CopyWebpackPlugin([{ from: PATH.SRC.IMG, to: PATH.DIST.IMG }])
  ]
};

module.exports = merge(baseConfig, config);
