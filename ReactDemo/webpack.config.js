var webpack = require("webpack");
var path = require('path')
module.exports = {
    entry: './Scripts/react/demo.jsx',
    output:{
        filename: './Scripts/react/demo.js'
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader:'babel-loader?presets[]=es2015&presets[]=react'
            }
        ]
    }
};