var http = require("http");

function process_request(req, res) {
	var body = 'Welcome to COMP 2912!\n';
	var content_length = body.length;
	res.writeHead(200, {
		'Content-Length':  content_length,
		'Contentk-Type': 'text/plain'
	});
	res.end(body);
}

var s = http.createServer(process_request);
s.listen(8080);