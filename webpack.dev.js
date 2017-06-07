const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const paths = require('./paths');

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: {
    polyfills: paths.polyfills,
    main: paths.main,
  },

  output: {
    path: paths.docs,
    filename: '[name].bundle.js',
    publicPath: paths.publicPath,
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['awesome-typescript-loader', 'angular2-template-loader'],
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            minimize: true,
            caseSensitive: true,
            removeAttributeQuotes: false,
            conservativeCollapse: false,
          },
        },
      },
      {
        test: /\.(?:sa|s?c)ss$/,
        include: paths.app,
        use: ['to-string-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(?:sa|s?c)ss$/,
        exclude: paths.app,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(?:jpe?g|png|svg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
      },
    ],
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ContextReplacementPlugin(
      /angular(?:\\|\/)core(?:\\|\/)@angular/,
      paths.src,
      {}
    ),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'polyfills',
      minChunks: Infinity,
    }),
    new HTMLPlugin({
      template: paths.index,
    }),
  ],

  devServer: {
    hot: true,
    noInfo: true,
    historyApiFallback: {
      index: paths.publicPath,
    },
  },
};
