var foo = {
	bar: 123
}

function bas() {
	if (this === global) {
		console.log('called from global');
	}
	if (this === foo) {
		console.log('called from foo');
	}
}

//global contex
bas();

foo.bas = bas;
console.log(foo);
foo.bas();