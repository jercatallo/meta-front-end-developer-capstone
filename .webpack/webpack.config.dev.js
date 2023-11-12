const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map', // Add source maps for better debugging
    entry: {
        main: './src/index.js',
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
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
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: 'src/assets/[name].[ext]',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new CopyWebpackPlugin({
            patterns: [{ from: 'public/images', to: './src/assets' }],
        }),
        new ESLintPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            filename: 'index.html',
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        port: 3000,
        hot: true, // Enable Hot Module Replacement (HMR)
        open: true, // Open the default browser when the server starts
        watchContentBase: true,
        headers: { "Access-Control-Allow-Origin": "*" },
        historyApiFallback: true,
    },
    stats: {
        children: true,
        errorDetails: true,
    },
};