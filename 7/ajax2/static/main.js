

console.log("hello");


var a1=function() {
    console.log("before");
    $.ajax({url:'/delay/8',
	   success: function(d) {console.log(d);}
	   });

    console.log("between");

    $.ajax({url:'/delay/3',
	   success: function(d) {console.log(d);}
	   });

    console.log("after");

}


var a2=function() {
    console.log("before");
    $.ajax({url:'/delay/8',
	   success: function(d) {
	       console.log(d);
	       $.ajax({url:'/delay/3',
		       success: function(d) {console.log(d);}
		      });
	   }
	   });
    
    console.log("after");

}


var d1 = function(to) {
    var f = $.ajax({url:'/delay/8',
		    timeout:to
		   })
    f.done(function(d) {console.log(d);});
    f.done(function(d) {console.log("also a successfunction")});
    f.fail(function(d) {console.log("The call failed")});
    return f;
}


var d2 = function() {
    var f1 = $.ajax({url:'/delay/8'});
    var f2;
    $.when(f1).then(function(d) {
	console.log(d);
	f2 = $.ajax({url:'/delay/3'});   
	f2.done(function(d) {console.log(d);});
    });
};

var d3=function() {
    var f1=$.ajax({url:'/delay/8'});
    var f2=$.ajax({url:'/delay/3'});
    
    $.when(f1,f2).then(function (a,b) {
	console.log(a[0]+b[0]);
    });

}
