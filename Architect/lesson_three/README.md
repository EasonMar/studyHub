## 第三课

主要内容：前端部分项目结构 及 构建

1. components/widgets: 组件
2. views: 页面
3. ### webpack config: 配置工程师，这部分是重中之中，可以扩展出好多内容
4. 结构预览
```
webapp
    ├─components(组件)
    │  ├─esheader(es头部组件)
    │  │       esheader.css
    │  │       esheader.html
    │  │       esheader.ts
    │  └─ …… (可以扩展其他组件)
    │
    └─views
        ├─common(页面公共部分)
        │      layout.html
        │
        ├─index(主页)
        │   │  index-index.entry.ts(页面的入口文件)
        │   │
        │   └─pages
        │           index.html
        └─ …… (可以扩展其他页面)
```

5. 关键知识点
```
1. webpack:
- `yargs-parser` 获取命令行参数
- 解析多页面入口文件，并为每个页面新建 `HtmlWebpackPlugin` 实例，生成html (swig模板)
- `webpack-merge` 合并各webpack配置
- `HtmlAfterWebpackPlugin` 编写webpack插件，`htmlWebpackPluginAfterHtmlProcessing` 钩子里，
  `htmlPluginData` 数据：`htmlPluginData.assets` 、 `htmlPluginData.html`  
- `HappWebpackPlugin` 加速打包过程，需要明确如何使用happypack

2. components和views部分文件夹结构，明确该结构下的构建细节
3. `postcss`、`cssNext`的应用
4. `eslint` 的应用
```

6. 问题，并没有处理components --- 第四课的内容