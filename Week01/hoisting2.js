var test = 212;

if (true) {
    (function() {
      var test = 383;
    }
  )();
  }
  
console.log(test);