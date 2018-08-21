 const path = require('path');
 const CleanWebpackPlugin = require('clean-webpack-plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const MiniCssExtractPlugin = require("mini-css-extract-plugin")
 const webpack = require('webpack');
 const devMode = process.env.NODE_ENV !== 'production';
 const extractSass = new MiniCssExtractPlugin({
     filename: devMode ? '[name].css' : '[name].[hash].css',
     chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
 });

 module.exports = {
     entry: {
         app: './src/index.js'
     },
     plugins: [
         extractSass,
         new CleanWebpackPlugin(['dist']),
         new HtmlWebpackPlugin({
             title: 'Webpack4.0---喵',
             filename: './index.html', // 配置输出文件名和路径
             template: './index.html', // 配置文件模板

         }),
         new webpack.ProvidePlugin({
             join: ['lodash', 'join'],
             $: ['jquery']
         })
     ],
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
     resolve: {
         extensions: [".js", ".css", ".scss", ".tsx", ".ts"],
        //  alias: {
        //     '@': path.resolve(__dirname, 'src'),
        //     '@scss': path.resolve(__dirname, 'src', 'scss'),
        // }
     },
     module: {
         rules: [{
                 test: /.js$/,
                 include: path.resolve(__dirname, 'src'),
                 use: {
                     loader: "babel-loader",
                     options: {
                         presets: [],
                         plugins: []
                     }
                 }
             },
             {
                 test: /\.css$/,
                 use: [{
                         loader: MiniCssExtractPlugin.loader,
                         options: {
                             // you can specify a publicPath here
                             // by default it use publicPath in webpackOptions.output
                             //  publicPath: '../'
                         }
                     },
                     "css-loader"
                 ]
             },
             {
                 test: /\.(png|svg|jpg|gif)$/,
                 use: [
                     'file-loader'
                 ]
             },
             {
                 test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                 use: [
                     'file-loader'
                 ]
             },
             {
                 test: /.scss$/,
                 use: [
                     devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                     'css-loader',
                     //  'postcss-loader',
                     'sass-loader',
                 ]
             }
         ]
     },
     output: {
         path: path.resolve(__dirname, 'dist'),
         filename: '[name].bundle.js',
         chunkFilename: '[name].bundle.js',
         //  publicPath: './'
     },
 };