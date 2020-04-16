const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv').config({
	path: path.resolve(__dirname, '.env.defaults'),
});

module.exports = {
	entry: './src/index',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		modules: [path.resolve(__dirname, 'src'), 'node_modules'],
	},

	module: {
		rules: [
			{
				test: /\.(ts|tsx)x?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		new webpack.DefinePlugin({
			'process.env': JSON.stringify(dotenv.parsed),
		}),
	],
};
