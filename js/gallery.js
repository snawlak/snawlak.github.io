var canClosePopup = false;

function initGallery(src) {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: 'img/bg-home.jpg',
            w: 1200,
            h: 900
        },
        {
            src: 'img/gallery/1.jpeg',
            w: 1200,
            h: 900
        },
        {
            src: 'img/gallery/2.jpeg',
            w: 1200,
            h: 900
        },
        {
            src: 'img/gallery/3.jpeg',
            w: 1200,
            h: 900
        },
        {
            src: 'img/gallery/4.jpeg',
            w: 1200,
            h: 900
        },
        {
            src: 'img/gallery/5.jpeg',
            w: 1200,
            h: 900
        },
        {
            src: 'img/gallery/6.jpeg',
            w: 1200,
            h: 900
        },
        {
            src: 'img/gallery/7.jpeg',
            w: 1200,
            h: 900
        },
        {
            src: 'img/gallery/8.jpeg',
            w: 1200,
            h: 900
        },
    ];

    var startIndex = 0;
    for (var i = 0; i < items.length; i++) {
        if (items[i].src === src) {
            startIndex = i;
            break;
        }
    }

    var options = {
        index: startIndex // start at first slide
    };

    console.log(src);
    console.log(startIndex);

    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
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
    setTimeout(function () {
        loading.style.display = 'none';
        popup.style.display = 'none';
        filesSent.style.display = 'block';
    }, 3000);
}
