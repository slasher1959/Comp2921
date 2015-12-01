//A Global Variable
var allUserData = [];

//A function to call stuff
function logStuff (userData) {
    if (typeof userData === "string") {
        console.log(userData);
    } else if (typeof userData === "object") {
        for (var item in userData) {
            console.log(item + ": " + userData[item]);
        }
    }
//        console.log("here I am");
}

// A function that takes two parameters, the last one a callback function
function getInput (options, callback, whatItIs) {
    allUserData.push (options);
    callback (options);
    console.log(whatItIs);
}
//logStuff();
//When we call the getInput function, we pass LogStuff as a parameter
//So logStuff will be the function that will be called back (or executed) inside  the
//getInput function
getInput("A String Now", logStuff, "a String Call");
getInput({name: "Rich", specialty: "JavaScript"}, logStuff, "An Object Call");