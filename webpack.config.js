'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  entry: {
    app: './src/index.js',
  },
  devtool: 'inline-source-map',
  // context: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    // chunkFilename: '[name].bundle.js',
    // publicPath: './'
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
        use: ["babel-loader"]
      },
      {
        test: /.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['url-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: ['file-loader']
      },

    ]
  },
  resolve: {
    extensions: [".scss", ".css", ".js"]
  },
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    open:true,
    overlay:true,
    proxy: {
      'mock/5b7fbc808d7a895f7f3ac462/ss': {
        target:" https://www.easy-mock.com/",
        secure:false
        
      },
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Language': 'zh-CN',
        'Accept': 'application/json, */*',
        'Content-Type':' application/json'
    }
    }
  },
  // devtool: "inline-source-map"
  // devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Webpack4.0---喵',
      filename: './index.html', // 配置输出文件名和路径
      template: './src/index.html', // 配置文件模板

    }),
    new CopyWebpackPlugin([{
      from: path.join(__dirname, 'src/assets/lib/laydate/theme'),
      to: path.join(__dirname, 'dist', 'theme'),
      ignore: ['.*']
    }]),
    new webpack.ProvidePlugin({
      // _: 'lodash'
      join: ['lodash', 'join'],
      $: ['jquery']
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};