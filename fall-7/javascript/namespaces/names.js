


var makeAdder = function(inc) {
    var x = 0;
    return function() {
	x = x + inc;
	 console.log(x);
     };
 }

 var x = 12345;

 var objectAsNS = {
     x :10,
     f : function() {
	 console.log("In the function");
	 console.log(x); // this gives us the global x which is 12345
	 console.log(this.x); // gives us the x from THIS instance (10);
	 console.log(objectAsNS.x); // Give us the x under objectAsNS which is the 10
     }
 }

// This creates a single object closureAsNS which you can use to encapsulate an
// entire project
var closureAsNS  = function(){
    var x = 20; // this is kindof like a private variable
    return {
	x : 30, // this is kindof like a public variable
	f : function() {
	    console.log("In the function");
	    console.log(x); // This logs the x in the closure (the 20), NOT the one in the object.
	    console.log(this.x);  // the x in the object (the one with the 30)
	    console.log(closureAsNS.x); // also gets the one in the object
	    console.log(window.x); // window refers to the global namespace
	}
    }
}() // <- the parens run this function and returns the object/dictionary which is stored
    // in the variable closureAsNS


// this one makes multiple environments
var closureEnv  = function(){
    var x = 20; // this is kindof like a private variable
    return {
	x : 30, // this is kindof like a public variable
	f : function() {
	    x=x+1;
	    this.x = this.x+1;
	    window.x = window.x+1;
	    console.log("In the function");
	    console.log(x); // This logs the x in the closure (the 20), NOT the one in the object.
	    console.log(this.x);  // the x in the object (the one with the 30)
	    console.log(closureAsNS.x); // also gets the one in the object
	    console.log(window.x); // window refers to the global namespace
	}
    }
} // <- no parens so we can make multiple environments

var env1 = closureEnv();
var env2 = closureEnv();

