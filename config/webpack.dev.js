'use strict'
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack')
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = merge(common, {
    mode: 'development',
    // devtool: 'eval-source-map',
    devtool: 'cheap-module-eval-source-map',
    output: {
        publicPath: '/'
    },
    devServer: {
        inline: true, //打包后加入一个websocket客户端
        hot: true, //热加载
        contentBase: path.join(__dirname, "..", "dist"), //静态文件根目录
        port: 8888, // 端口
        host: 'localhost',
        overlay: true,
        compress: false // 服务器返回浏览器的时候是否启动gzip压缩
    },
    watchOptions: {
        ignored: /node_modules/, //忽略不用监听变更的目录
        aggregateTimeout: 1000, //防止重复保存频繁重新编译,500毫米内重复保存不打包
        poll: 1000 //每秒询问的文件变更的次数
    },
    plugins: [
        new HtmlWebpackPlugin({
            chunks:['index', 'common'],
            filename: 'index.html', // 配置输出文件名和路径
            template: path.resolve(__dirname, '..', 'src', 'index.html'), // 配置文件模板
            hash: true, //防止缓存
            minify: {
                removeAttributeQuotes: true //压缩 去掉引号
            }

        }),
        new CopyWebpackPlugin([{
            from: path.join(__dirname, '..', 'src/assets/lib/laydate/theme'),
            to: path.join(__dirname, '..', 'dist', 'theme'),
            ignore: ['.*']
        }]),
        //  new webpack.DllReferencePlugin({
        //      manifest: path.resolve(__dirname, '..', 'dist', 'manifest.json')
        //  }),
        new webpack.HotModuleReplacementPlugin(), //HMR
        // new webpack.NamedModulesPlugin() // HMR
    ]


});