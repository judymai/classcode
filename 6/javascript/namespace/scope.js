
var x = 12345;

var makeAdder = function(inc) {
    var x = 0;
    return function() {
	console.log(x);
	x=x+inc;
    }
 }

myns = {
    x : 20,
    f : function() {
	console.log("in the function");
	console.log(x); // this gets the global x
	console.log(myns.x); // this gets x from mynx
	console.log(this.x); // this gets x from the current context 
    }
}

// This creates a single environment called
// usingClosures that gives us a safe name space and scopes
var usingClosures = function() {
    var x = 30; // this is like a private variable
    return {
	x : 40, // this is like a public variable
	f : function() {
	    x=x+1; // this will modify the x that starts at 30
	    this.x = this.x + 1; // modify the 40
	    window.x = window.x + 1 // and the one that starts at 12345
	    console.log("I'm in the function");
	    console.log(x); // this logs the "closure" x which starts at 30
	    console.log(window.x); // window. whatever access the global env
	    console.log(this.x); // get the one in THIS object (the 40)
	}
    }
}() // <-- the () so that we run this function and return the object
    //         that has the x and the f in it

// usingClosures.x will give us the 40 



// This creates a function that you can use to 
// make multiple environments
var multEnv = function() {
    var x = 30; // this is like a private variable
    return {
	x : 40, // this is like a public variable
	f : function() {
	    x=x+1; // this will modify the x that starts at 30
	    this.x = this.x + 1; // modify the 40
	    window.x = window.x + 1 // and the one that starts at 12345
	    console.log("I'm in the function");
	    console.log(x); // this logs the "closure" x which starts at 30
	    console.log(window.x); // window. whatever access the global env
	    console.log(this.x); // get the one in THIS object (the 40)
	}
    }
}
var env1 = multEnv();
var env2 = multEnv();
// now env1 and env2 have their own "private x" that starts at 30
// and their own "public x" that starts at 40.






