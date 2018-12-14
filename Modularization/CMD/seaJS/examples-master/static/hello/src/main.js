define(function(require) {

  var Spinning = require('./spinning');

  var s = new Spinning('#container');
  s.render();
  console.log('require模块时会执行模块...所以这里不需要export...');
});

