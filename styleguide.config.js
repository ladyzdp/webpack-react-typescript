const path = require('path');
// const glob = require('glob');
const fs = require('fs');
// const common = require('./config/webpack.common');
const { styles, theme } = require('./styleguide.styles')
const { navBar } = require('./styleguide.navBar');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
	title: 'Art-design ', //项目名称
	serverHost: 'localhost', //host
	serverPort: 6066, //端口
	exampleMode: "expand", //定义示例代码选项卡的初始状态 collapse折叠  hide隐藏  expand默认展开
	pagePerSection: true, //每页渲染一个部分或组件
	contextDependencies:[path.resolve(__dirname, 'src/components')],//允许您指定要监视组件的添加或删除的目录的绝对路径
	template: {
		favicon: 'https://assets-cdn.github.com/favicon.ico'
	},
	styles,
	theme,
	// updateExample(props, exampleFilePath) {
	// 	// props.settings are passed by any fenced code block, in this case
  //   const { settings, lang } = props
  //   // "../mySourceCode.js"
  //   if (typeof settings.file === 'string') {
  //     // "absolute path to mySourceCode.js"
  //     const filepath = path.resolve(exampleFilePath, settings.file)
  //     // displays the block as static code
  //     settings.static = true
  //     // no longer needed
  //     delete settings.file
  //     return {
  //       content: fs.readFileSync(filepath, 'utf8'),
  //       settings,
  //       lang
  //     }
	// 	}
  //   return props
  // },
	sections: navBar,
	webpackConfig: { //webpack 配置
		module: {
			rules: [{
					test: /\.tsx?$/,
					exclude: /node_modules/,
					loader: "ts-loader"
				},
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader'
				},
				{
					test: /\.scss$/,
					use: ['css-loader', 'postcss-loader', 'sass-loader'],
					exclude: /node_modules/
				}
			],
		},
	}
};