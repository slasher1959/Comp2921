//Showing that asyncrhonous needs to be inside the callback. AND---
//adding the code needed so outside the error can detect/know about the error
function getConnection(callback) {
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
		callback(e, null);
	}
	finally {
		console.log('this is always executed');
	}
}

//Usage
getConnection(function (e, goodConnection) {
	if(e) {
		console.log('Error message passed to main code: ', e.message);
	} else {
		console.log('Success: ', goodConnection);
	}
});

