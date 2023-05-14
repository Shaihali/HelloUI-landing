const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: {
		index: './src/index.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		assetModuleFilename: 'images/[name][ext][query]',
	},
	module: {
		rules: [
			{
				test: /\.(png|svg|jpg)$/i,
				type: 'asset'
			},
			{ test: /\.scss$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] },
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'style.css'
		})
	],
	devServer: {
    static: './dist',
    port: 8080,
    open: true,
  },
	mode: 'development',
	devtool: 'inline-source-map',
};
