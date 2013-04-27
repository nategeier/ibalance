
$(document).ready(function() {
  // Handler for .ready() called.

  function initialize() {
    var mapOptions = {
      zoom: 19,
      center: new google.maps.LatLng(45.528337,-122.677338),
      mapTypeId: google.maps.MapTypeId.SATELLITE,
      disableDefaultUI: true,
    }
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  }

  initialize();
});

