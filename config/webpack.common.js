const path = require('path');
const chalk = require('chalk');
const os = require('os');
const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');
const HappyPack = require('happypack');
const markdownRenderer = require('react-markdown-reader').renderer;
const happyThreadPool = HappyPack.ThreadPool({
    size: os.cpus().length
})
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const TypedocWebpackPlugin = require('typedoc-webpack-plugin');
function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

// function resolveTarget(target, dir) {
//     return path.join(__dirname, '..', target, dir)
// }

function assetsPath(_path_) {
    let assetsSubDirectory;
    if (process.env.NODE_ENV === 'production') {
        assetsSubDirectory = 'assets' //可根据实际情况修改
    } else {
        assetsSubDirectory = 'assets'
    }
    return path.posix.join(assetsSubDirectory, _path_)
}

function isBuild() {
    let imgLoader = {};
    if (process.env.NODE_ENV === 'production') {
        imgLoader = {
            loader: 'image-webpack-loader', //图片压缩
            options: {
                name: assetsPath('assets/[name].[hash:7].[ext]'), // 图片输出的路径
                mozjpeg: { // 压缩 jpeg 的配置
                    progressive: true,
                    quality: 65
                },
                optipng: { // 使用 imagemin-optipng 压缩 png，enable: false 为关闭
                    enabled: false,
                },
                pngquant: { // 使用 imagemin-pngquant 压缩 png
                    quality: '65-90',
                    speed: 4
                },
                gifsicle: { // 压缩 gif 的配置
                    interlaced: false,
                },
                webp: { // 开启 webp，会把 jpg 和 png 图片压缩为 webp 格式
                    quality: 75
                },
            }
        }
    }
    return imgLoader;
}
module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: {
        index: './src/index.tsx',
        // login: './src/apps/login/login.js',
        jquery: 'jquery', //4.0之后单独打包第三方库
        // laydate:'laydate',//4.0之后单独打包第三方库
    },
    output: {
        path: resolve('dist'),
        filename: '[name].[hash].js',
        // chunkFilename: '[name].bundle.js',
        //  publicPath: './'
    },
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
    resolve: {
        extensions: [".ts", ".tsx", ".jsx", ".js", ".json", '.scss', ".css"],
        alias: {
            laydate: path.resolve(__dirname, 'src/lib/laydate/laydate.js')
        }
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['css-hot-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
                include: [resolve('src')], //限制范围，提高打包速度
                exclude: /node_modules/
            }, {
                test: /\.scss$/,
                use: ['css-hot-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
                include: [resolve('src')],
                exclude: /node_modules/
            },

            {
                test: /\.md$/,
                use: [{
                    loader: 'html-loader'
                }, {
                    loader: 'markdown-loader',
                    options: {
                        pedantic: true,
                        renderer: markdownRenderer()
                    }
                }]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            // {
            //     test: /\.jsx?$/,
            //     loader: 'happypack/loader?id=happy-babel-js',
            //     include: [resolve('src')],
            //     exclude: /node_modules/,
            // },
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            { //file-loader 解决css等文件中引入图片路径的问题
                // url-loader 当图片较小的时候会把图片BASE64编码，大于limit参数的时候还是使用file-loader 进行拷贝
                test: /\.(png|jpg|jpeg|gif|svg)/,
                use: [

                    // {
                    //     loader: 'file-loader',
                    //     options: {
                    //         name: assetsPath('images/[name].[hash:7].[ext]'), // 图片输出的路径}
                    //     }
                    // },
                    {
                        loader: 'url-loader',
                        options: {
                            name: assetsPath('images/[name].[hash:7].[ext]'), // 图片输出的路径
                            limit: 1 * 1024
                        }
                    },
                    // isBuild

                ]

            },

            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: assetsPath('assets/media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    limit: 10000,
                    name: assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                // index:{
                //     chunks: "initial",
                //     name:['jquery','laydate'],
                //     enforce:true 
                // },
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: "initial",
                    name: 'common',
                    chunks: 'all',
                    minChunks: 2,
                    maxInitialRequests: 5, // The default limit is too small to showcase the effect
                    minSize: 0, // This is example is too small to create commons chunks
                    reuseExistingChunk: true, // 可设置是否重用该chunk（查看源码没有发现默认值）
                }
            }
        }
    },
    plugins: [
        new HappyPack({
            id: 'happy-babel-js',
            loaders: ['babel-loader?cacheDirectory=true'],
            threadPool: happyThreadPool
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new webpack.ProvidePlugin({
            join: ['lodash', 'join'],
            // _: ['lodash'],
            $: ['jquery'],
            "react": "React",
            "react-dom": "ReactDOM"
            // laydate: ['laydate']
        }),
        new CheckerPlugin(),
        // new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.dll.js'),
        new ProgressBarPlugin({
            format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)'
        })
    ],
};