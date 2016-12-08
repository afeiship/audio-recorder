var path = require('path');
var webpack=require('webpack');
module.exports = {
  entry: {
    index: './src/main.js',
    vendor: ['vue']
  },
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
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor',  'vendor.js')
  ],
  resolve: {
    extensions: ['', '.js', '.vue'],
    alias: {
      components: path.join(__dirname, './src/components')
    }
  }
}
