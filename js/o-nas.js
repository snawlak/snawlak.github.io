var center = [15.1164147, 5.8792051];
var chamrousse = [45.1164147, 5.8792051];
var wellington = [-41.2528099,174.6842183];
var jantar = [54.3441751,19.0366343];
var singapur = [1.3143394,103.7041656];
var malezja = [3.138675,101.6169495];
var tajwan = [25.0855451,121.4914613];
var pekin = [39.9390731,116.1172792];
var doha = [25.2841478,51.4419568];
var malmo = [55.5712736,12.9460962];
var malta = [35.9426466,14.2382668];
var grecja = [37.9908997,23.70332];
var austria = [48.220778,16.3100205];
var drezno = [51.0769658,13.6325041];
var venezia = [45.4046987,12.2472506];
var krakow = [50.0468548,19.9348337];


var map = L.map('map-about-us').setView(center, 3);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic25hd2xhayIsImEiOiJja3ZjNHN0ZzIzcGVjMnJscHkzc2Rjc2x5In0.SQhNS-a2oX7rIT6Ers9-hQ'
}).addTo(map);

var chamrousseMarker = L.marker(chamrousse).addTo(map).on('click', function(e) {map.panTo(new L.LatLng(e.latlng.lat - 20, e.latlng.lng));});
var wellingtonMarker = L.marker(wellington).addTo(map).on('click', function(e) {map.panTo(new L.LatLng(e.latlng.lat - 20, e.latlng.lng));});
var jantarMarker = L.marker(jantar).addTo(map).on('click', function(e) {map.panTo(new L.LatLng(e.latlng.lat - 20, e.latlng.lng));});
var singapurMarker = L.marker(singapur).addTo(map).on('click', function(e) {map.panTo(new L.LatLng(e.latlng.lat - 20, e.latlng.lng));});
var malezjaMarker = L.marker(malezja).addTo(map).on('click', function(e) {map.panTo(new L.LatLng(e.latlng.lat - 20, e.latlng.lng));});
var tajwanMarker = L.marker(tajwan).addTo(map).on('click', function(e) {map.panTo(new L.LatLng(e.latlng.lat - 20, e.latlng.lng));});
var pekinMarker = L.marker(pekin).addTo(map).on('click', function(e) {map.panTo(new L.LatLng(e.latlng.lat - 20, e.latlng.lng));});
var dohaMarker = L.marker(doha).addTo(map).on('click', function(e) {map.panTo(new L.LatLng(e.latlng.lat - 20, e.latlng.lng));});
var malmoMarker = L.marker(malmo).addTo(map).on('click', function(e) {map.panTo(new L.LatLng(e.latlng.lat - 20, e.latlng.lng));});
var maltaMarker = L.marker(malta).addTo(map).on('click', function(e) {map.panTo(new L.LatLng(e.latlng.lat - 20, e.latlng.lng));});
var grecjaMarker = L.marker(grecja).addTo(map).on('click', function(e) {map.panTo(new L.LatLng(e.latlng.lat - 20, e.latlng.lng));});
var austriaMarker = L.marker(austria).addTo(map).on('click', function(e) {map.panTo(new L.LatLng(e.latlng.lat - 20, e.latlng.lng));});
var dreznoMarker = L.marker(drezno).addTo(map).on('click', function(e) {map.panTo(new L.LatLng(e.latlng.lat - 20, e.latlng.lng));});
var veneziaMarker = L.marker(venezia).addTo(map).on('click', function(e) {map.panTo(new L.LatLng(e.latlng.lat - 20, e.latlng.lng));});
var krakowMarker = L.marker(krakow).addTo(map).on('click', function(e) {map.panTo(new L.LatLng(e.latlng.lat - 20, e.latlng.lng));});

var chamroussePopup =  "<div class='city-container'>"+
                    "   <h3 class='city-name'>"+
                    "       Chamrousse"+    
                    "   </h3>"+
                    "   <img src='img/gallery/6.jpeg' alt='venezia' class='city-img'>"+
                    "   <p class='city-description'>"+
                    "   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"+
                    "   </p>"+
                    "</div>";
var wellingtonPopup = "<div class='city-container'>"+
                    "   <h3 class='city-name'>"+
                    "       Wellington"+    
                    "   </h3>"+
                    "   <img src='img/gallery/6.jpeg' alt='venezia' class='city-img'>"+
                    "   <p class='city-description'>"+
                    "   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"+
                    "   </p>"+
                    "</div>";
var jantarPopup =  "<div class='city-container'>"+
                    "   <h3 class='city-name'>"+
                    "       Jantar"+    
                    "   </h3>"+
                    "   <img src='img/gallery/6.jpeg' alt='venezia' class='city-img'>"+
                    "   <p class='city-description'>"+
                    "   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"+
                    "   </p>"+
                    "</div>";
var singapurPopup =    "<div class='city-container'>"+
                    "   <h3 class='city-name'>"+
                    "       Singapur"+    
                    "   </h3>"+
                    "   <img src='img/gallery/6.jpeg' alt='venezia' class='city-img'>"+
                    "   <p class='city-description'>"+
                    "   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"+
                    "   </p>"+
                    "</div>";

var malezjaPopup =  "<div class='city-container'>"+
                    "   <h3 class='city-name'>"+
                    "       Malezja"+    
                    "   </h3>"+
                    "   <img src='img/gallery/6.jpeg' alt='venezia' class='city-img'>"+
                    "   <p class='city-description'>"+
                    "   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"+
                    "   </p>"+
                    "</div>";
var tajwanPopup =    "<div class='city-container'>"+
                    "   <h3 class='city-name'>"+
                    "       Tajwan"+    
                    "   </h3>"+
                    "   <img src='img/gallery/6.jpeg' alt='venezia' class='city-img'>"+
                    "   <p class='city-description'>"+
                    "   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"+
                    "   </p>"+
                    "</div>";
var pekinPopup =  "<div class='city-container'>"+
                    "   <h3 class='city-name'>"+
                    "       Pekin"+    
                    "   </h3>"+
                    "   <img src='img/gallery/6.jpeg' alt='venezia' class='city-img'>"+
                    "   <p class='city-description'>"+
                    "   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"+
                    "   </p>"+
                    "</div>";
var dohaPopup =    "<div class='city-container'>"+
                    "   <h3 class='city-name'>"+
                    "       Doha"+    
                    "   </h3>"+
                    "   <img src='img/gallery/6.jpeg' alt='venezia' class='city-img'>"+
                    "   <p class='city-description'>"+
                    "   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"+
                    "   </p>"+
                    "</div>";

var malmoPopup =  "<div class='city-container'>"+
                    "   <h3 class='city-name'>"+
                    "       Malmo"+    
                    "   </h3>"+
                    "   <img src='img/gallery/6.jpeg' alt='venezia' class='city-img'>"+
                    "   <p class='city-description'>"+
                    "   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"+
                    "   </p>"+
                    "</div>";
var maltaPopup =    "<div class='city-container'>"+
                    "   <h3 class='city-name'>"+
                    "       Malta"+    
                    "   </h3>"+
                    "   <img src='img/gallery/6.jpeg' alt='venezia' class='city-img'>"+
                    "   <p class='city-description'>"+
                    "   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"+
                    "   </p>"+
                    "</div>";
var grecjaPopup =  "<div class='city-container'>"+
                    "   <h3 class='city-name'>"+
                    "       Grecja"+    
                    "   </h3>"+
                    "   <img src='img/gallery/6.jpeg' alt='venezia' class='city-img'>"+
                    "   <p class='city-description'>"+
                    "   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"+
                    "   </p>"+
                    "</div>";
var austriaPopup =    "<div class='city-container'>"+
                    "   <h3 class='city-name'>"+
                    "       Austria"+    
                    "   </h3>"+
                    "   <img src='img/gallery/6.jpeg' alt='venezia' class='city-img'>"+
                    "   <p class='city-description'>"+
                    "   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"+
                    "   </p>"+
                    "</div>";

var dreznoPopup =  "<div class='city-container'>"+
                    "   <h3 class='city-name'>"+
                    "       Drezno"+    
                    "   </h3>"+
                    "   <img src='img/gallery/6.jpeg' alt='venezia' class='city-img'>"+
                    "   <p class='city-description'>"+
                    "   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"+
                    "   </p>"+
                    "</div>";
var veneziaPopup =    "<div class='city-container'>"+
                    "   <h3 class='city-name'>"+
                    "       Wenecja"+    
                    "   </h3>"+
                    "   <img src='img/gallery/6.jpeg' alt='venezia' class='city-img'>"+
                    "   <p class='city-description'>"+
                    "   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"+
                    "   </p>"+
                    "</div>";
var krakowPopup =  "<div class='city-container'>"+
                    "   <h3 class='city-name'>"+
                    "       Kraków"+    
                    "   </h3>"+
                    "   <img src='img/gallery/6.jpeg' alt='venezia' class='city-img'>"+
                    "   <p class='city-description'>"+
                    "   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"+
                    "   </p>"+
                    "</div>";

chamrousseMarker.bindPopup(chamroussePopup).openPopup();
wellingtonMarker.bindPopup(wellingtonPopup);
jantarMarker.bindPopup(jantarPopup);
singapurMarker.bindPopup(singapurPopup);
malezjaMarker.bindPopup(malezjaPopup);
tajwanMarker.bindPopup(tajwanPopup);
pekinMarker.bindPopup(pekinPopup);
dohaMarker.bindPopup(dohaPopup);
malmoMarker.bindPopup(malmoPopup);
maltaMarker.bindPopup(maltaPopup);
grecjaMarker.bindPopup(grecjaPopup);
austriaMarker.bindPopup(austriaPopup);
dreznoMarker.bindPopup(dreznoPopup);
veneziaMarker.bindPopup(veneziaPopup);
krakowMarker.bindPopup(krakowPopup);



//map.panTo(new L.LatLng(40.737, -73.923));
