const http = require('http');
const finalhandler = require('finalhandler');

class Express {
  use(path, handler) {
    if (!arguments.length) {
      throw Error('miss arguments');
    }
    if (arguments.length === 1) {
      handler = path;
      path = '/';
    }
    if (!this.router) {
      this.router = new Router();
    }
    this.router.use(path, handler);
  }

  listen() {
    const server = http.createServer(this._handle.bind(this));
    return server.listen.apply(server, arguments);
  }

  _handle(req, res) {
    const done = finalhandler(req, res);
    if (!this.router) {
      done();
      return;
    }
    this.router.handle(req, res, done);
  }
}

class Router {
  constructor() {
    this.stacks = [];
  }

  use(path, handler) {
    const layer = new Layer(path, handler)
    this.stacks.push(layer);
  }

  handle(req, res, done) {
    let index = 0;
    const stacks = this.stacks;
    const self = this;

    next();

    function next(error) {
      // 迭代完所有中间件后执行done逻辑
      if (index >= stacks.length) {
        done(error);
        return;
      }

      let layer;
      let isMatch;

      while(!isMatch && index < stacks.length) {
        layer = stacks[index++];
        isMatch = self.matchMiddleware(req.url, layer.path);
      }

      // 迭代完发现没有任何匹配的中间件则直接done
      if (!isMatch) {
        done(error);
        return;
      }

      // 调用中间件处理函数
      if (error) {
        layer.handleError(error, layer.handle, req, res, next);
      } else {
        layer.handleRequest(layer.handle, req, res, next);
      }
    };
  }

  // 最基本的中间件是否匹配的逻辑
  matchMiddleware(url, path) {
    return url.slice(0, path.length) === path;
  }
}

class Layer {
  constructor(path, fn, ops) {
    this.path = path;
    this.handle = fn;
    this.ops = ops || {};
  }

  // 调用错误处理中间件
  handleError(error, fn, req, res, next) {
    // 如果不是错误处理中间件则跳过
    if (fn.length !== 4) {
      next();
      return;
    }
    try {
      fn(error, req, res, next);
    } catch (error) {
      next(error);
    }
  }

  // 调用请求处理中间件
  handleRequest(fn, req, res, next) {
    // 如果不是普通中间件则跳过
    if (fn.length !== 3) {
      next();
      return;
    }
    try {
      fn(req, res, next);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Express