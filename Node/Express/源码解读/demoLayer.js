/**
 * 对中间件进行一次包裹，
 * 添加path、handle等属性，并对path的动态参数进行解析
 */
function Layer(path, options, fn) {
  // ==== 确保无论是否使用new关键字调用构造函数，都能得到一个有效的实例 ====
  if (!(this instanceof Layer)) {
    return new Layer(path, options, fn);
  }

  debug('new %o', path)
  var opts = options || {};

  this.handle = fn;
  this.name = fn.name || '<anonymous>';
  this.params = undefined;
  this.path = undefined;
  /**
   * 通过path-to-regexp库解析path中的路由参数
   * 将解析后的参数存放在this.keys中
   */
  this.regexp = pathRegexp(path, this.keys = [], opts);

  // set fast path flags
  this.regexp.fast_star = path === '*'
  this.regexp.fast_slash = path === '/' && opts.end === false
}
