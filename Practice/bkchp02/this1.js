var fool = {
	bar: 123,
	bas: function () {
	console.log('inside this.bar is:', this.bar);
}
}
console.log('foo.bar is: ', fool.bar); // foo.bar is: 123
fool.bas();  // fool.bas is: 123