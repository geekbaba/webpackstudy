var path = require('path')
var webpack = require('webpack')

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
        ]
    }
}

module.exports = config