const path = require('path');
const webpack = require('webpack');
const BowerWebpackPlugin = require('bower-webpack-plugin');
module.exports = {
  entry: {
    app: './src/client/app/app.module',
    vendor: [
      'jquery',
      'angular',
      'angular-aria',
      'angular-resource',
      'angular-sanitize',
      'angular-material',
      'angular-messages',
      'angular-ui-router',
      'bootstrap',
      //'angularLoadingBar'
      'angular-loading-bar'
    ]
  },
  watch: false,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '/client/app')
  },
  module: {
    loaders: [
      {
        test: /\.es6$/,
        exclude: /node_modules|bower_components/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }/*, {
        test: /jquery\.js/,
        loader: 'null-loader',
        exclude: path.resolve('bower_components/jquery/')
      }*/
    ]
  },
  resolve: {
    modulesDirectories: ["bower_components", "node_modules"],
    alias: {
      jquery: "jquery/dist/jquery",
      'angular-loading-bar': "angular-loading-bar/build/loading-bar"
    }
  },

  plugins: [
    //new BowerWebpackPlugin(),
    
    new webpack.ProvidePlugin({
      jQuery: 'jquery/dist/jquery',
      $: 'jquery/dist/jquery',
      jquery: 'jquery/dist/jquery'
    }),

    /* Resolver to resolve bower main. angular-ui-router for example will need this */
    new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
    ),
    /*Codesplitting*/
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js", Infinity)
  ],
  devServer: {
    contentBase: "./dist/client"
  },
  stats: {
    errorDetails: true
  }
};