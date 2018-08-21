 const webpack = require('webpack');
 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');
 const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
 module.exports = merge(common, {
     devtool: 'source-map',
     mode: 'production',
     output: {
         filename: '[name].[hash].js',
         chunkFilename: '[name].[hash].js',
     },
     plugins: [
         new UglifyJSPlugin(),
         new webpack.DefinePlugin({
             'process.env.NODE_ENV': JSON.stringify('production')
         }),
         new webpack.ProvidePlugin({
            // _: 'lodash'
            join: ['lodash', 'join'],
            $:['jquery']
          }),
     ]
 });