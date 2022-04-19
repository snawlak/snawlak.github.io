var imgItems = [
    {
        src: 'img/menu.png',
        w: 600,
        h: 800
    }, 
    {
        src: 'img/tables.png',
        w: 600,
        h: 800
    }

];

function initGallery(startIndex) {
    console.log(startIndex);
    var pswpElement = document.querySelectorAll('.pswp')[0];

    var options = {
        index: startIndex // start at first slide
    };

    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, imgItems, options);
    gallery.init();

}