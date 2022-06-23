const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');

console.log('EJECUTANDO WEBPACK MODE DEV -----------');


module.exports = merge(common, {
    module: {
        rules: [
            {
                test: /\.(sc|c|sa)ss$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
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
    }
});