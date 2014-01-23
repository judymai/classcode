

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
	console.log(a+" : "+b);
    });

}


var add = function() {
    return arguments[0]+arguments[1];
}

var addAll = function() {
    var sum=0;
    for (var i=0;i<arguments.length;i++) {
	sum = sum + arguments[i];
    }
    return sum;
}


var printArguments = function () {
    console.log(arguments);
}

var dArguments=function() {
    var f1=$.ajax({url:'/delay/8'});
    var f2=$.ajax({url:'/delay/3'});
    var f3=$.ajax({url:'/delay/4'});
    
    $.when(f1,f2,f3).then(function () {
	var r=0;
	for (var i=0;i<arguments.length;i++) {
	    r = r + parseInt(arguments[i][0]);
	    console.log(arguments[i]);
	}
	console.log(r);
    });

}

var dArgumentsApply = function() {
    
    var calls = [1,2,5,1,9,3,2,6];
    
    var defs=[];
    for (var i=0;i<calls.length;i++) {
	defs.push($.ajax({
	    url:"/delay/"+calls[i]
	}));
    }
    console.log(calls);
    console.log(defs);
    $.when.apply(this,defs).then(function () {
	var r=0;
	for (var i=0;i<arguments.length;i++) {
	    r = r + parseInt(arguments[i][0]);
	    console.log(arguments[i]);
	}
	console.log(r);
    });
}
