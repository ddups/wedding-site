$(document).ready(function(){
    $('#header')
        .append(
            $('<div>')
                .attr('id', 'warped')
                .addClass('container-fluid')
                .addClass('banner-container')
                .append(
                    $('<a/>')
                        .attr('href', 'index.html')
                        .append(
                            $('<span>').addClass('w0').text('E')
                        )                
                        .append(
                            $('<span>').addClass('w1').text('m')
                        )
                        .append(
                            $('<span>').addClass('w2').text('m')
                        )
                        .append(
                            $('<span>').addClass('w3').text('a')
                        )
                        .append(
                            $('<span>').addClass('w4').text(' ')
                        )
                        .append(
                            $('<span>').addClass('w5').text('a')
                        )
                        .append(
                            $('<span>').addClass('w6').text('n')
                        )
                        .append(
                            $('<span>').addClass('w7').text('d')
                        )
                        .append(
                            $('<span>').addClass('w8').text(' ')
                        )
                        .append(
                            $('<span>').addClass('w9').text('D')
                        )
                        .append(
                            $('<span>').addClass('w10').text('e')
                        )
                        .append(
                            $('<span>').addClass('w11').text('r')
                        )
                        .append(
                            $('<span>').addClass('w12').text('e')
                        )
                        .append(
                            $('<span>').addClass('w13').text('k')
                        )
                )
        )
        .append(
            $('<h2>').text('15 September 2018')
        )
});
