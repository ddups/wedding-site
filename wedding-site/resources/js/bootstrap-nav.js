/*------------------------------------------------------------------------------*/
let $storyMenu = 
    $('<ul/>')
        .addClass('dropdown-menu')
        .append($('<li/>')
                    .append($('<a/>')
                                .attr('href', '#our-story')
                                .text('How We Met')))
        .append($('<li/>')
                    .append($('<a/>')
                                .attr('href', '#photo-gallery')
                                .text('Photo Gallery')));

let $storyButton = 
    $('<li/>')
        .addClass('dropdown')
        .append($('<a/>')
                    .addClass('dropdown-toggle')
                    .attr('data-toggle', 'dropdown')
                    .attr('aria-haspopup', 'true')
                    .attr('aria-expanded', 'false')
                    .text('Our Story ')
                    .append($('<span/>').addClass('caret')))
        .append($storyMenu);

/*------------------------------------------------------------------------------*/
let $partiesMenu = 
    $('<ul/>')
    .addClass('dropdown-menu')
        .append($('<li/>')
                    .append($('<a/>')
                                .attr('href', 'wedding-parties.html#bridesmaids')
                                .text('Bridesmaids')))
        .append($('<li/>')
                    .append($('<a/>')
                                .attr('href', 'wedding-parties.html#groomsmen')
                                .text('Groomsmen')))
        .append($('<li/>')
                .append($('<a/>')
                            .attr('href', 'wedding-parties.html#mcs')
                            .text('The MCs')));
    
let $partiesButton = 
    $('<li/>')
        .addClass('dropdown')
        .append($('<a/>')
                    .addClass('dropdown-toggle')
                    .attr('data-toggle', 'dropdown')
                    .attr('aria-haspopup', 'true')
                    .attr('aria-expanded', 'false')
                    .text('Wedding Parties ')
                    .append($('<span/>').addClass('caret')))
        .append($partiesMenu);

/*------------------------------------------------------------------------------*/
let $infoMenu =
    $('<ul/>')
        .addClass('dropdown-menu')
        .append($('<li/>')
                    .append($('<a/>')
                                .attr('href', 'info.html')
                                .text('The Venue')))
        .append($('<li/>')
                    .append($('<a/>')
                                .attr('href', 'info.html#accommodations')
                                .text('Accommodations')));

let $infoButton = 
    $('<li/>')
        .addClass('dropdown')
        .append(
            $('<a/>')
                .addClass('dropdown-toggle')
                .attr('data-toggle', 'dropdown')
                .attr('aria-haspopup', 'true')
                .attr('aria-expanded', 'false')
                .text('Info ')
                .append($('<span/>').addClass('caret')))
        .append($infoMenu);

/*------------------------------------------------------------------------------*/
let $giftsMenu = 
    $('<ul/>')
        .addClass('dropdown-menu')
        .append($('<li/>')
                    .append($('<a/>')
                                .attr('href', 'gifts.html')
                                .text('Registries')))
        .append($('<li/>')
                    .append($('<a/>')
                                .attr('href', 'gifts.html#donations')
                                .text('Donations')));

let $giftsButton = 
    $('<li/>')
        .addClass('dropdown')
        .append($('<a/>')
                    .addClass('dropdown-toggle')
                    .attr('data-toggle', 'dropdown')
                    .attr('aria-haspopup', 'true')
                    .attr('aria-expanded', 'false')
                    .text('Gifts ')
                    .append($('<span/>').addClass('caret')))
        .append($giftsMenu);

/*------------------------------------------------------------------------------*/
let $contactMenu = 
    $('<ul/>')
        .addClass('dropdown-menu')
        .append($('<li/>')
                    .append($('<a/>')
                                .attr('href', 'contact.html')
                                .text('Contact Info')))
        .append($('<li/>')
                    .append($('<a/>')
                                .attr('href', 'contact.html#rsvp')
                                .text('RSVP')))
        .append($('<li/>')
                    .append($('<a/>')
                                .attr('href', 'contact.html#guestbook')
                                .text('Guestbook')));

let $contactButton =
    $('<li/>')
        .addClass('dropdown')
        .append($('<a/>')
                    .addClass('dropdown-toggle')
                    .attr('data-toggle', 'dropdown')
                    .attr('aria-haspopup', 'true')
                    .attr('aria-expanded', 'false')
                    .text('Contact ')
                    .append($('<span/>').addClass('caret')))
        .append($contactMenu);

/*------------------------------------------------------------------------------*/

$(document).ready(function(){
    $("#navbar")
        .append(
            $('<div/>')
                .addClass('container-fluid')
                .append(
                    $('<ul/>')
                        .addClass('nav')
                        .addClass('navbar-nav')
                        .append($storyButton)
                        .append($partiesButton)
                        .append($infoButton)
                        .append($giftsButton)
                        .append($contactButton)
                )
        )
});