const path = require('path');
const webpack = require('webpack');
// const HTMLWebpackPlugin = require('html-webpack-plugin');
// const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
//   template: __dirname + '/src/index.html',
//   filename: 'public/index.html',
//   inject: 'body'
// });

var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});

const ExtractTextPlugin = require("extract-text-webpack-plugin");

// Prevent EventEmitter leak warning
require('events').EventEmitter.prototype._maxListeners = 100;

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[name].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
    }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  resolveLoader: {
      modulesDirectories: [
          '/Users/edge26/Desktop/ejerson-balabas/node_modules/babel-loader'
      ]
},
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
    // HTMLWebpackPluginConfig,
    new ExtractTextPlugin("styles/style.css"),
    definePlugin,
    new webpack.optimize.LimitChunkCountPlugin({maxChunks: 15}),
    new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false,
    }
  })
  ]
};
