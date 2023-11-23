/**
 * 根据options参数初始化路由对象
 * Router类主要用于管理路由，比如路由对应的中间件管理和执行
 */
var proto = module.exports = function(options) {
  var opts = options || {};

  function router(req, res, next) {
    router.handle(req, res, next);
  }

  // 省略部分参数...

  // 存放中间件的集合
  router.stack = [];

  return router;
};


/**
 * use方法添加中间件
 */
proto.use = function use(fn) {
  var offset = 0;
  var path = '/';

  // 省略部分参数的处理，和app.use部分有些类似...

  // 获取path对应的所有中间件
  var callbacks = flatten(slice.call(arguments, offset));

  // 遍历app.use时添加的url对应的中间件集合
  for (var i = 0; i < callbacks.length; i++) {
    var fn = callbacks[i];

    // 对中间件使用Layer类进行包裹一层
    var layer = new Layer(path, {
      sensitive: this.caseSensitive,
      strict: false,
      end: false
    }, fn);

    // layer.route用于标记该layer（中间件）是否是路由处理程序
    layer.route = undefined;

    // 将包裹后的中间件添加到中间件栈中（数据结构本质是队列）
    this.stack.push(layer);
  }

  // 返回this，支持链式调用
  return this;
};
