const Path = require('path');
const Webpack = require('webpack');

const Package = require("./package.json");

module.exports = {

	mode: 'production',

	watch: false,

	entry:  {
		'ky': './index.js'
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			}
		]
	},

	plugins: [
		new Webpack.DefinePlugin({
				'process.env': {
						VERSION: `'${Package.version}'`
				}
		})
	],

	output: {
		filename: "[name].js",
		path: Path.resolve(__dirname, 'build'),
		pathinfo: true,
		sourceMapFilename: "[file].js.map",
		libraryTarget: 'umd',
    library: 'ky',
    umdNamedDefine: true,
    globalObject: 'this'
	}

};
