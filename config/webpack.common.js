const path = require('path');
const root = path.resolve(__dirname, '..');
const webpack = require('webpack');
const htmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    vendor: './src/vendor.js',
    app: path.join(root, 'src', 'app.js')
  },

  resolve: {
    alias: {
      materializecss: 'materialize-css/dist/css/materialize.css',
      materialize: 'materialize-css/dist/js/materialize.js'
    }
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.html$/,
      loader: 'html'
    }, {
      test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
      loader: 'file?name=assets/[name].[hash].[ext]'
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }]
  },

  plugins: [
    new htmlWebPackPlugin({
      template: 'src/index.html'
    }),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Hammer: 'hammerjs/hammer'
    })
  ]
}
