'use strict'
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');//删除无用的class类名
const WebpackParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')


module.exports = merge(common, {
    // devtool: 'source-map',
    mode: 'production',
    output: {
        publicPath: './'
    },
    plugins: [
        new HtmlWebpackPlugin({
            chunks: ['index', 'common'],
            filename: 'index.html', // 配置输出文件名和路径
            template: path.resolve(__dirname, '..', 'src', 'index.html'), // 配置文件模板
            vendor: './vendor.dll.js',
            hash: true, //防止缓存
            minify: {
                removeAttributeQuotes: true //压缩 去掉引号
            }

        }),
        new CopyWebpackPlugin([{
            from: path.join(__dirname, '..', 'assets'),
            to: path.join(__dirname, '..', 'dist', 'assets'),
            ignore: ['.*']
        }]),
        new CopyWebpackPlugin([{
            from: path.join(__dirname, '..', 'src/laydate/theme'),
            to: path.join(__dirname, '..', 'dist', 'theme'),
            ignore: ['.*']
        }]),
        new CleanWebpackPlugin(['dist'], {
            root: path.join(__dirname, '..'),
            exclude: ['manifest.json', 'vendor.dll.js'],
            verbose: true,
            dry: false
        }),

        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.optimize\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: true
          }),
     
        new PurifyCSSPlugin({
            paths: glob.sync(path.join(__dirname, '../src/*.html')),
            // minimize:true,
            purifyOptions: {
                whitelist: ['*icon*']//白名单
              }
        }),

        new WebpackParallelUglifyPlugin({
            uglifyJS: {
                output: {
                    beautify: false, //不需要格式化
                    comments: false //不保留注释
                },
                compress: {
                    warnings: false, // 在UglifyJs删除没有用到的代码时不输出警告
                    drop_console: true, // 删除所有的 `console` 语句，可以兼容ie浏览器
                    collapse_vars: true, // 内嵌定义了但是只用到一次的变量
                    reduce_vars: true // 提取出出现多次但是没有定义成变量去引用的静态值
                }
            }
        }),
        new webpack.DllReferencePlugin({
            manifest: path.resolve(__dirname, '..', 'dist', 'manifest.json')
            
        })
    ]
});