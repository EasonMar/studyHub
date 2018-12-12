define(function(require) {

  var Spinning = require('./spinning');

  var s = new Spinning('#container');
  s.render();
  console.log('引入模块时立即执行了...所以这里不需要export...');
});

