$(function () {
    $('body').scrollspy({target: '.header_navbar'});

    initMap();
    // $('.carousel').carousel();
});

function initMap() {
    var mapOptions = {
        zoom: 17,
        scrollwheel: false,
        center: new google.maps.LatLng(55.014570881125, 82.948096990585)
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    new google.maps.Marker({
        position: new google.maps.LatLng(55.014570881125, 82.948096990585),
        map: map,
        zoom: 17
    });
};