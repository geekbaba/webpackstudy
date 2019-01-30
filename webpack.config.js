var path = require('path')
var webpack = require('webpack')
var openBrowserPlugin = require('open-browser-webpack-plugin')
var htmlWebpackPlugin = require('html-webpack-plugin')
var extractTextWebpackPlugin = require('extract-text-webpack-plugin')

var website={publicPath:"http://localhost:8080"}
let extractText = new extractTextWebpackPlugin("css/[name].css")
var config = {
    //入口文件
    entry :path.resolve(__dirname,'./src/index.js')

    //输出环境
    ,output:{
        path: path.resolve(__dirname,'dist')
        ,filename: 'bundle.js?[hash:6]'
        ,publicPath:website.publicPath
    }
    ,devServer: {
        contentBase: 'dist'
        ,inline:true
        ,port:8080
        ,stats:{
            colors:true
        }
    }
    ,module:{
        rules:[
            {
                test: /\.js$/
                ,loader: 'babel-loader'
                ,exclude: /node_modules/
            }
            ,
            {
                test: /\.css$/
                ,use: extractText.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                  })
                ,include:path.resolve(__dirname,'src')
            }
        ]
    }
    ,plugins:[
        new htmlWebpackPlugin({
            title:"文件的title"
            ,template:'./src/index.html'
        })
        ,new openBrowserPlugin({
            url:'http://localhost:8080'
        })
        ,extractText
    ]
}

module.exports = config