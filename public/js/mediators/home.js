
$(document).ready(function() {
  // Handler for .ready() called.

  var dNum = .3;
  for(i = 0; i < $('.widePost').length; i ++){
    TweenLite.from($('.widePost')[i], .3, {delay:dNum, css:{opacity:0, y:20}});
    dNum += .2;
  }



  var dNum = .3;
  for(i = 0; i < $('.linkThumb').length; i ++){
    TweenLite.from($('.linkThumb')[i], .3, {delay:dNum, css:{opacity:0, y:20}});
    dNum += .2;
  }



  

});


function mapit(lat, long, zoom) {
  var mapOptions = {
    zoom: zoom,
    center: new google.maps.LatLng(lat,long),
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    disableDefaultUI: true,
  }
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
}
