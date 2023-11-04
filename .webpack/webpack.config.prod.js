const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: 'production',
    devtool: false,
    entry: {
        main: "./src/index.js",
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: "bundle.js",
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
    optimization: {
        minimizer: [
            new TerserPlugin()
        ],
    },
    stats: {
        children: true,
        errorDetails: true,
    },
};