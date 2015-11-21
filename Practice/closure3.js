function makeAdder(x) {
	return function(y) {
		return x + y;
	}
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

add5;
add10;

console.log(add5(7));
console.log(add10(7));