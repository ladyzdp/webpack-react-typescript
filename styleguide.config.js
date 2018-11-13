const path = require('path');
const glob = require('glob');
const common = require('./config/webpack.common');
// console.log(common)
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
	title: 'Art-design ', //项目名称
	serverHost: 'localhost', //host
	serverPort: 6066, //端口
	exampleMode: "expand", //定义示例代码选项卡的初始状态 collapse折叠  hide隐藏  expand默认展开
	pagePerSection: true, //每页渲染一个部分或组件
	template: {
		favicon: 'https://assets-cdn.github.com/favicon.ico'
	},
	sections: [{
			name: '',
			content: 'src/components/readme.md'
		},
		{
			name: '组件 Components',
			components: () => ([
				path.resolve(__dirname, 'src/components/flippy', 'index.js'),

			])
		},
		{
			name: '表单 Forms',
			components: () => ([
				path.resolve(__dirname, 'src/components/filter', 'index.js'),
				path.resolve(__dirname, 'src/components/form', 'index.js'),
			])
		},
		{
			name: '布局 Layout',
			sections: [{
					name: "内容 container",
					components: path.resolve(__dirname, 'src/components/container', 'index.js')
				},
				{
					name: "栅格 grid",
					components: path.resolve(__dirname, 'src/components/grid', 'index.js')
				}
			]
		},

		// {
		//   name: 'Scripts',
		//   components: () => ([
		//     path.resolve(__dirname, 'src/components/typekit', 'index.js')
		//   ])
		// },
		// {
		//   name: 'Theming',
		//   components: () => ([
		//     path.resolve(__dirname, 'src/components/traits-provider', 'index.js')
		//   ])
		// },
		// {
		//   name: 'Higher Order Components',
		//   sections: [
		//     {
		//       name: 'withForm',
		//       content: 'src/components/with-form/Readme.md'
		//     },
		//     {
		//       name: 'withToggle',
		//       content: 'src/components/with-toggle/Readme.md'
		//     }
		//   ]
		// }
	],
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
					// include: ['src'],
					exclude: /node_modules/
				}
			],
		},
	}
	// webpackConfig:require("./config/webpack.common")
	// resolver: require('react-docgen').resolver.findAllComponentDefinitions,
	// propsParser: require('react-docgen-typescript').withDefaultConfig({ propFilter: { skipPropsWithoutDoc: true } }).parse
};