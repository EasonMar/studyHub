## 简介

```bash
这是一个简易的、可扩展的前端脚手架
```

## 使用

```bash
# 安装 cli
npm i cmic-cli -g

# 安装模板仓库
cmic-cli install cmic-vue-tpl # 注：模板仓库的核心是 yeoman-generator，cli 约定模板包的名称都为特定前缀 cmic-

# 初始化工程
cmic-cli init # 会弹出对话框，然你选择已经安装了的模板仓库，如 cimc-vue-tpl

# 本地调试
cmic-cli dev # 在工程目录下执行，开启本地服务，进行调试

# 构建
cmic-cli build # 在工程目录下执行，调用构建插件，对工程进行 webpack 打包
```

## 参考文章
- [搭建一个企业级脚手架](https://github.com/imaoda/js-front-end-practice/blob/master/搭建一个企业级脚手架.md)
- [Node.js 命令行程序开发教程](http://www.ruanyifeng.com/blog/2015/05/command-line-with-node.html)
- [commander-js](https://www.npmjs.com/package/commander)