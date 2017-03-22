const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  context: path.resolve('.'),
  entry: {
    vendors: [
      'babel-polyfill',
      'axios',
      'classnames',
      'react',
      'react-dom',
      'redux',
      'redux-thunk',
      'react-redux',
      'react-router',
      'react-router-redux'
    ],
    main: 'index.jsx'
  },
  output: {
    path: path.resolve('./dist'),
    filename: 'assets/js/[name].js',
    chunkFilename: 'assets/js/[name].js'
  },
  module: {
    rules: [
      {enforce: 'pre', test: /\.jsx?$/, exclude: /node_modules/, loader: 'eslint-loader'},
      {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.(pdf)$/i, loader: 'file-loader?name=assets/pdf/[name].[ext]'},
      {test: /\.svg$/, loader: 'svg-sprite-loader'}
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve('./src/static/html/index.html')
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.svg'],
    modules: [
      path.resolve('./src'),
      'node_modules'
    ],
    alias: {
      partials: 'static/scss/themes/partials',
      svg: 'static/svg',
      img: 'static/img'
    }
  },
  target: 'web',
  performance: {
    hints: false
  },
  stats: {
    version: false,
    hash: false,
    chunks: false,
    children: false
  }
};
