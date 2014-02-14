
var x=document.getElementById("coords");



function getLocation()
  {
      var elt = document.createElement("p");
      navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position)
{
    var elt = document.createElement("p");
    elt.innerHTML="Latitude: " + position.coords.latitude + 
	"<br>Longitude: " + position.coords.longitude; 
    x.appendChild(elt);
    initialize(position)
}


var map;
function initialize(p) {
    console.log(p);
  var mapOptions = {
    zoom: 11,
    center: new google.maps.LatLng(p.coords.latitude,p.coords.longitude)
  };
  map = new google.maps.Map(document.getElementById('map'),
      mapOptions);
    var ll = new google.maps.LatLng(p.coords.latitude,p.coords.longitude)
    var marker = new google.maps.Marker({
	position:ll,
	map:map,
	title:'Me'})

}

//google.maps.event.addDomListener(window, 'load', initialize);


getLocation();
