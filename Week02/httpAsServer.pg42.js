var http = require('http');

var server = http.createServer(function (request, response) {
	console.log('got a request');
	response.write('hello!');
	response.end();
})

server.listen(3000);
console.log('Server running at http://127.0.0.1:300/');