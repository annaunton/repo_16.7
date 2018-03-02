const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var OptimizeJsPlugin = require('optimize-js-plugin');

var env = process.env.NODE_ENV || 'develompent';

var plugins = [
    new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: 'index.html',
        inject:    'body'
    })
]

if(env.trim() === 'production'){
    plugins.push(
        new webpack.optimize.UglifyJsPlugin(),
        new OptimizeJsPlugin({
            sourceMap:false
        })
    )
}

module.exports = {
  entry: [
      "react-hot-loader/patch",
      "./src/index.js"
    ],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test:/\.css$/,
        use: [
            { loader: 'style-loader'},
            {
                loader: 'css-loader',
                options: {
                    modules: true,
                }
            }
        ] 
    }
    ],
  },
    plugins,
};
