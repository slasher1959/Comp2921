global.something = 123;

console.log(console === global.console);
console.log(setTimeout === global.setTimeout);
console.log(process = global.process);

// to add something to global
//require('/addToGlobal');
console.log(something + 'comes from the global object');