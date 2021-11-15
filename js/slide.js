// review client
  var slideIndex = 1;
    slideShow();
    setInterval(function () {
        slideIndex = slideIndex + 1;
        slideShow();
    }, 3000)

    function slideShow() {
        var slides = document.getElementsByClassName('slide1');
        var dots = document.getElementsByClassName('dot');
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        if (slideIndex < 1) {
            slideIndex = slides.length;
        }
        for (var i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active');
        }
        slides[slideIndex - 1].classList.add('active');
        for (var i = 0; i < dots.length; i++) {
            dots[i].classList.remove('active-dot');
        }
        dots[slideIndex - 1].classList.add('active-dot');
    }
    function activeDot(n) {
        slideIndex = n;
        slideShow();
    }