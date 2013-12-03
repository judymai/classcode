



function fact(n) {
    var result = 1;
    for (var i =1 ; i <= n; i++)
	result = result*i;
    return result;
}


var f = function (a,b) {
    return a+b;
}

var stripe = function(q) {
    var items = document.querySelectorAll(q);
    for (var i = 0; i < items.length; i++) {
	if (i%2==0)
	    items[i].classList.add('red');
	else
	    items[i].classList.add('blue');
	}
}

