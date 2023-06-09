const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpeg|jpg|png|svg)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react'
        })
    ],
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        port: 5000,
        historyApiFallback: true
    }
}