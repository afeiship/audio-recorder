var path = require('path');
var webpack=require('webpack');
module.exports = {
  entry: './src/main.js',
  output: {
    path: './dist',
    publicPath: 'dist/',
    filename: 'vue-spinner.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: 'url-loader?limit=8192'
    }]
  },
  vue: {
    loaders: {
      js: 'babel'
    }
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    alias: {
      components: path.join(__dirname, './src/components')
    }
  }
}
