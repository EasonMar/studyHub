function route(pathname, res) {
  if(pathname == '/'){
  	res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("Hello World");
    res.end();
  }else if(pathname == '/index'){
  	res.end('index');
  }else{
  	res.end('404');
  }
}
 
exports.route = route;