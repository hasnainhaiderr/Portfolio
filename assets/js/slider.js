$(document).ready(function() {
    var slideIndex = 0;
    var slides = $('.skill-slide');
    var slideCount = slides.length;
    var slideWidth = $('.skill-slider').width();

    function showSlides() {
        slides.css('transform', 'translateX(-' + slideIndex * slideWidth + 'px)');
    }

    function nextSlide() {
        if (slideIndex < slideCount - 1) {
            slideIndex++;
            showSlides();
        }
    }

    function prevSlide() {
        if (slideIndex > 0) {
            slideIndex--;
            showSlides();
        }
    }

    $('#skillSlider').on('swipeleft', function() {
        nextSlide();
    });

    $('#skillSlider').on('swiperight', function() {
        prevSlide();
    });
});
