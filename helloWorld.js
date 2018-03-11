var http = require('http');

http.createServer(function(req,res){
	var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
        switch(path) {
		case '':
			res.writeHead(200, { 'Content-Type': 'test/html' });
			res.end('<html>Homepage</html>');
			break;
		case '/about':
			res.writeHead(200, { 'Content-Type': 'test/html' });
			res.end('<html>About</html>');
			break;
		default:
			res.writeHead(404, { 'Content-Type': 'test/html' });
			res.end('<html>Not Found</html>');
			break;
	}
}).listen(8080);

console.log('Server started on localhost:8080; press Ctrl-C to terminate....');
