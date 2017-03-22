const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');

const webpackConfigCommon = require('./webpack.common');

module.exports = merge(webpackConfigCommon, {
  module: {
    rules: [
      {test: /\.woff$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=assets/fonts/[name].[ext]'},
      {test: /\.woff2$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff2&name=assets/fonts/[name].[ext]'},
      {test: /\.[ot]tf$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=assets/fonts/[name].[ext]'},
      {test: /\.eot$/, loader: 'url-loader?limit=10000&mimetype=application/vnd.ms-fontobject&name=assets/fonts/[name].[ext]'},
      {test: /\.(jpe?g|png|gif|ico)$/i, loader: 'file-loader?name=assets/img/[name].[ext]'},
      {test: /^((?!global).)*\.scss$/, loader: ExtractTextPlugin.extract({fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap&modules&importLoaders=1@minimize&localIdentName=[name]__[local]___[hash:base64:5]!autoprefixer-loader!resolve-url-loader!sass-loader?sourceMap', publicPath: '../../'})},
      {test: /^.*\.global\.scss$/, loader: ExtractTextPlugin.extract({fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap&modules&importLoaders=1@minimize&localIdentName=[local]!autoprefixer-loader!resolve-url-loader!sass-loader?sourceMap', publicPath: '../../'})},
      {test: /\.css$/, loader: ExtractTextPlugin.extract({fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap&modules&importLoaders=1@minimize&localIdentName=[local]!resolve-url-loader', publicPath: '../../'})}
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'assets/css/[name].css',
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['main', 'vendors'],
      filename: 'assets/js/[name].js'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true,
      output: {
        quote_style: 3
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    })
  ]
});
