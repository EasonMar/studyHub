## 第一课

### 主要内容：

1. Node项目**后端**基本架构搭建：BFF架构
```
src/nodeuii/
    │ app.js(应用入口文件)
    │
    ├─config(配置中心：端口、文件路径 等)
    │      index.js
    │
    ├─controllers(路由)
    │      index.js(路由集散中心 --- 配置路由,但不做具体操作)
    │      indexController.js(路由控制中心 --- 配置路由的各项具体操作：各种具体的页面渲染、内容返回等)
    │
    ├─middlewares(中间件)
    │      errorHandler.js(错误处理)
    │
    ├─models(数据模型)
           indexModel.js(模拟请求异步数据)
```
- 关于models补充一点：Model code typically reflects real-world things. This code can hold raw data, or it will define the essential components of your app.


2. 后端代码用gulp来编译
```
// gulp配置：只编译node不认识的东西即可, 后端编译跟前端不同, 也没必要压缩
babel：关闭外部的babelrc - babelrc:false, 
rollup：流清洗(清洗配置文件)
eslint：代码风格检查
process.env.NODE_ENV：根据不同环境执行不同任务(dev、prod)

// src里的前/后端代码(web/nodeuii)都要编译到build里去
```

3. 引入cross-env    
windows不支持NODE_ENV=development的设置方式。会报错。这个迷你的包(cross-env)能够提供一个设置环境变量的scripts，让你能够以unix方式设置环境变量，然后在windows上也能兼容运行。要安装cross-env包才能使用。


4. 引入jsDoc(可选项)     
JSDoc 3 is an API documentation generator for JavaScript, similar to Javadoc or phpDocumentor. You add documentation comments directly to your source code, right alongside the code itself. The JSDoc tool will scan your source code and generate an HTML documentation website for you.


5. 配置package.json：注意不要占用了scripts的预留字段
```
"scripts": {
  "test": "",
  "start": "",
  "build": "",
  "server:dev": "gulp",
  "server:prod": "cross-env NODE_ENV=production gulp",
  "server:lint": "cross-env NODE_ENV=lint gulp",
  "start:dev": "cross-env NODE_ENV=development hotnode ./dist/app.js",
  "docs": "jsdoc ./src/nodeuii/**/*.js -d ./docs/jsdocs"
}
```


6. 容错
- 404页面
- 服务容错
- Log日志：[log4js](https://github.com/log4js-node/log4js-node)



### 备注：
1. 其实第一节课并没有在源码中写道views, views不应该放在nodeuii里面
2. 所有前端的东西，应该放到web/webapp里面