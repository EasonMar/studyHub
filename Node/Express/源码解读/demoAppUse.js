/**
 * app.use()添加中间件
 * 最终是代理到router.use()添加中间件
 * 这部分的使用文档可以查阅官网的`Router#use()`部分
 *
 * 如果fn参数是一个express应用（而非中间件），则会被挂载在指定的_route_上
 * @public
 */
app.use = function use(fn) {
  var offset = 0;
  var path = '/';

  // default path to '/'
  // disambiguate app.use([fn])
  if (typeof fn !== 'function') {
    var arg = fn;

    while (Array.isArray(arg) && arg.length !== 0) {
      arg = arg[0];
    }

    // first arg is the path
    if (typeof arg !== 'function') {
      offset = 1;
      path = fn;
    }
  }

  // 获取所有的中间件函数
  var fns = flatten(slice.call(arguments, offset));

  // app.use()没有传入中间件时给出报错
  if (fns.length === 0) {
    throw new TypeError('app.use() requires a middleware function')
  }

  // lazy路由，仅在没初始化过路由时才初始化路由
  this.lazyrouter();
  // 路由用于添加管理中间件等
  var router = this._router;

  fns.forEach(function (fn) {
    /**
     * 处理fn是中间件而不是express应用的情况
     * 注意的是express是支持主子应用的
     * app实例是包含handle方法和set方法的，这里利用了鸭式辨型的思想
     */
    if (!fn || !fn.handle || !fn.set) {
      // 将中间件添加到路由router的中管理
      return router.use(path, fn);
    }

    debug('.use app under %s', path);

    // 处理挂载的是express应用的情况
    fn.mountpath = path;
    fn.parent = this;

    // restore .app property on req and res
    router.use(path, function mounted_app(req, res, next) {
      var orig = req.app;
      fn.handle(req, res, function (err) {
        setPrototypeOf(req, orig.request)
        setPrototypeOf(res, orig.response)
        next(err);
      });
    });

    // 触发一个子应用挂载的事件
    fn.emit('mount', this);
  }, this);

  // 让app.use支持链式调用
  return this;
};
