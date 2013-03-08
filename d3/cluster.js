

function dist(a,b) {
    var v1=a.v;
    var v2=b.v;

    var diff = v1.map(function(item,i) {
			  var s = v1[i]-v2[i];
			  return s*s;
		      });
    var sum = diff.reduce(function(a,b) {return a+b;});
    return    Math.sqrt(sum);

}


function make_data(n) {
    var d = [];
    for (var i=0;i<n;i++) {
	var x = (Math.random()*100);
	var y = (Math.random()*100);
	d.push( {v: [x,y], x:x, y:y });
    }
    return d;
}


var labels="abcdefghijklmnopqrstuvwxyz";
var svg;
var data;
var centers;
var scalex,scaley;

function make_initial_svg() {
    data = make_data(40);
    centers = make_data(3);

    svg = d3.select("#svg");

    
    var pts = data.map(function(d){return d.x;});
    var min = d3.min(pts);
    var max = d3.max(pts);
    scalex = d3.scale.linear().domain([min-5,max+5]).range([0,600]);
    pts = data.map(function(d){return d.y;});
    min = d3.min(pts);
    max = d3.max(pts);
    scaley = d3.scale.linear().domain([min-5,max+5]).range([0,400]);


    var x = svg.selectAll('circle').data(data).enter()
	.append('circle')
	.attr({'fill':'black'
	       ,'r':7
	       ,'cx':function(d){return scalex(d.x);}
	       ,'cy':function(d){return scaley(d.y);}
	      });
	       

    svg.selectAll('rect').data(centers).enter().append('rect')
	.attr({'fill':'yellow'
	       ,'height':10
	       ,'width':10
	       ,'x':function(d) {return scalex(d.x)-5;}
	       ,'y':function(d) {return scaley(d.y)-5;}
	       });

}



$(document).ready(function() {
		      make_initial_svg();
});
