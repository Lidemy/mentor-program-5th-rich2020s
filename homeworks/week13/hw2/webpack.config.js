const path = require('path');

module.exports = {
  devtool: 'source-map',
  mode:'development',
  entry: './src/index.js',
  output: {
    filename: 'main.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: "commentPlugin",
  },
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules:
    [
      { test: /\.css$/i, use:['style-loader', 'css-loader'] },
    ],  
  }
};
