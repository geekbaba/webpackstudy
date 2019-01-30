var path = require('path')
var webpack = require('webpack')

var htmlWebpackPlugin = require('html-webpack-plugin')
var config = {
    //入口文件
    entry :path.resolve(__dirname,'./src/index.js')

    //输出环境
    ,output:{
        path: path.resolve(__dirname,'dist')
        ,filename: 'bundle.js'
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
                ,use: [ 'style-loader', 'css-loader' ]
                ,include:path.resolve(__dirname,'src')
            }
        ]
    }
    ,plugins:[
        new htmlWebpackPlugin({
            title:"文件的title"
            ,template:'./src/index.html'
        })
        ,new webpack.BannerPlugin("作者：江浩\n日期：2019-01-30\n协议:MIT\n版本:V1.0.1")
    ]
    ,optimization: {
        minimize: true
    }
}

module.exports = config