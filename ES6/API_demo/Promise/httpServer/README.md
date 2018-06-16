### 使用方法

1. 本demo为node项目
2. 本demo已配置 `babel` 编译，可以直接将某些ES6代码转为ES5，供浏览器使用，具体命令见 `package.json`
3. 本demo可能需要使用 `http-server` 建立简单的服务，请通过命令 `npm install http-server -g` 全局安装
4. 本demo的 `server` 文件夹内配置了一个简易 `Node` 服务器，用以模拟需要等待的数据返回
5. Node服务启动使用了 `hotnode`，方便node服务热更新，请通过 `npm install hotnode -g` 全局安装