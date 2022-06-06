var weddingDate = new Date("Jul 9, 2022 16:00:00").getTime();

var counter = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();
    var distance = weddingDate - now;


    if (distance < 0) {
        document.getElementById("just-married").innerHTML = "JUST MARRIED";
        document.getElementById("days-label").innerHTML = "";
        document.getElementById("hours-label").innerHTML = "";
        document.getElementById("minutes-label").innerHTML = "";
        document.getElementById("seconds-label").innerHTML = "";
        clearInterval(counter);
    } else {
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days-label").innerHTML = "DNI";
        document.getElementById("hours-label").innerHTML = "GODZ.";
        document.getElementById("minutes-label").innerHTML = "MIN.";
        document.getElementById("seconds-label").innerHTML = "SEK.";

        document.getElementById("days").innerHTML = getWithZero(days);
        document.getElementById("hours").innerHTML = getWithZero(hours);
        document.getElementById("minutes").innerHTML = getWithZero(minutes);
        document.getElementById("seconds").innerHTML = getWithZero(seconds);
    }
}, 1000);
