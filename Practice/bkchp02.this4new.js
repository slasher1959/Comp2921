function bar() {
	this.foo = 123;
	console.log('Is this global: ', this == global);
}

bar();  //will be global
console.log(global.foo);

var newBar = new bar();  //will not be global as this. refers to the newly created object
console.log(newBar.foo);