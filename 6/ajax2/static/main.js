

console.log("hello");


var a1=function() {


    $.ajax({url:'delay/8',
	    success: function(d) {console.log(d);} 
	   })

    $.ajax({url:'delay/3',
	    success: function(d) {console.log(d);} 
	   })

    console.log("After the ajax call");
}

var a2=function() {


    $.ajax({url:'delay/8',
	    success: function(d) {console.log(d);
				  $.ajax({url:'delay/3',
					  success: function(d) {console.log(d);} 
					 })
				 } 
	   })
    

    console.log("After the ajax call");
}


var d1 = function(to) {
    var d = $.ajax({url:'/delay/5',
		    timeout:to});
    d.done(function(d) {console.log('done');});
    d.done(function(d) {console.log('done2');});
    d.fail(function(d) {console.log('fail');});

    return d;
}

var d2=function() {


    var f1=$.ajax({url:'delay/8'})
    f1.done(function () {console.log("f1 is done")});
    f1.then(function() {console.log("direct then");});

    $.when(f1).then(function() {console.log("yep, it's done");})


    console.log("After the ajax call");
}

var d3=function() {


    var f1=$.ajax({url:'delay/8'})
    var f2=$.ajax({url:'delay/3'})

    $.when(f1,f2).then(function(a,b) {console.log(a[0]+b[0]);});
    console.log("After the ajax call");
}




