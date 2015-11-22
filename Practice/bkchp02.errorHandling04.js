//Showing that asyncrhonous needs to be inside the callback. AND---
//adding the code needed so outside the error can detect/know about the error
function myCallbackFunction() {
	setTimeout(function(callback) {
		var goodConnection;
		try {
			console.log('About to throw an error');
			throw new Error('Error thrown');
			// but below we can notify callback that this succeeded
			callback(null, goodConnection);
		}
		catch (e) {
			console.log('Error caught!');
			//notify callback of error caught
			callback(e, null)
		}
	}, 1000);
}

//Usage


