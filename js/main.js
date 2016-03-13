$(function () {
    var body = $('body');

    // menu site
    body.scrollspy({target: '.header_navbar'});

    initMap();
     $('.carousel').carousel();

    // the height of the screen
    body.append('<style>.section.full-height{height:' + $( window ).height() + 'px!important;}</style>')
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

$(window).height();