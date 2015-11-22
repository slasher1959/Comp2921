function bar() { };
bar.prototype.abar = 123;

var bas = new bar();

console.log(bas.__proto__.abar);
console.log(bas.__proto__ === bar.prototype);
console.log(bas.abar);