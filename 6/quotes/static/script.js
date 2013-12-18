
var quotesFactory=function() {
    var insertquote = function(d) {
	var s="<blockquote><p>"+d.quote+"</p></blockquote>";
	var aq=$("#addedquote");
	aq.append(s);
    }
    var addquote = function() {
	$.getJSON("/quote",insertquote)
    }
    
    var clearAdded = function() {
	$("#addedquote").empty();
    }

/* THis looks cleaner but is the same as getRandomQuote 
    var getRandomQuoteCleaner=function() {
	$.getJSON("/quote",insertRandomQuote);
    }
    var insertRandomQuote = function() {
	var s="<blockquote><p>"+d.quote+"</p></blockquote>";
	var elt = $("#randomquote");
	elt.fadeOut(2000, randomQuoteFadein);
    }
    var randomQuoteFadein = function() {
	var elt=$("#randomqute")
	elt.empty();
	elt.append(s);
	elt.fadeIn(2000);
    }
*/

    var getRandomQuote = function() {
	$.getJSON("/quote",function(d) {
	    var s="<blockquote><p>"+d.quote+"</p></blockquote>";
	    var elt = $("#randomquote");
	    elt.fadeOut(2000, function() {
		elt.empty();
		elt.append(s);
		elt.fadeIn(2000);
	    });
	});
	}
    return {
	random : getRandomQuote
	,add : addquote
	,clear: clearAdded
    }
}

var quotes;
var randomQuoteInterval;

$(document).ready(function() {
    quotes = quotesFactory();
    $("#add").click(quotes.add);
    $("#clear").click(quotes.clear);
    randomQuoteInterval = setInterval(quotes.random,7000);
});

