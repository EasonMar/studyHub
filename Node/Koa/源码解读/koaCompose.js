const koaCompose = require('koa-compose');
function download (ctx, next) {
  console.log('download code');
  next();
  console.log('finished')
}
function check (ctx, next) {
  console.log('check style');
  next();
  console.log('pre finished')
}
function post (ctx, next) {
  console.log('get post')
  next();
  console.log('post result: ', ctx.result);
}
function clean (ctx, next) {
  console.log('clean temp, remove code');
}

const flowEngine = koaCompose([download, check, post, clean]);
flowEngine({result: 'RESULT'});
