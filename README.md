##开发环境


##依赖技术点

- webpack
- babel 语法解析
- es6/7 基本语法
- eslint 语法检查
- npm scripts   统一的任务构建
- react 基本流程
- mocha
- karma 


##如何开发

```
$ npm install webpack --save-dev

$ npm install

```

```

$ npm run build

```


```
.babelrc

$ npm install babel-loader babel-core babel-preset-es2015 --save-dev


并且做webpack配置
 webpack2 均使用 rules
```

```
自动产出html

$ npm install html-webpack-plugin --save-dev

```

webpack-dev-server
是基于node express封装的webserver
```

$ npm install webpack-dev-server --save-dev


启动项目配置

webpack-dev-server --progress --port 8080 --content-base dist


也可以在配置文件写入
devServer: {
        contentBase: 'dist',
        inline:true,
        
    }

```

React
*注意:组建命名 必须首字母大写。！！*
```
$ npm install react react-dom --save-dev


$ npm install babel-preset-react --save-dev
```

组建中添加样式
```
$ npm install style-loader css-loader --save-dev

```


###Karma-Mocha测试环境搭建

```
$ npm install karma karma-chrome-launcher karma-mocha --save-dev --save-dev

$ npm install mocha --save-dev


//初始化
./node_modules/.bin/karma init

//然后做一系列的选择
mocha




```

###chai 断言库

```
$ npm install chai karma-chai --save-dev

```

### eslint 代码规则检查

```
$ npm install eslint --save-dev


./node_modules/.bin/eslint --init




$ npm install eslint-plugin-react --save--dev



//检查目录代码
./node_modules/.bin/eslint ./src




//修复代码的问题
./node_modules/.bin/eslint ./src --fix
```

//自动打开浏览器
```

$ npm install --save--dev open-browser-webpack-plugin

```

uglifyJs 压缩代码

```

webpack --config webpack.config.prod.js


var uplifyPlugin = webpack.optimize.UglifyJsPlugin

Error: webpack.optimize.UglifyJsPlugin has been removed, please use config.optimization.minimize instead.

config.optimization.minimize


#修改如下 webpack.config.js

 optimization: {
    minimize: false
  }

```


###给文件头部加上banner 注释
```


,plugins:[
        new htmlWebpackPlugin({
            title:"文件的title"
            ,template:'./src/index.html'
        })
        ,new webpack.BannerPlugin("作者：江浩\n日期：2019-01-30\n协议:MIT\n版本:V1.0.1")
    ]
```


### css单独加载


```
for webpack 1 
$ npm install –save-dev extract-text-webpack-plugin@1.0.1 

for webpack 2 
$ npm install –save-dev extract-text-webpack-plugin@2.1.2 

for webpack 3 
$ npm install –save-dev extract-text-webpack-plugin 

for webpack 4 
$ npm i extract-text-webpack-plugin@next -D


##如上一样的
$ npm install extract-loader --save-dev


```

### hash文件指纹

- hash
- chunkhash
- contenthash
```

//只需要6位

,filename: 'bundle.[hash].js'
,filename: 'bundle.js?[hash:6]'

```




##如何开发属于自己的前端类库

- 基于webpack进行资源构建
- 使用ES6的语法进行
- 将包输出为umd规范的文件
- 使用mocha和chai进行测试
- 使用eslint来进行代码检查
- 基于npm scripts 来集成开发命令


###准备
#####注册账号
http://www.npmjs.com
