function addAsync(a, b, callback) {
	setTimeout(function() { callback (a + b);}, 
		3000);
}

var x = 100, y = 200;
addAsync(x, y, function (s) {console.log(s)});