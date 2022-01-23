var canClosePopup = false;


var images = [];
var imgItems = [];
$.ajax({
    url: 'http://slubmagdyikuby.pl/test.php',
    success: function(data) {
        if(data != "") {
            images = data.split(";");
            images.pop(0);
            console.log(images);
            init(images);
        }
        
    }
  });

function init(images) {

    var galleryList = document.getElementById("gallery-list");
    console.log(images)
    for (let image of images) {
        var imageUrl = "http://slubmagdyikuby.pl/" + image;
        console.log(imageUrl);

        galleryList.insertAdjacentHTML("beforeend",
            "<li class='col-md-2 col-sm-4 col-6'>" +
            `<button onclick="initGallery('${imageUrl}')">` +
            `<img src='${imageUrl}' alt='team-pick-img' style='width: 100%; height: auto;'>` +
            "</button>" +
            "</li>"
        )
        let img = new Image();
        img.src = imageUrl;
        img.onload = async function () {
            console.log(this.src);
            imgItems.push({
                src: this.src,
                w: this.width,
                h: this.height
            });
        }


    }
}

function initGallery(src) {
    console.log(imgItems.map(a => a.src))
    var pswpElement = document.querySelectorAll('.pswp')[0];
    var startIndex = 0;
    imgItems = imgItems.sort((a, b) => a.src.localeCompare(b.src));
    for (var i = 0; i < imgItems.length; i++) {
        if (imgItems[i].src === src) {
            startIndex = i;
            break;
        }
    }

    var options = {
        index: startIndex // start at first slide
    };



    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, imgItems, options);
    gallery.init();

}

function toggleGallery() {
    var x = document.getElementById("gallery");
    if (x.style.display === "none") {
        x.style.display = "block";
        initGallery();
    } else {
        x.style.display = "none";
    }
}

// When the user clicks on <div>, open the popup
function showPopup() {
    console.log("showPopup")
    var section = document.getElementById("add-photo-popup");
    var popup = document.getElementById('popup-content')
    section.style.display = "flex";
    popup.style.display = "block";
    canClosePopup = false;
}

window.addEventListener('click', function (e) {
    console.log("addEventListener")
    var popup = document.getElementById('popup-content')
    var section = document.getElementById("add-photo-popup");
    if (!popup.contains(e.target) && section.style.display === 'flex') {
        console.log("contains")
        if (canClosePopup) {
            var filesSent = document.getElementById('files-sent')
            var loading = document.getElementById('files-loading')   
            section.style.display = 'none';
            loading.style.display = 'none';
            filesSent.style.display = 'none';
        }
        canClosePopup = true;
    }
});

function sendImages() {
    console.log("sendImages")
    var popup = document.getElementById('popup-content')
    var loading = document.getElementById('files-loading')
    var filesSent = document.getElementById('files-sent')
    popup.style.display = 'none';
    loading.style.display = 'block';
}

if (window.location.search.includes("succes=true")) {

    var popup = document.getElementById('popup-content')
    var loading = document.getElementById('files-loading')
    var filesSent = document.getElementById('files-sent')
    var section = document.getElementById("add-photo-popup");
    section.style.display = "flex";
    loading.style.display = 'none';
    popup.style.display = 'none';
    filesSent.style.display = 'block';
    canClosePopup = true;
}