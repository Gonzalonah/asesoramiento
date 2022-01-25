const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { Template } = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports={
   entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './output'),
        filename: 'main.js',
        },
    devServer:{
        port: 1717
    },
    module:{
        rules: [
            {
            test: /\.css$/i,
            use:[MiniCssExtractPlugin.loader,"css-loader"],
            },
            {
                type: "asset",
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
            },
            {
                test: /\.js$/,
                exclude: /node_module/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                        plugins:["@babel/plugin-proposal-optional-chaining"]
                    },
                },
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
              },
        ],
    },
    plugins:[
        new HtmlWebpackPlugin( {template: "./src/index.html"},),
        new MiniCssExtractPlugin(),
    ],
};