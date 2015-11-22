function food() {}
food.prototype.bar = 123;

var bas = new food();
var qux = new food();

bas.bar = 456;

console.log(bas.bar);
console.log(qux.bar);
