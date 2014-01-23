

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

    $.when(f1,f2).then(function(a,b) {console.log(a+" : "+b);});
    console.log("After the ajax call");
}


var add = function(a,b) {
    console.log(arguments);
    if (!b) {
    return a;
    }
    
   return a+b;
}


var printParams = function() {
    console.log(arguments);
}

var dArguments=function() {


    var f1=$.ajax({url:'delay/8'})
    var f2=$.ajax({url:'delay/3'})
    var f3=$.ajax({url:'delay/4'})

    $.when(f1,f2,f3).then(function() {
	console.log(arguments);
	console.log(arguments[0][0]+arguments[1][0]);
	for (var i = 0; i < arguments.length;i++ ){
	    console.log(arguments[i]);
	}
    });
    console.log("After the ajax call");
}

dArgumentsApply = function() {
    
    var calls = [1,5,4,6,8,2,10,4];
    
    var defs=[];
    for (var i=0;i<calls.length;i++){
	defs.push( $.ajax({url:"/delay/"+calls[i]}));
    }
    console.log(defs);
    $.when.apply(this,defs).then(function() {
	console.log(arguments);
	console.log(arguments[0][0]+arguments[1][0]);
	for (var i = 0; i < arguments.length;i++ ){
	    console.log(arguments[i]);
	}
	});
				 
}



