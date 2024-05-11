document.addEventListener('DOMContentLoaded', function () {
  var hamburgers = document.querySelectorAll('.hamburg');
  var crossBtn = document.querySelector('.cross');

  hamburgers.forEach(function (hamburger) {
    hamburger.addEventListener('click', function () {
      var nav = document.querySelector('.nav');
      nav.classList.toggle('open');
      this.classList.toggle('open');
    });
  });

  crossBtn.addEventListener('click', function () {
    var nav = document.querySelector('.nav');
    nav.classList.toggle('open');
    this.classList.toggle('open');
  });

});


// slick slider ********
$(document).ready(function () {
  $('.partners').slick({
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 2000, // Change slide every 2 seconds
    dots: false, // Show navigation dots
    arrows: false, // Show navigation arrows
    infinite: true, // Make the slider infinite
    responsive: [
      {
        breakpoint: 1200, // Max width 1199px
        settings: {
          slidesToShow: 5 // Show 5 slides
        }
      },
      {
        breakpoint: 992, // Max width 991px
        settings: {
          slidesToShow: 4 // Show 4 slides
        }
      },
      {
        breakpoint: 768, // Max width 767px
        settings: {
          slidesToShow: 3 // Show 3 slides
        }
      },
      {
        breakpoint: 480, // Max width 479px
        settings: {
          slidesToShow: 2 // Show 2 slides
        }
      }
    ]
  });

  // custom arrow 
  $('.custom-prev').click(function () {
    $('.partners').slick('slickPrev');
  });

  // Custom next button functionality
  $('.custom-next').click(function () {
    $('.partners').slick('slickNext');
  });
});


// slick slider ********
$(document).ready(function () {
  $('.client-review').slick({
    autoplay: true,
    slidesToShow: 2,
    centerMode: true,
    centerPadding: '30px',
    slidesToScroll: 1,
    autoplaySpeed: 2000, // Change slide every 2 seconds
    dots: false, // Show navigation dots
    arrows: false, // Show navigation arrows
    infinite: true, // Make the slider infinite
    responsive: [
      
      {
        breakpoint: 480, // Max width 479px
        settings: {
          slidesToShow: 1 // Show 2 slides
        }
      }
    ]
  });
});


// FAQ 
document.addEventListener('DOMContentLoaded', function() {
  const questions = document.querySelectorAll('.question');
  
  questions.forEach(question => {
    question.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
      } else {
        answer.style.display = 'block';
      }
    });
  });
});