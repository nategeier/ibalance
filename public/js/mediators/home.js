
$(document).ready(function() {
  // Handler for .ready() called.

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-7765366-7']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();


  var dNum = .3;
  for(i = 0; i < $('.widePost').length; i ++){
    TweenLite.from($('.widePost')[i], .3, {delay:dNum, css:{opacity:0, y:20}});
    dNum += .2;
  }



  var dNum = .3;
  for(i = 0; i < $('.linkThumb').length; i ++){
    var mc = $('.linkThumb')[i]
    TweenLite.from(mc, .3, {delay:dNum, css:{opacity:0, y:20}});
    dNum += .2;
    $(mc).mouseover(clickObj);
    $(mc).mouseout(outObj);
  }
  
  function clickObj(e){
    var id = e.currentTarget.id;
   

    for(i = 0; i < $('.linkThumb').length; i ++){
      if(id == i + 1){
        TweenLite.to($('.linkThumb')[i], .3, {css:{opacity:1, scaleX:1.05, scaleY:1.05}});
      }else{
        TweenLite.to($('.linkThumb')[i], .3, {css:{opacity:.8, scaleX:.96, scaleY:.96}});
      }
    }


  }

  function outObj(e){
    var id = e.currentTarget.id;
    TweenLite.to(e.currentTarget, .3, {css:{opacity:1, scaleX:1, scaleY:1}});


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
