var foo = {};
foo.__proto__.bar = 123;
console.log(foo.bar);

function Fool() {};
Fool.prototype.bar = 123;

var bas = new Fool();
console.log(bas.__proto__);
console.log(bas.__proto__ === Fool.prototype);
console.log(bas.bar);
