var map;

function initialize() {
  var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(22.763662,113.342857),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false,
    backgroundColor: "#e8e8e8",
    draggable: false
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);