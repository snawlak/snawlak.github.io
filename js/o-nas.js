var center = [52.280, 21.240];
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

var chamrousseMarker = L.marker(chamrousse).addTo(map);
var wellingtonMarker = L.marker(wellington).addTo(map);
var jantarMarker = L.marker(jantar).addTo(map);
var singapurMarker = L.marker(singapur).addTo(map);
var malezjaMarker = L.marker(malezja).addTo(map);
var tajwanMarker = L.marker(tajwan).addTo(map);
var pekinMarker = L.marker(pekin).addTo(map);
var dohaMarker = L.marker(doha).addTo(map);
var malmoMarker = L.marker(malmo).addTo(map);
var maltaMarker = L.marker(malta).addTo(map);
var grecjaMarker = L.marker(grecja).addTo(map);
var austriaMarker = L.marker(austria).addTo(map);
var dreznoMarker = L.marker(drezno).addTo(map);
var veneziaMarker = L.marker(venezia).addTo(map);
var krakowMarker = L.marker(krakow).addTo(map);

var veneziaPopup =  "<div class='city-container'>"+
                    "   <h3 class='city-name'>"+
                    "       Wenecja"+    
                    "   </h3>"+
                    "   <img src='img/gallery/6.jpeg' alt='venezia' class='city-img'>"+
                    "   <p class='city-description'>"+
                    "   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"+
                    "   </p>"+
                    "</div>";
var malmoPopup =    "<div class='city-container'>"+
                    "   <h3 class='city-name'>"+
                    "       Wenecja"+    
                    "   </h3>"+
                    "   <img src='img/gallery/6.jpeg' alt='venezia' class='city-img'>"+
                    "   <p class='city-description'>"+
                    "   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"+
                    "   </p>"+
                    "</div>";



veneziaMarker.bindPopup(veneziaPopup).openPopup();
malmoMarker.bindPopup(malmoPopup).openPopup();
