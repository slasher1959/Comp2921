/* global fs */

fs.open('nonexistent.txt', 'r', function(err, handle) {
	if (err) {
		console.log("ERROR " + err.code + "(" +
			err.message + ")");
		return;
	}	
	//handle the file here
	console.log("Read the file here...")
});