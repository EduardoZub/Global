"use strict";

$(document).ready(function() {
  // slick slider script START
  $('.selected-work-slider').slick({
    infinite: true,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [{
      breakpoint: 900,
      settings: {
        slidesToShow: 1
      }
    }]
  }); // tabs script START

  $(".tab__item").not(":first").hide();
  $(".tabs-block .tab-title").click(function() {
    $(".tabs-block .tab-title").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab__item").hide().eq($(this).index()).fadeIn();
  }).eq(0).addClass("active");
}); //script for chexkbox START

$(".checkbox-btn").click(function() {
  $(this).toggleClass("checkbox-ective");
}); //script for map START

function initMap() {
  var Mymap;
  Mymap = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 50.0646501,
      lng: 19.9449799
    },
    zoom: 4,
    // scrollwheel:  false,
    styles: [{
      "elementType": "geometry",
      "stylers": [{
        "color": "#212121"
      }]
    }, {
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#757575"
      }]
    }, {
      "elementType": "labels.text.stroke",
      "stylers": [{
        "color": "#212121"
      }]
    }, {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [{
        "color": "#757575"
      }]
    }, {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#9e9e9e"
      }]
    }, {
      "featureType": "administrative.land_parcel",
      "elementType": "labels",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#bdbdbd"
      }]
    }, {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#757575"
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [{
        "color": "#181818"
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#616161"
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "labels.text.stroke",
      "stylers": [{
        "color": "#1b1b1b"
      }]
    }, {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#2c2c2c"
      }]
    }, {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#8a8a8a"
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [{
        "color": "#373737"
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "labels",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [{
        "color": "#3c3c3c"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "labels",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [{
        "color": "#4e4e4e"
      }]
    }, {
      "featureType": "road.local",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "road.local",
      "elementType": "labels",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#616161"
      }]
    }, {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#757575"
      }]
    }, {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{
        "color": "#000000"
      }]
    }, {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#3d3d3d"
      }]
    }]
  });
  var marker;
  marker = new google.maps.Marker({
    position: {
      lat: 50.049683,
      lng: 19.944544
    },
    map: Mymap,
    icon: "img/marker.png"
  }); // $.getJSON("../lib/map-style.json", function(data) {
  //   Mymap.setOptions({styles: data});
  // });

  var InfoWindow;
  InfoWindow = new google.maps.InfoWindow({
    content: '<h1>Global</h1>'
  });
  InfoWindow.open(Mymap, marker);
  marker.addListener('click', function() {
    InfoWindow.open(Mymap, marker);
  }); //script parallax START

  var scene = document.getElementById('scene');
  var parallaxInstance = new Parallax(scene);

  //script pagePiling START

  function checkSize() {
    if (window.outerWidth > 1024 || window.innerWidth > 1024) {
      $('body').removeClass('no-overflow');
      $('.MAIN').attr('id', 'pagepiling');
      $('#pagepiling').pagepiling({
        menu: '#main-menu',
        anchors: ['section1', 'section2', 'section3', 'section4', 'section5'],
        normalScrollElements: '#map'
      });
      localStorage.setItem('reloaded', 'd');
    } else {
      $('body').addClass('no-overflow');
    }
  }

  checkSize();

  function reloadPage() {
    var reload = localStorage.getItem('reloaded');

    if (reload === 'd') {
      if (window.outerWidth < 1024 || window.innerWidth < 1024) {
        localStorage.setItem('reloaded', 'm');
        location.reload();
      }
    } else {
      checkSize();
    }
  }

  $('.go_to').click(function() {
    if (window.outerWidth > 1024 || window.innerWidth > 1024) return ;
    var scroll_el = $(this).attr('href');

    if ($(scroll_el).length != 0) {
      $('html, body').animate({
        scrollTop: $(scroll_el).offset().top
      }, 500);
      $('body').toggleClass('activation-menu');
    }

    return false;
  });
  reloadPage();
  window.addEventListener('resize', reloadPage);

   //scruipt for menu START
  $('.header-burger,.menu-switch, .menu-text__wrap-text').click(function() {
    $('body').toggleClass('activation-menu');
  });
};
