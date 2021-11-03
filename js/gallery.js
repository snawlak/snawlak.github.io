function initGallery() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: 'img/bg-home.jpg',
            w: 600,
            h: 400
        },
        {
            src: 'https://placekitten.com/1200/900',
            w: 1200,
            h: 900
        }
    ];

    // define options (if needed)
    var options = {
        // optionName: 'option value'
        // for example:
        index: 0 // start at first slide
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