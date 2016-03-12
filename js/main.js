/**
 * Created by home on 02.03.2016.
 */
$(function() {
  $('body').scrollspy({ target: '.header_navbar' });


  // $('.carousel').carousel();
});

function initialize() {
//    var image = '/local/templates/main/img/marker.png';
  var mapOptions = {
    zoom: 17,
    scrollwheel: false,
    center: new google.maps.LatLng(55.014570881125,82.948096990585)
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);

  var myLatLng164 = new google.maps.LatLng(55.014570881125,82.948096990585);
  var Marker164 = new google.maps.Marker({
    position: myLatLng164,
    map: map,
    // icon: image,
    zoom: 17
  });
}

google.maps.event.addDomListener(window, 'load', initialize);