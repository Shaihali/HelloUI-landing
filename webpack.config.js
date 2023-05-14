const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require ( "copy-webpack-plugin" );

module.exports = {
	entry: {
		index: './src/index.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset',
        generator: {
          filename: 'assets/[name][ext]',
        },
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
		}),
		// new  CopyPlugin ( { 
    //   patterns : [ 
    //     {  from : "assets" ,  to : "assets"  } , оставлю как один из вариантов копирование файлов
    //   ] , 
    // } ) 
	],
	devServer: {
    static: './dist',
    port: 8080,
    open: true,
  },
	mode: 'development',
	devtool: 'inline-source-map',
};
