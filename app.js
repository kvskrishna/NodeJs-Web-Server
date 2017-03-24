var http = require('http');

var server = http.createServer(function (request, response) {
	// body...

	response.writeHead(200, {"content-type" : "text/plain"});
	response.end("Hello World")
});

server.listen(8000);

console.log("server running at http://localhost:8000");