

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


function find_closest(d,centers){
    var closest=0;
    var closest_length = dist(d,centers[0]);
    for (var i=1;i<centers.length;i++) {
	var l = dist(d,centers[i]);
	if (l<closest_length) {
	    closest_length = l;
	    closest=i;
	}
    }
    return closest;
}


var colors =['red','green','blue'];
function cluster() {
    var circles = d3.selectAll('circle');
    circles.transition().delay(function(d,i){return 20*i;}).
	style('fill',function(d,i) {
	    var fc = find_closest(d,centers);
	    data[i].cluster=fc;
	    return colors[fc];
	});
}

function uncluster() {
    var circles = d3.selectAll('circle');
    circles.style('fill','black');
}

function recenter() {
    newcenters = [];
    for (var i=0;i<centers.length;i++) {
	var vals = data.filter(function(d) { return d.cluster==i;});
	
	var xs = vals.map(function(d) {return d.x;});
	var ys = vals.map(function(d) {return d.y;});
	
	var xsum = xs.reduce(function(a,b) {return a+b;});
	var ysum = ys.reduce(function(a,b) {return a+b;});

	var xavg = xsum / xs.length;
	var yavg = ysum / ys.length;

	newcenters.push ({ v:[xavg,yavg],x:xavg,y:yavg});
    }

    var cs = d3.selectAll('rect');

    cs.data(newcenters).transition().
	delay(function(d,i) { return i*50;}).
	attr('x',function(d){return scalex(d.x);}).
	attr('y',function(d){return scaley(d.y);});

    return newcenters;
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
    data = make_data(200);
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


function reset() {
    svg.selectAll('circle').remove();
    svg.selectAll('rect').remove();
}

function init() {
    make_initial_svg();
}


function doit() {

    
}


$(document).ready(function() {
		      make_initial_svg();
});
