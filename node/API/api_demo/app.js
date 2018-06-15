const server = require('./http.js');
const route = require('./router.js');

server.start(route.route);