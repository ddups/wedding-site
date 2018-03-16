// GALLERY
$(document).ready(function(){
    (function loadImages(directory) {
        let $gallery = $('#gallery');
        let numFiles = 0;
        let fileList = [];
 
        //This will retrieve the contents of the folder if the folder is configured as 'browsable'
        $.ajax({
            type: 'GET',
            dataType: "json",
            url: '/wedding-site/resources/img/gallery',
            username: 'derek@ddups.net',
            password: '?W3bster=',
            success: function (data) {
                let regexp = new Regexp('\.png|\.jpg|\.gif');
                // make a list all .png, jpg, and gif file names
                $(data).find('a').filter(function () {return regexp.test($(this).text());}).each(function () {
                    var filename = this.href.replace(window.location, '').replace('http://', '');
                    fileList.push(filename);
                    numFiles++;
                    console.log('numFiles: ' + numFiles);
//                    $('body').append('<img src='' + directory + filename + ''>');
                });
            },
            error: function (){
                alert('That didn\'t work');
            }
        });
        
        for (var i = 1; i <= fileList.length; i++) {
            let src = directory + $(fileList).eq(i)
            $gallery.append(
                $('<div/>')
                    .addClass('thumb')
                    .append(
                        $('<img/>')
                            .attr('data-flickity-bg-lazyload', src)
                    )
            )   
        }
    })('resources/img/gallery');
    
    
    (function initGalleryThumbnails(numImages) {
        let srcBase = 'resources/img/gallery/';
        let $gallery = $('#gallery');
        
        for (var i = 1; i <= numImages; i++) {
            let suffix;
            if (i === numImages) {
                suffix = '.gif';
            } else {
                suffix = '.jpg';
            }
            let src = srcBase + i + suffix;
            $gallery.append(
                $('<div/>')
                    .addClass('thumb')
                    .append(
                        $('<img/>')
                        .attr('src', src)
//                        .attr('data-flickity-bg-lazyload', src)
                    )
            )
        }
    });//(23);
    
    let $gallery = $('#gallery');
    $gallery.flickity({
        // options
        cellAlign: 'center',
        contain: true,
        freeScroll: true,
        wrapAround: true,
        autoPlay: 5000,
        pauseAutoPlayOnHover: false,
//        bgLazyLoad: true,
        imagesLoaded : true,
        pageDots : false
    });
    
    let flkty = $gallery.data('flickity');
    $gallery.on( 'select.flickity', function() {
        updateImageGallery();
    })
    
    $gallery.on( 'staticClick.flickity', function(event, pointer, cellElement, cellIndex) {
        if ( !cellElement ) {
            return;
        }

        if (!$(cellElement).hasClass('is-selected')) {
            flkty.select(cellIndex);
        }
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

function updateImageGallery() {
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
