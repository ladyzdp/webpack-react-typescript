'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  entry: {
    app: './src/index.js',
    // another: './src/another-module.js'
    // print:'./src/print.js'
  },
  devtool: 'inline-source-map',
  // context: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: './'
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [{
        test: /.js$/,
        include: path.resolve(__dirname, 'src'),
        use: [ "babel-loader"]
      },
      {
        test: /.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.ts?$/,
        use: [{
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            experimentalWatchApi: true,
          },
        }]
      }, {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: ['file-loader']
      },
      // {
      //   test: /\.(csv|tsv)$/,
      //   use: [
      //     'csv-loader'
      //   ]
      // },
      // {
      //   test: /\.xml$/,
      //   use: [
      //     'xml-loader'
      //   ]
      // }
    ]
  },
  resolve: {
    // extensions: [".js", ".tsx", ".ts", ]
  },
  mode: "development",
  devServer: {
    contentBase: "./dist",
    hot: true
  },
  // devtool: "inline-source-map"
  // devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Webpack4.0---喵',
      filename: './index.html', // 配置输出文件名和路径
      template: './index.html', // 配置文件模板

    }),
    new webpack.ProvidePlugin({
      // _: 'lodash'
      join: ['lodash', 'join'],
      $:['jquery']
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};