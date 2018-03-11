// GALLERY
$(document).ready(function(){
    (function initGalleryThumbnails(numImages) {
        let srcBase = 'resources/img/gallery/';
        let thumb = 'thumbnails/thumb-';
        let $gallery = $('#gallery');
        
        for (var i = 1; i <= numImages; i++) {
            let src = srcBase + i + '.jpg';
            $gallery.append(
                $('<div/>')
                    .addClass('thumb')
                    .append(
                        $('<img/>')
                            .attr('src', src)
                    )
            )
        }
    })(22);
    
    let $gallery = $('#gallery');
    $gallery.flickity({
        // options
        cellAlign: 'center',
        contain: true,
        percentPosition: false,
        wrapAround: true,
        autoPlay: 5000,
        pauseAutoPlayOnHover: false
      });
    
    let flkty = $gallery.data('flickity');
    $gallery.on( 'select.flickity', function() {
        updatePrevNext();
    })
    
    $gallery.on( 'staticClick.flickity', function(event, pointer, cellElement, cellIndex) {
        if ( !cellElement ) {
            return;
        }
        flkty.select(cellIndex);
    });
    
    // add play & pause buttons
    //                    <span class='control glyphicon glyphicon-pause'></span>
//    <span class='control glyphicon glyphicon-play'></span>

    $controlBar = $('.slideshow-controls');
    $controlBar.append(
        $('<span/>')
        .addClass('control')
        .addClass('glyphicon')
        .addClass('glyphicon-pause')
        .attr('title', 'Pause Slideshow')
        .on('click', function(){flkty.pausePlayer()})
    ).append(
        $('<span/>')
        .addClass('control')
        .addClass('glyphicon')
        .addClass('glyphicon-play')
        .attr('title', 'Resume Slideshow')
        .on('click', function(){flkty.playPlayer()})
    );
});

function updatePrevNext() {
    let $gallery = $('#gallery');
    let flkty = $gallery.data('flickity');
    
    let imageSrc = $gallery.find('.is-selected').find('img').attr('src');
    changeGalleryImage(imageSrc);
}


function changeGalleryImage(imageSrc) {
    let $galleryImage = $('#gallery-image');
    $galleryImage.addClass('fade-out');
    window.setTimeout(changeAndFadeIn, 200);
    
    function changeAndFadeIn () {
        $galleryImage.attr('src', imageSrc);
        $galleryImage.removeClass('fade-out');
        $galleryImage.addClass('fade-in');
    }
}
