$(document).ready(function(){
    $("#nav-placeholder")
        .append(
            $('<ul/>')
                .attr('id', 'main-menu')
                .addClass('menu-bar')
                .append(
                    $('<li/>')
                        .addClass('our-story-menu-button')
                        .append(
                            $('<a/>')
                                .attr('href', 'our-story.html')
                                .text('Our Story')
                        )
                        .append(
                            $('<div/>')
                                .addClass('sub-menu')
                                .addClass('our-story-menu')
                                .append(
                                    $('<ul/>')
                                        .append(
                                            $('<li/>')
                                                .append(
                                                    $('<a/>')
                                                        .attr('href', 'our-story.html#his-version')
                                                        .text('His Version')
                                                )
                                        )
                                        .append(
                                            $('<li/>')
                                                .append(
                                                    $('<a/>')
                                                        .attr('href', 'our-story.html#her-version')
                                                        .text('Her Version')
                                                )
                                        )
                                        .append(
                                            $('<li/>')
                                                .append(
                                                    $('<a/>')
                                                        .attr('href', 'our-story.html#photo-gallery')
                                                        .text('Photo Gallery')
                                                )
                                        )
                                )
                        )
                )
                .append(
                    $('<li/>')
                        .addClass('wdg-prty-menu-button')
                        .append(
                            $('<a/>')
                                .attr('href', 'wedding-parties.html')
                                .text('Wedding Parties')
                        )
                        .append(
                            $('<div/>')
                                .addClass('sub-menu')
                                .addClass('wdg-prty-menu')
                                .append(
                                    $('<ul/>')
                                        .append(
                                            $('<li/>')
                                                .append(
                                                    $('<a/>')
                                                        .attr('href', 'wedding-parties.html#mcs')
                                                        .text('The MCs')
                                                )
                                        )
                                        .append(
                                            $('<li/>')
                                                .append(
                                                    $('<a/>')
                                                        .attr('href', 'wedding-parties.html#bridesmaids')
                                                        .text('Bridesmaids')
                                                )
                                        )
                                        .append(
                                            $('<li/>')
                                                .append(
                                                    $('<a/>')
                                                        .attr('href', 'wedding-parties.html#groomsmen')
                                                        .text('Groomsmen')
                                                )
                                        )
                                )
                        )
                )
                .append(
                    $('<li/>')
                        .addClass('info-menu-button')
                        .append(
                            $('<a/>')
                                .attr('href', 'info.html')
                                .text('Info')
                        )
                        .append(
                            $('<div/>')
                                .addClass('sub-menu')
                                .addClass('info-menu')
                                .append(
                                    $('<ul/>')
                                        .append(
                                            $('<li/>')
                                                .append(
                                                    $('<a/>')
                                                        .attr('href', 'info.html#the-venue')
                                                        .text('The Venue')
                                                )
                                        )
                                        .append(
                                            $('<li/>')
                                                .append(
                                                    $('<a/>')
                                                        .attr('href', 'info.html#accommodations')
                                                        .text('Accommodations')
                                                )
                                        )
                                )
                        )
                )
                .append(
                    $('<li/>')
                        .addClass('gifts-menu-button')
                        .append(
                            $('<a/>')
                                .attr('href', 'gifts.html')
                                .text('Gifts')
                        )
                        .append(
                            $('<div/>')
                                .addClass('sub-menu')
                                .addClass('gifts-menu')
                                .append(
                                    $('<ul/>')
                                        .append(
                                            $('<li/>')
                                                .append(
                                                    $('<a/>')
                                                        .attr('href', 'gifts.html#registries')
                                                        .text('Registries')
                                                )
                                        )
                                        .append(
                                            $('<li/>')
                                                .append(
                                                    $('<a/>')
                                                        .attr('href', 'gifts.html#donations')
                                                        .text('Donations')
                                                )
                                        )
                                )
                        )
                )
                .append(
                    $('<li/>')
                        .addClass('contact-menu-button')
                        .append(
                            $('<a/>')
                                .attr('href', 'contact.html')
                                .text('Contact')
                        )
                        .append(
                            $('<div/>')
                                .addClass('sub-menu')
                                .addClass('contact-menu')
                                .append(
                                    $('<ul/>')
                                        .append(
                                            $('<li/>')
                                                .append(
                                                    $('<a/>')
                                                        .attr('href', 'contact.html#info')
                                                        .text('Contact Info')
                                                )
                                        )
                                        .append(
                                            $('<li/>')
                                                .append(
                                                    $('<a/>')
                                                        .attr('href', 'contact.html#rsvp')
                                                        .text('RSVP')
                                                )
                                        )
                                        .append(
                                            $('<li/>')
                                                .append(
                                                    $('<a/>')
                                                        .attr('href', 'contact.html#guestbook')
                                                        .text('Guestbook')
                                                )
                                        )
                                )
                        )
                )
        )
        
});