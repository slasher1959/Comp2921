var express = require('express');

var app = express();

app.get("/", function(request, response) {
	response.send("Hello World");
})

app.listen(3000, function ready() {
	console.log("I am ready waiting for requests");
})