
var weddingDate = new Date("Jul 9, 2022 16:00:00").getTime();

var counter = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();
    var distance = weddingDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById("counter").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(counter);
        document.getElementById("counter").innerHTML = "JUST MARRIED";
    }


}, 1000);

// function initMap() {
    var center = [52.280, 21.240]
    var mymap = L.map('mapid').setView(center, 11);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1Ijoic25hd2xhayIsImEiOiJja3ZjNHN0ZzIzcGVjMnJscHkzc2Rjc2x5In0.SQhNS-a2oX7rIT6Ers9-hQ'
    }).addTo(mymap);
    var weddingPlace = L.marker([52.315915,21.1942092]).addTo(mymap);
    var church = L.marker([52.2343208, 21.2064346]).addTo(mymap);
    weddingPlace.bindPopup("<b>Dom Weselny 'Zamkowa'</b><br>Kasprzykiewicza 81, 05-200 Leśniakowizna<br><a target='_blank' href='https://goo.gl/maps/tapUjYaT3NKuEG8V7'>Otwórz w Google Maps</a>").openPopup();
    church.bindPopup("<b>Parafia Najśw. Serca Pana Jezusa w Starej Miłośnie</b><br>Jana Pawła II 8/10, 05-077 Warszawa<br><a target='_blank' href='https://goo.gl/maps/ATj38ndE9Auu4R729'>Otwórz w Google Maps</a>").openPopup();

// }
