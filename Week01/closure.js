function outerFunction(arg) {
  var outerVariable = arg;
  
 return function innerFunction() {
     console.log(outerVariable);
  };
  
}

var innerFunction = outerFunction("helloOuterFunction");
//do some other work
innerFunction();
  