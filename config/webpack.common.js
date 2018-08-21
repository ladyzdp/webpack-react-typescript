 const path = require('path');
 const CleanWebpackPlugin = require('clean-webpack-plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const MiniCssExtractPlugin = require("mini-css-extract-plugin");
 const ExtractTextWebapckPlugin = require('extract-text-webpack-plugin')
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
             { //file-loader 解决css等文件中引入图片路径的问题
                 // url-loader 当图片较小的时候会把图片BASE64编码，大于limit参数的时候还是使用file-loader 进行拷贝
                 test: /\.(png|jpg|jpeg|gif|svg)$/,
                 use: {
                     loader: 'url-loader',
                     options: {
                         outputPath: 'images/', // 图片输出的路径
                         limit: 1 * 1024
                     }
                 }
             },
             {
                 test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                 use: [
                     'file-loader'
                 ]
             },
             {
                 test: /.scss$/,
                 use: ExtractTextWebapckPlugin.extract({
                     fallback: 'style-loader',
                     use: ['css-loader','postcss-loader', 'sass-loader']
                 }),
                 include: path.join(__dirname, 'src'),
                 exclude: /node_modules/
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