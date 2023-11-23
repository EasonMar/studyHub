/**
 * 如果尚未添加路由，则初始化路由
 *
 * 注意：路由没在defaultConfiguration时初始化，
 * 原因是会读取这些默认，但是默认配置可能会在程序启动后改变
 *
 * @private
 */
app.lazyrouter = function lazyrouter() {
  // router尚未被初始化则创建router
  if (!this._router) {
    /**
     * 实例化路由类，用于管理路由中间件（中间件架构就在该类中实现）
     *
     * Router类的参数最终传递给path-to-regexp库
     * - caseSensitive用于指定解析url参数时是否忽略大小写
     * - strict用于指定解析url参数时是否允许匹配结尾的分界符
     */
    this._router = new Router({
      caseSensitive: this.enabled('case sensitive routing'),
      strict: this.enabled('strict routing')
    });

    /**
     * 默认添加query中间件和expressInit中间件
     * - query中间件作用是解析url中的query参数为键值对集合
     * - middleware.init中间件作用是对res和req对象做一些初始化配置和挂载一些引用
     *
     * 注意：this.get的实现是在methods.forEach()逻辑中，该点比较隐晦，
     * this.get实际触发的是this.set('query parser fn')得到的get效果
     */
    this._router.use(query(this.get('query parser fn')));
    this._router.use(middleware.init(this));
  }
};
