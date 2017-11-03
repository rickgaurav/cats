var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: __dirname + '/src/js/index.js',
    output: {
        path: __dirname + "/build/",
        filename: 'bundle.js'
    },
    devtool: 'cheap-module-source-map',
    plugins: [
        new CleanWebpackPlugin([__dirname + "/build/bundle.js"], {
            root: __dirname,
            verbose: true
        }),
        new CopyWebpackPlugin([
            {
                from:'src/images',
                to:'images'
            }
        ])
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['react', 'env', 'stage-0']
                }
            }
        ]
    }
};