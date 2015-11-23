// a string
var str = "Hello Buffer World!";
// From string to buffer
var buffer = new Buffer(str, 'utf-8');
// From buffer to string
var roundTrip = buffer.toString('utf-8');
console.log(roundTrip + ' is the converted variable'); // Hello
console.log(str = ' is the original variable'); // the original string
console.log(buffer + ' is the buffer variable')