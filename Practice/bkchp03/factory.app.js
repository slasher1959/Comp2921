var foo = require('./factory.foo');

var obj = foo();

console.log(obj.something);
console.log(foo());

obj.something = 456;
console.log(obj.something);
console.log(foo());