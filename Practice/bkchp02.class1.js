// good to create classes with
// prototype the function, but not the properties
// this is because the function generally won't
// change or get written to between instances
// but the properties will be different for each instance, they
// will be written to
/* 
		Pattern to write a class in Javascript
*/
// Class definition

function someClass() {
	// properties go here
	this.someProperty = 'some initial value';
}

// Member functions go here using .prototype
someClass.prototype.someMemberFunction = function () {
	// add function code here
	this.someProperty = 'the changed value';
	console.log(this.someProperty + ': has changed');
	console.log('6 * 8 is: ' + 6 * 8); 
}

//creation
var instanceOfMyClass = new someClass();

//Usage of the class
console.log(instanceOfMyClass.someProperty);
instanceOfMyClass.someMemberFunction();
console.log(instanceOfMyClass.someProperty);