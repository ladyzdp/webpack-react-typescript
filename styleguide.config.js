const path = require('path');
const glob = require('glob');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  title: 'React Style Guide Example',
  components: function () {
    return glob.sync(path.resolve(__dirname, 'components/**/*.tsx'))
      .filter(function (module) {
        return /\/[A-Z]\w*\.tsx$/.test(module);
      });
	},
	resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  propsParser: require('react-docgen-typescript').withDefaultConfig({ propFilter: { skipPropsWithoutDoc: true } }).parse
	// webpackConfig: {
	// 	module: {
	// 		loaders: [
	// 			{
	// 				test: /\.tsx?$/,
	// 				loader: "awesome-typescript-loader"
	// 		},
	// 		{
	// 			test: /\.scss$/,
	// 			use: ['css-hot-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
	// 			include: ['src'],
	// 			exclude: /node_modules/
	// 	}
	// 		],
	// 	},
	// },
  // resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  // propsParser: require('react-docgen-typescript').withDefaultConfig({ propFilter: { skipPropsWithoutDoc: true } }).parse
};