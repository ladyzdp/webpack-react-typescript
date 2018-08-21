const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('./webpack.config.js');

const options = {
    contentBase: './dist',
    hot: true,
    host: 'localhost'
};
webpackDevServer.addDevServerEntrypoints(config, options);
const compile = webpack(config);
const server = new webpackDevServer(compile, options);


server.listen(5000, 'localhost', () => {
    console.log('dev server 启动 ，端口号：5000');
})