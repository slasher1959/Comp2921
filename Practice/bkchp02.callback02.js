function longRunningOperation(callback) {
	// simulate a 3 second operation
	setTimeout(callback, 3000);
}

function webRequest(request) {
	console.log('starting a long operation for request:', request.id);
	longRunningOperation(function (){
		console.log('ending a long running operation for request:', request.id);
	})
}

//simulate a web request
webRequest({id: 1});
webRequest({id: 2});