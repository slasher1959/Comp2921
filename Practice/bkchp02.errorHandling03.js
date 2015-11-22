//Showing that asyncrhonous needs to be inside the callback. BUT---
//code outside the error needs to know about the error
setTimeout(function() {
	try {
		console.log('About to throw an error');
		throw new Error('Error thrown');
	}
	catch (e) {
		console.log('Error caught!');
	}
}, 1000);

