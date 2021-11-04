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
        if (items[i].src === src){
            startIndex = i;
            break;
        }
    }

    var options = {
        index: startIndex // start at first slide
    };

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