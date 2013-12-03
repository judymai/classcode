



function fact(n) {
    var result = 1;
    for (var i =1 ; i <= n; i++)
	result = result*i;
    return result;
}


var f = function (a,b) {
    return a+b;
}


var redback=function(e) {
    this.classList.toggle('red');
}
var green=function(e) {
    this.classList.toggle('green');
}


var red=function(e) {
    console.log(e);
    var items = document.querySelectorAll('li');
    for (var i = 0; i < items.length; i++) {
	    items[i].classList.toggle('red');
	}
}

var stripe = function(e) {
    console.log(e);
    var items = document.querySelectorAll('li');
    for (var i = 0; i < items.length; i++) {
	if (i%2==0)
	    items[i].classList.add('red');
	else
	    items[i].classList.add('blue');
	}
}

 
// var elt=document.getElementById('b1');
//elt.addEventListener('click',red);
//var elt=document.getElementById('b2');
//elt.addEventListener('click',red);

var elts = document.querySelectorAll('li');
for (var i=0;i<elts.length;i++) {
    elts[i].addEventListener('click',redback);
    elts[i].addEventListener('mouseover',green);
    elts[i].addEventListener('mouseout',green);
}
