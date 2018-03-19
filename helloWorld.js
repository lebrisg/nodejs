var http = require('http');

http.createServer(function(req,res){
	res.writeHead(200, { 'Content-Type': 'text/html' });
  	res.end('<html>Hello world!</html>');
}).listen(8080);

console.log('Server started on localhost:8080; press Ctrl-C to terminate....');
