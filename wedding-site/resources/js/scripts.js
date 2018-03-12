$(document).ready(function(){
    // FREEWALL
    var temp = "<div class='brick' style='width:{width}px;'><img src='resources/img/gallery/{index}.jpg' width='100%'></div>";
    var w = 1, h = 1, html = '', limitItem = 22;
    for (var i = 0; i < limitItem; ++i) {
        w = 1 + 3 * Math.random() << 0;
        html += temp.replace(/\{width\}/g, w*150).replace("{index}", i + 1);
    }
    $("#freewall").html(html);

    var wall = new Freewall("#freewall");
    wall.reset({
        selector: '.brick',
        animate: true,
        cellW: 150,
        cellH: 'auto',
        onResize: function() {
            wall.fitWidth();
        }
    });

    var images = wall.container.find('.brick');
    images.find('img').on('load', function() {
        wall.fitWidth();
    });
    
    // CURVE TEXT
    function curvedText() {
        let curve1Rad = 2000;
        let curve2Rad = 1500;
        
        $(".curve").length && ($(".curve").arctext({
            radius: curve1Rad
        }),
        $(window).resize(function() {
            $(".curve").arctext("set", {
                radius: curve1Rad
            })
        })),
        $(".curve2").length && ($(".curve2").arctext({
            radius: curve2Rad,
            dir: -1
        }),
        $(window).resize(function() {
            $(".curve2").arctext("set", {
                radius: curve2Rad,
                dir: -1
            })
        }))
    }
    curvedText();
});
        