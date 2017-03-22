const webpack = require('webpack');
const merge = require('webpack-merge');

const webpackCommonSettings = require('./webpack.common');

const webpackCommonDevSettings = {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ],
  devServer: {
    inline: true,
    hot: true,
    compress: true,
    host: '0.0.0.0',
    port: 8089,
    open: true,
    historyApiFallback: true,
    stats: {
      hash: false,
      version: false,
      chunks: false
    }
  }
};

module.exports = [
  merge(webpackCommonSettings, webpackCommonDevSettings, {
    module: {
      rules: [
        {test: /\.woff$/, loader: 'url-loader?mimetype=application/font-woff&name=assets/fonts/[name].[ext]'},
        {test: /\.woff2$/, loader: 'url-loader?mimetype=application/font-woff2&name=assets/fonts/[name].[ext]'},
        {test: /\.[ot]tf$/, loader: 'url-loader?mimetype=application/octet-stream&name=assets/fonts/[name].[ext]'},
        {test: /\.eot$/, loader: 'url-loader?mimetype=application/vnd.ms-fontobject&name=assets/fonts/[name].[ext]'},
        {test: /\.(jpe?g|png|gif|ico)$/i, loader: 'url-loader'},
        {test: /^((?!global).)*\.scss$/, loader: 'style-loader!css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!autoprefixer-loader!resolve-url-loader!sass-loader?sourceMap'},
        {test: /^.*\.global\.scss$/, loader: 'style-loader!css-loader?sourceMap&modules&importLoaders=1&localIdentName=[local]!autoprefixer-loader!resolve-url-loader!sass-loader?sourceMap'},
        {test: /\.css$/, loader: 'style-loader!css-loader?sourceMap&modules&importLoaders=1&localIdentName=[local]!resolve-url-loader'}
      ]
    }
  })
];
