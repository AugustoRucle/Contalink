const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

console.log('EJECUTANDO WEBPACK MODE PROD -----------');

module.exports = merge(common, {
    output: {
        publicPath: '.',
    },
    module: {
        rules: [
            {
                test: /\.(sc|c|sa)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 2,
                        },
                    },
                    { loader: 'scoped-css-loader' },
                    {
                        loader: 'sass-loader',
                    },
                ],
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css'
        }),
    ]
});