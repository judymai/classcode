
var quotesFactory = function() {
    
    var insertAddedQuote = function(d) {
	var elt = "<blockquote><p>"+d.quote+"</p></blockquote>"
	$("#aquote").append(elt);
    }

    var addQuote = function() {
	$.getJSON("/quote",insertAddedQuote);
    }
    
    var clearAddedQuotes = function() {
	$("#aquote").empty();
    }



/*
    var changeRandomQuote = function() {

	var q;
	var elt=$("#rquote");

	var insertNewRQuote = function() {
	    elt.empty();
	    elt.append(q);
	    elt.fadeIn(2000);
	}
	var removeOldRQuote = function(d) {
	    q = "<blockquote><p>"+d.quote+"</p></blockquote>"
	    elt=$("#rquote");
	    elt.fadeOut(2000,insertNewRQuote);
	}
	$.getJSON("/quote",removeOldRQuote);
    }

*/


    var changeRandomQuote = function() {
	$.getJSON("/quote",function(d) {
	    var q = "<blockquote><p>"+d.quote+"</p></blockquote>"
	    var elt=$("#rquote");
	    elt.fadeOut(2000,function() {
		elt.empty();
		elt.append(q);
		elt.fadeIn(2000);
	    });
	    
	});
    }
    var interval;

    return {
	add : addQuote,
	clear: clearAddedQuotes,
	random : changeRandomQuote,
	interval:interval
    }
    
};

var quotes;

$(document).ready(function() {
    quotes=quotesFactory();
    $("#add").click(quotes.add);
    $("#clear").click(quotes.clear);
    quotes.interval = setInterval(quotes.random,7000)
});

