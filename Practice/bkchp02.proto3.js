function food() {}
food.prototype.bar = 123;

var bas = new food();
var qux = new food();

console.log(bas.bar);
console.log(qux.bar);

food.prototype.bar = 456;

console.log(bas.bar);
console.log(qux.bar);