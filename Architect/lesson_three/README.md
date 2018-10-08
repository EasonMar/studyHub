## 第三课

主要内容：前端部分项目结构

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