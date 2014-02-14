

var geo=function() {

    var locElt = document.getElementById("coords");
    var mapElt = document.getElementById("map");
    var map,mapOptions,meMarker;
    var ll;

    var makeMap = function(p) {
	ll = new google.maps.LatLng(p.coords.latitude,p.coords.longitude);

	mapOptions = {
	    zoom:12,
	    center:ll
	}
	map = new google.maps.Map(mapElt,mapOptions);
	meMarker = new google.maps.Marker( {
	    position:ll,
	    map:map,
	    title:"me"});

    }
    

    var foundLoc = function(p) {
	var elt = document.createElement("p");
	elt.innerHTML="Lat: "+p.coords.latitude+" Long: "+p.coords.longitude;
	locElt.appendChild(elt);
	makeMap(p);
    }

    var getLoc = function() {
	navigator.geolocation.getCurrentPosition(foundLoc);
    }

    return {
	getLoc : getLoc
    }
}()

geo.getLoc();
