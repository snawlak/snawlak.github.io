var center = [-5.1164147, 35.8792051];
var francja = [45.1164147, 5.8792051];
var newZealand = [-41.2528099,174.6842183];
var poland = [54.3441751,19.0366343];
var singapur = [1.3143394,103.7041656];
var malezja = [3.138675,101.6169495];
var tajwan = [25.0855451,121.4914613];
var katar = [25.2841478,51.4419568];
var szwecja = [55.5712736,12.9460962];
var malta = [35.9426466,14.2382668];
var grecja = [37.9908997,23.70332];
var austria = [48.220778,16.3100205];
var germany = [50.1213479,8.496482];
var italy = [45.4046987,12.2472506];
var andora = [42.5423883,1.5276535];
var spain = [40.4381311,-3.8196194];
var sanMarino = [43.9429344,12.4250739];
var china = [39.9375346,115.837023];
var czechy = [49.8001306,14.3539628];
var dania = [55.6711876,12.4537421];


var map = L.map('map-about-us', { dragging: !L.Browser.mobile }).setView(center, 2);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic25hd2xhayIsImEiOiJja3ZjNHN0ZzIzcGVjMnJscHkzc2Rjc2x5In0.SQhNS-a2oX7rIT6Ers9-hQ'
}).addTo(map);

var francjaMarker = L.marker(francja).addTo(map).on('click', function(e) {map.panTo(new L.LatLng(e.latlng.lat - 20, e.latlng.lng));});
var newZealandMarker = L.marker(newZealand).addTo(map).on('click', function(e) {map.panTo(new L.LatLng(e.latlng.lat - 20, e.latlng.lng));});
var polandMarker = L.marker(poland).addTo(map).on('click', function(e) {map.panTo(new L.LatLng(e.latlng.lat - 20, e.latlng.lng));});
var singapurMarker = L.marker(singapur).addTo(map).on('click', function(e) {map.panTo(new L.LatLng(e.latlng.lat - 20, e.latlng.lng));});
var malezjaMarker = L.marker(malezja).addTo(map).on('click', function(e) {map.panTo(new L.LatLng(e.latlng.lat - 20, e.latlng.lng));});
var tajwanMarker = L.marker(tajwan).addTo(map).on('click', function(e) {map.panTo(new L.LatLng(e.latlng.lat - 20, e.latlng.lng));});
var katarMarker = L.marker(katar).addTo(map).on('click', function(e) {map.panTo(new L.LatLng(e.latlng.lat - 20, e.latlng.lng));});
var szwecjaMarker = L.marker(szwecja).addTo(map).on('click', function(e) {map.panTo(new L.LatLng(e.latlng.lat - 20, e.latlng.lng));});
var maltaMarker = L.marker(malta).addTo(map).on('click', function(e) {map.panTo(new L.LatLng(e.latlng.lat - 20, e.latlng.lng));});
var grecjaMarker = L.marker(grecja).addTo(map).on('click', function(e) {map.panTo(new L.LatLng(e.latlng.lat - 20, e.latlng.lng));});
var austriaMarker = L.marker(austria).addTo(map).on('click', function(e) {map.panTo(new L.LatLng(e.latlng.lat - 20, e.latlng.lng));});
var niemcyMarker = L.marker(germany).addTo(map).on('click', function(e) {map.panTo(new L.LatLng(e.latlng.lat - 20, e.latlng.lng));});
var italyMarker = L.marker(italy).addTo(map).on('click', function(e) {map.panTo(new L.LatLng(e.latlng.lat - 20, e.latlng.lng));});
var andoraMarker = L.marker(andora).addTo(map).on('click', function(e) {map.panTo(new L.LatLng(e.latlng.lat - 20, e.latlng.lng));});
var spainMarker = L.marker(spain).addTo(map).on('click', function(e) {map.panTo(new L.LatLng(e.latlng.lat - 20, e.latlng.lng));});
var sanMarinoMarker = L.marker(sanMarino).addTo(map).on('click', function(e) {map.panTo(new L.LatLng(e.latlng.lat - 20, e.latlng.lng));});
var chinaMarker = L.marker(china).addTo(map).on('click', function(e) {map.panTo(new L.LatLng(e.latlng.lat - 20, e.latlng.lng));});
var czechyMarker = L.marker(czechy).addTo(map).on('click', function(e) {map.panTo(new L.LatLng(e.latlng.lat - 20, e.latlng.lng));});
var daniaMarker = L.marker(dania).addTo(map).on('click', function(e) {map.panTo(new L.LatLng(e.latlng.lat - 20, e.latlng.lng));});

var francjaPopup =  "<div class='city-container'>"+
                    "   <h3 class='city-name'>"+
                    "       Francja"+    
                    "   </h3>"+
                    "   <img src='img/our-story/Francja.JPG' alt='italy' class='city-img'>"+
                    // "   <p class='city-description'>"+
                    // "   Chamourse: miejsce szczególne w naszej pamięci, tam się poznaliśmy. #ktoś przegrał zakład - Magda :) <br>Toulouse <br>Carcassonne"+
                    // "   </p>"+
                    "</div>";
var newZealandPopup = "<div class='city-container'>"+
                    "   <h3 class='city-name'>"+
                    "       Nowa Zelandia"+    
                    "   </h3>"+
                    "   <img src='img/our-story/NowaZelandia.JPG' alt='italy' class='city-img'>"+
                    // "   <p class='city-description'>"+
                    // "   Podróż do której często wracamy myślami. Miejsce do którego jeszcze raz przylecimy by dalej eksplorować świat kiwi i All Blacks  #namiot #piękne gwiazdy #cudne widoki."+
                    // "   </p>"+
                    "</div>";
var polandPopup =  "<div class='city-container'>"+
                    "   <h3 class='city-name'>"+
                    "       Polska"+    
                    "   </h3>"+
                    "   <img src='img/our-story/Polska.JPG' alt='italy' class='city-img'>"+
                    // "   <p class='city-description'>"+
                    // "   Józefów - Poznań<br>Kraków 06'2017<br>Jantar wazny 02'2020<br>Ruś Mała drugi dom <br>"+
                    // "   </p>"+
                    "</div>";
var singapurPopup =    "<div class='city-container'>"+
                    "   <h3 class='city-name'>"+
                    "       Singapur"+    
                    "   </h3>"+
                    "   <img src='img/our-story/Singapur.JPG' alt='italy' class='city-img'>"+
                    // "   <p class='city-description'>"+
                    // "   #zakazy<br>#nowoczesność"+
                    // "   </p>"+
                    "</div>";

var malezjaPopup =  "<div class='city-container'>"+
                    "   <h3 class='city-name'>"+
                    "       Malezja"+    
                    "   </h3>"+
                    "   <img src='img/our-story/Malezja.JPG' alt='italy' class='city-img'>"+
                    // "   <p class='city-description'>"+
                    // "   "+
                    // "   </p>"+
                    "</div>";
var tajwanPopup =    "<div class='city-container'>"+
                    "   <h3 class='city-name'>"+
                    "       Tajwan"+    
                    "   </h3>"+
                    "   <img src='img/our-story/Tajwan.JPG' alt='italy' class='city-img'>"+
                    // "   <p class='city-description'>"+
                    // "   Nasza pierwsza podróż do Azji, jedzenie ryzu pałeczkami tak, ze nam zdjecia tubylcy robili. Wspaniałe doświadcenie, zakochalismy sie w nocnych marketach, klimacie podrózy z plecakami. #Bubble Tea #nocne markety"+
                    // "   </p>"+
                    "</div>";
var katarPopup =    "<div class='city-container'>"+
                    "   <h3 class='city-name'>"+
                    "       Katar"+    
                    "   </h3>"+
                    "   <img src='img/our-story/Katar.JPG' alt='italy' class='city-img'>"+
                    // "   <p class='city-description'>"+
                    // "   Doha<br>#gorąco"+
                    // "   </p>"+
                    "</div>";

var szwecjaPopup =  "<div class='city-container'>"+
                    "   <h3 class='city-name'>"+
                    "       Szwecja"+    
                    "   </h3>"+
                    "   <img src='img/our-story/Szwecja.JPG' alt='italy' class='city-img'>"+
                    // "   <p class='city-description'>"+
                    // "   Malmo<br>Lund"+
                    // "   </p>"+
                    "</div>";
var maltaPopup =    "<div class='city-container'>"+
                    "   <h3 class='city-name'>"+
                    "       Malta"+    
                    "   </h3>"+
                    "   <img src='img/our-story/Malta.JPG' alt='italy' class='city-img'>"+
                    // "   <p class='city-description'>"+
                    // "   "+
                    // "   </p>"+
                    "</div>";
var grecjaPopup =  "<div class='city-container'>"+
                    "   <h3 class='city-name'>"+
                    "       Grecja"+    
                    "   </h3>"+
                    "   <img src='img/our-story/Grecja.JPG' alt='italy' class='city-img'>"+
                    // "   <p class='city-description'>"+
                    // "   Ateny<br>Wolos<br>Sporady:Skiatos,Skotelos, Alonisos"+
                    // "   </p>"+
                    "</div>";
var austriaPopup =    "<div class='city-container'>"+
                    "   <h3 class='city-name'>"+
                    "       Austria"+    
                    "   </h3>"+
                    "   <img src='img/our-story/Austria.JPG' alt='italy' class='city-img'>"+
                    // "   <p class='city-description'>"+
                    // "   Bad Gastein<br>Saltzburg"+
                    // "   </p>"+
                    "</div>";

var niemcyPopup =  "<div class='city-container'>"+
                    "   <h3 class='city-name'>"+
                    "       Niemcy"+    
                    "   </h3>"+
                    "   <img src='img/our-story/Niemcy.JPG' alt='italy' class='city-img'>"+
                    // "   <p class='city-description'>"+
                    // "   Drezno: Jarmark świąteczny<br>Monachium"+
                    // "   </p>"+
                    "</div>";
var italyPopup =    "<div class='city-container'>"+
                    "   <h3 class='city-name'>"+
                    "       Włochy"+    
                    "   </h3>"+
                    "   <img src='img/our-story/Wlochy.JPG' alt='italy' class='city-img'>"+
                    // "   <p class='city-description'>"+
                    // "   Bolonia<br>Verona<br>Rimini<br>Florencja<br>Wenecja"+
                    // "   </p>"+
                    "</div>";
var andoraPopup =  "<div class='city-container'>"+
                    "   <h3 class='city-name'>"+
                    "       Andora"+    
                    "   </h3>"+
                    "   <img src='img/our-story/Andora.JPG' alt='italy' class='city-img'>"+
                    // "   <p class='city-description'>"+
                    // "   "+
                    // "   </p>"+
                    "</div>";
var spainPopup =  "<div class='city-container'>"+
                    "   <h3 class='city-name'>"+
                    "       Hiszpania"+    
                    "   </h3>"+
                    "   <img src='img/our-story/Hiszpania.JPG' alt='italy' class='city-img'>"+
                    // "   <p class='city-description'>"+
                    // "   Barcelona<br>Walencja<br>Girona<br>Madryt<br>Segovia"+
                    // "   </p>"+
                    "</div>";
var sanMarinoPopup =  "<div class='city-container'>"+
                    "   <h3 class='city-name'>"+
                    "       San Marino"+    
                    "   </h3>"+
                    "   <img src='img/our-story/SanMarino.JPG' alt='italy' class='city-img'>"+
                    // "   <p class='city-description'>"+
                    // "   "+
                    // "   </p>"+
                    "</div>";
var chinaPopup =  "<div class='city-container'>"+
                    "   <h3 class='city-name'>"+
                    "       Chiny"+    
                    "   </h3>"+
                    "   <img src='img/our-story/China.JPG' alt='italy' class='city-img'>"+
                    // "   <p class='city-description'>"+
                    // "   Pekin: nie spędziliśmy tutaj dużo czasu ale te kilkanaście godzin dało nam możliwośc poczucia miejsca, rezimu"+
                    // "   </p>"+
                    "</div>";
var czechyPopup =  "<div class='city-container'>"+
                    "   <h3 class='city-name'>"+
                    "       Czechy"+    
                    "   </h3>"+
                    "   <img src='img/our-story/Czechy.JPG' alt='italy' class='city-img'>"+
                    // "   <p class='city-description'>"+
                    // "   kilkukrotnie byliśmy na nartkach z epiką"+
                    // "   </p>"+
                    "</div>";
var daniaPopup =  "<div class='city-container'>"+
                    "   <h3 class='city-name'>"+
                    "       Dania"+    
                    "   </h3>"+
                    "   <img src='img/our-story/Dania.JPG' alt='italy' class='city-img'>"+
                    // "   <p class='city-description'>"+
                    // "   Kopenhaga #zimno"+
                    // "   </p>"+
                    "</div>";

francjaMarker.bindPopup(francjaPopup);
newZealandMarker.bindPopup(newZealandPopup);
polandMarker.bindPopup(polandPopup);
singapurMarker.bindPopup(singapurPopup);
malezjaMarker.bindPopup(malezjaPopup);
tajwanMarker.bindPopup(tajwanPopup);
katarMarker.bindPopup(katarPopup);
szwecjaMarker.bindPopup(szwecjaPopup);
maltaMarker.bindPopup(maltaPopup);
grecjaMarker.bindPopup(grecjaPopup);
austriaMarker.bindPopup(austriaPopup);
niemcyMarker.bindPopup(niemcyPopup);
italyMarker.bindPopup(italyPopup);
andoraMarker.bindPopup(andoraPopup);
spainMarker.bindPopup(spainPopup);
sanMarinoMarker.bindPopup(sanMarinoPopup);
chinaMarker.bindPopup(chinaPopup);
czechyMarker.bindPopup(czechyPopup);
daniaMarker.bindPopup(daniaPopup);


