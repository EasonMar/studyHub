var methods = require('methods');

/**
 * Delegate `.VERB(...)` calls to `router.VERB(...)`.
 * 将app[method]调用委托到router.route上调用
 */
methods.forEach(function(method){
  app[method] = function(path){
    // 如果是app.get调用且参数只有一个，则作为获取配置方法使用
    if (method === 'get' && arguments.length === 1) {
      // app.get(setting)
      return this.set(path);
    }

    this.lazyrouter();

    // 调用router.route方法获取route对象
    var route = this._router.route(path);
    // 将app[method]方法调用委托到route[method]
    route[method].apply(route, slice.call(arguments, 1));
    return this;
  };
});
