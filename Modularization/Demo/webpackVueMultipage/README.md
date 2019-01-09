# webpack+vue组件化开发多页面vm项目

## 工程化
- webpack + fis3(jello)
- webpack打包模块、组件
- fis3(jello)支持本地vm运行时调试
- jenkins实现发布构建(每次都需要在服务器中装npm包吗？具体看脚本怎么配置)
- rundeck实现发布部署
- webpack打包之后，fis3起服务监听构建后的文件夹

## 组件化
- components下各组件用.vue的SFCs(单文件组件)形式组织，编译成js
- vm直接拷贝