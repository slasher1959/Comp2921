process.nextTick(function () {
	console.log('next tick has happened')
});

console.log('now this will be done immediately');