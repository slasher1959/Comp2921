var t1 = new Date().getTime();
var foo1 = require('./exports1.foo');
console.log(new Date().getTime() - t1);

var t2 = new Date().getTime();
var foo2 = require('./exports1.foo');
console.log(new Date().getTime() - t2);