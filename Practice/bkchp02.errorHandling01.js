//normal try/throw/catch block.  Works for synchronous
try {
	console.log('About to throw an error');
	throw new Error('Error thrown');
}
catch (e) {
	console.log('I will only excute if an error is thrown');
	console.log('Error caught: ', e.message);
}
finally {
	console.log('I will execute regardless of what happens');
}