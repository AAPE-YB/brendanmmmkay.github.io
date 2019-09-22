const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const moment = require('moment');
const now = moment().format('DD-MM-YYYY H:m:s');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const PACKAGE = require('./package.json'),
    version = PACKAGE.version,
    description = PACKAGE.description,
    homepage = PACKAGE.homepage;

const htmlPlugin = new HtmlWebPackPlugin({
    template: './index.html',
    filename: './index.html'
});

const BannerPlugin = new webpack.BannerPlugin({
    banner: `[name] - ${description}, 
@date: ${now}, 
@version: ${version},
@link: ${homepage}`
});

module.exports = {
    entry: {
        simpleParallax: './src/simpleParallax.js',
        'simpleParallax.min': './src/simpleParallax.js',
        index: './test/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: 'simpleParallax',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        libraryExport: 'default'
    },
    optimization: {
        minimize: true,
        minimizer: [
            new UglifyJsPlugin({
                include: /\.min\.js$/
            })
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [htmlPlugin, BannerPlugin]
};
