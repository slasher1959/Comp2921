function foo() {
console.log('is this called from globals? : ', this === global); // true
console.log('This is the value of global : ', this); 
}
foo();