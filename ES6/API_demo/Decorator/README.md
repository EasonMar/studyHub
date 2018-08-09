> 目前es7还没出，要让es6支持Decorator就需要安装与配置Babel转码器的插件

1. 如果项目已经在用npm管理包
```
//安装
npm i --save-dev babel-plugin-transform-decorators-legacy
```

2. 配置项目目录下的.babelrc 文件（babel配置文件），没有就创建一个
```
//追加大括号内的内容，不懂babel可以搜索相关资料
{
    'plugins': ['transform-decorators-legacy']
}
```


3. [简易教程](https://www.jianshu.com/p/96afd26e7a86)