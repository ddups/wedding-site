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
});

function updatePrevNext() {
    let $gallery = $('#gallery');
    let flkty = $gallery.data('flickity');
    
    let imageSrc = $gallery.find('.is-selected').find('img').attr('src');
    changeGalleryImage(imageSrc);
}


function changeGalleryImage(imageSrc) {
    let $galleryImage = $('#gallery-image');
    $galleryImage.fadeOut('fast');
    window.setTimeout(changeAndFadeIn, 200);
    
    function changeAndFadeIn () {
        $galleryImage.attr('src', imageSrc);
        $galleryImage.fadeIn('fast');
    }
}
