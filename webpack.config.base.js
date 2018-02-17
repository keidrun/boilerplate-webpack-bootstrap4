const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: ['eslint-loader'],
        enforce: 'pre',
        exclude: /node_modules/
      },
      {
        test: /\.(js)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader']
        })
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(jpe?g|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  }
};
