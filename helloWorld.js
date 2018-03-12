var http = require('http'),
      fs = require('fs');

function serveStatFile(res, path, contentType, responseCode) {
	if(!responseCode) responseCode = 200;
	fs.readFile(__dirname = path, function(err,data) {
		if(err) {
			res.writeHead(500, { 'Content-Type': 'text/html' });
			res.end('<html>500 - Internal Error</html>');
		} else {
			res.writeHead(500, { 'Content-Type': contentType });
			res.end(data);
		}
	});
}

http.createServer(function(req,res){
	var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
        switch(path) {
		case '':
			serveStaticFile(res, '/public/home.html', 'text/html');
			break;
		case '/about':
			serveStaticFile(res, '/public/about.html', 'text/html');
			break;
		default:
			serveStaticFile(res, '/public/404.html', 'text/html',404);
			break;
	}
}).listen(8080);

console.log('Server started on localhost:8080; press Ctrl-C to terminate....');
