const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { Template } = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports={
    entry:'./src/stheader.js',
    output:{
        path: path.resolve(__dirname,'./output'),
        filename: 'st.js'
    },
    entry: {
       home: './src/index.js',
       st: './src/sthead.js',
    },
    output: {
        path: path.resolve(__dirname, './output'),
        filename: '[name].js',
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
        new HtmlWebpackPlugin( {
            filename: "index.html", 
            template: "./src/index.html"},),
            new HtmlWebpackPlugin( {
            filename: "st.html", 
            template: "./src/st.html"},),
            /*new HtmlWebpackPlugin( {
            filename: "lt.html", 
            template: "./src/lt.html"},),
            new HtmlWebpackPlugin( {
            filename: "index.html", 
            template: "./src/index.html"},),
            template: "./src/index.html"},),
                        new HtmlWebpackPlugin( {
            filename: "index.html", 
            template: "./src/index.html"},),
            template: "./src/index.html"},),
                        new HtmlWebpackPlugin( {
            filename: "index.html", 
            template: "./src/index.html"},),
            template: "./src/index.html"},),
                        new HtmlWebpackPlugin( {
            filename: "index.html", 
            template: "./src/index.html"},),
            template: "./src/index.html"},),
                        new HtmlWebpackPlugin( {
            filename: "index.html", 
            template: "./src/index.html"},),
            template: "./src/index.html"},),
                        new HtmlWebpackPlugin( {
            filename: "index.html", 
            template: "./src/index.html"},),
            template: "./src/index.html"},),

            */
        new MiniCssExtractPlugin(),
    ],
};