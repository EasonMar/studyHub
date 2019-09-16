### 使用方法

1. 本demo为node项目
2. 本demo可能需要使用 `http-server` 建立简单的服务，请通过命令 `npm install http-server -g` 全局安装
3. 本demo的 `server` 文件夹内配置了一个简易 `Node` 服务器，用以模拟需要等待的数据返回（仅race.js使用了该服务，其余的数据返回通过 请求test里面的json数据 模拟）
4. Node服务启动使用了 `hotnode`，方便node服务热更新，请通过 `npm install hotnode -g` 全局安装