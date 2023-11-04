const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: "source-map",
    cache: true,
    entry: {
        main: "./src/index.js",
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: "bundle.js",
        publicPath: '/'
    },
    devServer: {
        port: 3000,
        hot: true,
        watchContentBase: true,
        headers: { "Access-Control-Allow-Origin": "*" },
        open: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: [/src\/common\/index.js/i, /src\/hooks\/index.js/i],
                sideEffects: false,
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: 'src/assets/[name].[ext]'
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                ],
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'public/images', to: './src/assets' },
            ],
        }),
        new ESLintPlugin(),
    ],
    stats: {
        children: true,
        errorDetails: true,
    },
};
