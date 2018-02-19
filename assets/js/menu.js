/* Открытие меню */

var main = function() {

    $('.icon-menu').click(function() {

        $('.menu').animate({

            left: '35'

        }, 200);

        $('body').animate({

            left: '285px'

        }, 200);
    });




    $('.icon-close').click(function() {

        $('.menu').animate({
            left: '-285px'

        }, 200);

    $('body').animate({

            left: '35'

        }, 200);
    });
};

$(document).ready(main);
