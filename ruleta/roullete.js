// Reduce speed roulette
// @param {type} $owl
// @param {type} speed
// @returns {undefined}

// Stop autoplay roulette
// @returns {undefined}

var stoping = false;
var itemSelected = 0;
var timer = 20;

function slowSpeed($owl, speed) {
    $owl.trigger('play.owl.autoplay', [speed]);
}

function stopAutoplay() {
    stoping = true;
}

function restart(){
    timer = 20;
}

jQuery(function ($) {
    var $owl = $('.owl-carousel');
    
    // Initialize Owl
    $('.owl-carousel').owlCarousel({
        center: true,
        loop: true,
        margin: 10,
        nav: false,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        dots: false,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 3
            },
            1000: {
                items: 7
            }
        }
    });

    // Timer for 20 seconds
    var timerId = setInterval(function() {
        timer--;
        $('#cuenta_regresiva').html = timer;
        if(timer === 0){
            stoping = false;
            // Random between 1 and 10
            itemSelected = Math.floor((Math.random() * 10) + 1);
            var $time = $(this);
            $time.attr('disabled', 'disabled');
            // Trigger autoplay owl
            $owl.trigger('play.owl.autoplay', [100]);
            // Slow speed by step
            setTimeout(slowSpeed, 2000, $owl, 200);
            setTimeout(slowSpeed, 3000, $owl, 250);
            setTimeout(slowSpeed, 4000, $owl, 300);
            setTimeout(stopAutoplay, 5000);
            return false;
        }
    },1000);

    // Event changed Owl
    $owl.on('changed.owl.carousel', function (e) {
        if (stoping) {
            // Examine only if roulette stop
            var index = e.item.index;
            var element = $(e.target).find(".owl-item").eq(index).find('.element-roulette');
            var item = element.data('item');
            if (item == itemSelected) {
                // If element equals to random, stop roulette
                $owl.trigger('stop.owl.autoplay');
                clearInterval(timerId);
                $time.removeAttr('disabled');
            }
        }
    });

    // Showcase
    slowSpeed($owl, 1400);

});