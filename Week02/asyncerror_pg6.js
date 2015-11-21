try {
	setTimeout(function() {
		throw new Error("Oops!");
	}, 2000);
}

catch (e) {
	console.log("Caught an exception " + e.message)
}