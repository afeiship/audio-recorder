module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'build.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }]
  }
}
