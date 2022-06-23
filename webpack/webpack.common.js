const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),

    output: {
        filename: 'javascript/bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
    },

    resolve: {
        extensions: ['.mjs', '.js', '.json', '.jsx'],
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx|.mjs)$/,
                exclude: /node_modules/,
                resolve: {
                    extensions: ['*', '.js', '.jsx'],
                },
                use: ['babel-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|webp)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            outputPath: 'images',
                            publicPath: 'images',
                        },
                    },
                ],
                type: 'javascript/auto'
            },
            {
                test: /\.(pdf)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            outputPath: 'pdf',
                            publicPath: 'pdf',
                        },
                    },
                ],
                type: 'javascript/auto'
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(__dirname, '../public/index.html'),
            filename: './index.html'
        }),
    ],

    devServer: {
        static: {
            directory: path.resolve(__dirname, '../dist'),
        },
        historyApiFallback: true,
        compress: true,
        port: 3006
    },
};