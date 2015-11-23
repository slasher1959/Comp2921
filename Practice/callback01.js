function logStuff (userData) {
    if ( typeof userData === "string")
    {
        console.log(userData);
    }
    else /* if ( typeof userData === "object") */
    {
		console.log('here we are now');
/*        for (var item in userData) {
            console.log(item + ": " + userData[item]);
        }  */
​    }
​}
​​// A function that takes two parameters, the last one a callback function​
​function getInput (options, callback) {
	//var allUserData = [];
    allUserData.push (options);
    //callback (options);
	logStuff (options);
​}
​​// When we call the getInput function, we pass logStuff as a parameter.​
​// So logStuff will be the function that will called back (or executed) inside the getInput function​
​var allUserData = [];
​getInput ({myName:"Rich", speciality:"JavaScript"}, logStuff);
​//  name: Rich​
​// speciality: JavaScript