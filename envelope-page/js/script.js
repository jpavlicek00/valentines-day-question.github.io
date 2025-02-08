//LOGIKA OBÁLKY//



$(document).ready(function () {
    $('.valentines').click(function () {
        console.log("script.js byl úspěšně načten!");
        var card = $('.card');
        var text = $('.text');
        

        // Otevření obálky (kontrola pozice)
        if (!card.hasClass('open')) {
            card.animate({ top: '-90px' }, 'slow', function () {
                text.fadeIn('slow'); // Zobrazení textu
            });
            card.addClass('open');
        } else {
            card.animate({ top: '5px' }, 'slow', function () {
                text.fadeOut('slow'); // Skrytí textu při zavření
            });
            card.removeClass('open');
        }
    });
});

