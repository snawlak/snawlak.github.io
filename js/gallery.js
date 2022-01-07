var canClosePopup = false;


var images = [];
var imgItems = [];
$.ajax({
    url: 'http://localhost/wedding/test.php',
    success: function(data) {
        console.log(data);
        if(data != "") {
            images = data.split(";");
            images.pop(0);
            console.log(images.length);
            init(images);
        }
        
    }
  });

  function init(images) {
     
        var galleryList = document.getElementById("gallery-list");
        for(const image of images) {
            var imageUrl = "http://localhost/wedding/" + image;
            console.log(imageUrl);
            var initGalleryStr = `initGallery('${imageUrl}')`;
            galleryList.insertAdjacentHTML("afterbegin", 
            "<li class='col-md-2 col-sm-4 col-6'>" + 
            `<button onclick="initGallery('${imageUrl}')">` + 
            `<img src='${imageUrl}' alt='team-pick-img' style='width: 100%; height: auto;'>` + 
            "</button>" +
            "</li>" 
            )

            imgItems.push({
                src: imageUrl,
                w: 1200,
                h: 900
            });
        }
  }





function initGallery(src) {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    

    var startIndex = 0;
    for (var i = 0; i < imgItems.length; i++) {
        if (imgItems[i].src === src) {
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
    setTimeout(function () {
        loading.style.display = 'none';
        popup.style.display = 'none';
        filesSent.style.display = 'block';
    }, 3000);
}


// $(function() {
//     $('#pic-form').submit(function(event) {
//         event.preventDefault();
//         $(this).submit();
//         }); 
//     });

// $('#pic-form').submit(function(e) {
//     console.log($('#pic-form').serialize())
//     e.preventDefault();
//     $.ajax({
//          type: 'POST',
//          url: 'http://localhost/wedding/send-img.php',
//          data: new FormData( this ),
//          success: function(date) {
//              console.log(date);
//          }
         
//     }); 
//  })