

var logResponse = function(d) {
    console.log(d);
}


var go = function() {
/* under gunicorn this works right - all the fast callbacks 
 fire before the slow one. Under flask's server since it suffers from the Global Interpreter Lock, it doesn't 

    $.get("/getSlow",logResponse);
    $.get("/getFast",logResponse);
    $.get("/getFast",logResponse);
    $.get("/getFast",logResponse);
    $.get("/getFast",logResponse);
*/

/*  
  $.get("/getSlow",function() {
	console.log("Done with slow");
	$.get("/getFast",function (d) {
	    console.log("Done with fasdt");
	})
    });
 */


}



var getStringSlow = function(next) {
    $.get("/getSlow",next);
}

var upcase = function(d) {
    $.get("/upcase",{string:d},done);
}

var done = function(d) {
    console.log(d);
}


$(document).ready(function() {

});

