
var center = [52.280, 21.200]

var map = L.map('mapid', { dragging: !L.Browser.mobile }).setView(center, 12);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic25hd2xhayIsImEiOiJja3ZjNHN0ZzIzcGVjMnJscHkzc2Rjc2x5In0.SQhNS-a2oX7rIT6Ers9-hQ'
}).addTo(map);

var weddingMarker = L.marker([52.315915, 21.1942092]).addTo(map).on('click', function(e) {map.panTo(new L.LatLng(e.latlng.lat - 20, e.latlng.lng));});;
var churchMarker = L.marker([52.2343208, 21.2064346]).addTo(map).on('click', function(e) {map.panTo(new L.LatLng(e.latlng.lat - 20, e.latlng.lng));});;

var weddingPopup = "<div class='popup-container'>" +
    "   <h3 class='popup-name'>" +
    "       Wesele" +
    "   </h3>" +
    "   <img src='img/zamkowa.jpg' alt='italy' class='popup-img'>" +
    "   <p class='popup-description'>" +
    "   Dom Weselny 'Zamkowa'<br>ul. Kasprzykiewicza 81, 05-200 Leśniakowizna<br>" +
    "   </p>" +
    "<a target='_blank' href='https://goo.gl/maps/tapUjYaT3NKuEG8V7'><h6>Otwórz w Google Maps</h6></a>" +
    "<a target='_blank' href='https://wesele-zamkowa.pl/'><h6>Otwórz stronę internetową</h6></a>" +
    "</div>";

var churchPopup = "<div class='popup-container'>" +
    "   <h3 class='popup-name'>" +
    "       Ślub" +
    "   </h3>" +
    "   <img src='img/church-pic.jpg' alt='italy' class='popup-img'>" +
    "   <p class='popup-description'>" +
    "   Parafia Najśw. Serca Pana Jezusa w Starej Miłosnej<br>ul. Jana Pawła II 8/10, 05-077 Warszawa<br>" +
    "   </p>" +
    "<a target='_blank' href='https://goo.gl/maps/ATj38ndE9Auu4R729'><h6>Otwórz w Google Maps</h6></a>" +
    "</div>";
weddingMarker.bindPopup(weddingPopup).openPopup();
churchMarker.bindPopup(churchPopup).openPopup();

function getWithZero(value) {
    return value < 10 ? "0" + value : value
}


// var legend = L.control({ position: 'bottomcenter' });
// legend.onAdd = function (map) {

//     var div = L.DomUtil.create('div', 'map-info');
//     labels = ['Poruszanie mapy za pomocą dwóch palców.'],



//         div.innerHTML = labels.join('<br>');
//     return div;
// };
// legend.addTo(map);





