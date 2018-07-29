import Koa from 'koa';
import config from './config';
const app = new Koa();

app.listen(config.port, () => {
	console.log(`lesson_one is listenning on ${config.port}`)
})