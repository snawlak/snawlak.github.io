
var weddingDate = new Date("Jul 9, 2022 16:00:00").getTime();

var counter = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();
    var distance = weddingDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = getWithZero(days);
    document.getElementById("hours").innerHTML = getWithZero(hours);
    document.getElementById("minutes").innerHTML = getWithZero(minutes);
    document.getElementById("seconds").innerHTML =  getWithZero(seconds);

    if (distance < 0) {
        clearInterval(counter);
        document.getElementById("counter").innerHTML = "JUST MARRIED";
    }
}, 1000);

var center = [52.280, 21.240]

var map = L.map('mapid').setView(center, 12);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic25hd2xhayIsImEiOiJja3ZjNHN0ZzIzcGVjMnJscHkzc2Rjc2x5In0.SQhNS-a2oX7rIT6Ers9-hQ'
}).addTo(map);

var weddingMarker = L.marker([52.315915, 21.1942092]).addTo(map);
var churchMarker = L.marker([52.2343208, 21.2064346]).addTo(map);
var weddingPopup = "<h4><b>Dom Weselny 'Zamkowa'</b></h4>" + 
        "<h6>Kasprzykiewicza 81, 05-200 Leśniakowizna</h6>" +
        "<a target='_blank' href='https://goo.gl/maps/tapUjYaT3NKuEG8V7'><h6>Otwórz w Google Maps</h6></a>";
var churchPopup = "<h4><b>Parafia Najśw. Serca Pana Jezusa w Starej Miłosnej</b></h4>"+
        "<h6><br>Jana Pawła II 8/10, 05-077 Warszawa<br></h6>" +
        "<a target='_blank' href='https://goo.gl/maps/ATj38ndE9Auu4R729'><h6>Otwórz w Google Maps</h6></a>";


weddingMarker.bindPopup(weddingPopup).openPopup();
churchMarker.bindPopup(churchPopup).openPopup();

function getWithZero(value) {
    return value < 10 ? "0" + value : value
}

