// GALLERY
$(document).ready(function(){
    (function initThumbs() {
        let bridesmaids = ['rachel', 'maura', 'minta', 'andrea', 'molly', 'shelby', 'laura'];
        let groomsmen = ['cj', 'tyler', 'brian', 'jan', 'jake', 'eric', 'brady'];
        
        let srcBase = 'resources/img/bio-photos/';
        let brideBase = 'bridesmaids/';
        let groomBase = 'groomsmen/';
        let $bioGallery = $('#bio-gallery');
        
        for (var i = 0; i < bridesmaids.length; i++) {
            let name = bridesmaids[i];
            let src = srcBase + brideBase + name + '.jpg';
            $bioGallery.append(
                $('<div/>')
                    .addClass('bio-thumb')
                    .attr('data-bio-text', name + '-bio')
                    .append(
                        $('<img/>')
                            .attr('src', src)
                    )
            )
        }
        
        for (var i = 0; i < groomsmen.length; i++) {
            let name = groomsmen[i];
            let src = srcBase + groomBase + name + '.jpg';
            $bioGallery.append(
                $('<div/>')
                    .addClass('bio-thumb')
                    .attr('data-bio-text', name + '-bio')
                    .append(
                        $('<img/>')
                            .attr('src', src)
                    )
            )
        }
    })();
    
    let $bioGallery = $('#bio-gallery');
    $bioGallery.flickity({
        // options
        cellAlign: 'left',
        contain: true,
        imagesLoaded: true,
        prevNextButtons: false,
        groupCells: 7
      });
    
    let bioFlkty = $bioGallery.data('flickity');
    $bioGallery.on( 'staticClick.flickity', function(event, pointer, cellElement, cellIndex) {
        if (!cellElement) {
            return;
        }
        
        if (!$(cellElement).hasClass('selected')) {
            changeBioText(cellElement);
        }
    });

    $dots = $('#bio-gallery').children('.flickity-page-dots');
    $dots.addClass('flickity-page-dots-inline');
    $dots.before(
        $('<span/>')
            .addClass('bridesmaid-select')
            .text('Bridesmaids')
            .on('click', function (){
                bioFlkty.select(0);
                changeBioText(bioFlkty.getCellElements()[0]);
            })
    );
    $dots.after(
        $('<span/>')
            .addClass('groomsmen-select')
            .text('Groomsmen')
            .on('click', function (){
                bioFlkty.select(1);
                changeBioText(bioFlkty.getCellElements()[7]);
            })
    );
    
    // change color of page dots
    for(var i = 0; i < bioFlkty.slides.length; i++) {
        let $dot = $dots.children('.dot').eq(i);
        $dot.css('background', 'white');
    }
    
    // need to keep bio text hidden until now, then display rachel as default
    changeBioText(bioFlkty.getCellElements()[0]);
    
});

function changeBioText(thumb) {
    // clear previous and shade the newly selected thumbnail
    $('.selected').removeClass('selected');
    $(thumb).addClass('selected');
    
    let $bioDisplay = $('#bio-display');
    let $bioNameContainer = $('#bio-name');
    let $bioTitleContainer = $('#bio-title');
    let $bioTextContainer = $('#bio-text');
    
    let textID = $(thumb).data('bio-text');
    let $hiddenBio = $('#' + textID);
    let bioText = $hiddenBio.text();

    let name = $hiddenBio.data('full-name');
    let title = $hiddenBio.data('title');
    
    $bioDisplay.addClass('fade-out'); // fade container
    window.setTimeout(changeAndFadeIn, 200);

    function changeAndFadeIn () {
        $bioNameContainer.text(name);
        $bioTitleContainer.text(title);
        $bioTextContainer.text(bioText);
        
        $bioDisplay.removeClass('fade-out');
        $bioDisplay.addClass('fade-in');
    }
}

