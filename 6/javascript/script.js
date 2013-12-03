


function fact(n) {
    var result=1;
    for (var i=1;i<=n;i++) {
	result = result * i;
    }
    return result;
}
 
var f = function (a,b) {
    return a+b;
}


var grow = function(q) {
 
    var items = document.querySelectorAll(q)
    for (var i = 0; i < items.length;i++ ) {
	var size = items[i].style.fontSize;
	var sizei=parseInt(size);
	console.log(sizei);
	sizei = sizei + 10;
	console.log(sizei);
	items[i].style.fontSize = sizei+"px";
    }
}
    

var stripe = function(q) {
    var items = document.querySelectorAll(q);
    for (var i = 0; i < items.length;i++ ) {
	if (i%2==0) 
	    items[i].classList.add('red');
	else
	    items[i].classList.add('blue');
    }
}
var redback = function(e) {
    console.log(e);
    this.classList.toggle('redback');
}

var green = function(e) {
    this.classList.toggle('green');
}



/*
   var elt = document.getElementById('button1');
    elt.addEventListener('click',redback);
    elt = document.getElementById('button2');
    elt.addEventListener('click',redback);
*/
var elts = document.querySelectorAll('li');
for (var i=0;i<elts.length;i++) {
    elts[i].addEventListener('click',redback);
    elts[i].addEventListener('mouseover',green);
    elts[i].addEventListener('mouseout',green);
    
}
