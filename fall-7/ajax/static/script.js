

var logResults = function(d) {
    console.log(d);
}


var go = function() {

/*    $.get("/getSlow",logResults);
    $.get("/getFast",logResults);
    $.get("/getFast",logResults);
    $.get("/getFast",logResults);
    console.log("back from the get call");

    $.get("/getSlow",function(d) {
	console.log("Back from slow");
	$.get("/getFast",function(d) {
	    console.log("Back from fast");
	    $.get("/getFast",function(d) {
		console.log("Back from fast 2");
		$.get("/getFast",logResults);
	    });
	    });
	});

*/

/*
    $.get("/upcase",{'string':'something to uppercase'},function(d) { 
	console.log(d);
    });
*/

    $.get('/getFast',function (d) {
	console.log(d);
	$.get("/upcase",{string:d},function (d) {
	    console.log(d);
	});
	});

}


$(document).ready(function() {
    // call your start stuff here
    // treat this like main

});

