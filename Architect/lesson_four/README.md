## 第四课

主要内容：丰富前端部分 `webpack` 配置

1. 处理components、views/common里的内容。把他们都直接copy到对应发布路径上： copy-webpack-plugin
- 这里只是纯粹拷文件，不要用html-webpack-plugin，因为使用html-webpack-plugin会触发我们自定义的htmlAfterWebpackPlugin
2. 开发时页面刷新：webpack-livereload-plugin
3. 处理css文件