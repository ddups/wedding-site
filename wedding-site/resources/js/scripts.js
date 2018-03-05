$(document).ready(function(){
    $("#header")
        .append(
            $('<img/>')
                .attr('src', 'resources/img/divider_1.png')
                .addClass('cloud-border-top')
        )
    $('#body')
        .append(
            $('<img/>')
                .attr('src', 'resources/img/divider_2.png')
                .addClass('cloud-border-bottom')
        )
        
    $(".dropdown, .btn-group").hover(function(){
        var dropdownMenu = $(this).children(".dropdown-menu");
        if(dropdownMenu.is(":visible")){
            dropdownMenu.parent().toggleClass("open");
        }
    });
    
    
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].onclick = function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      }
    }
});
        