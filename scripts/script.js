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
document.addEventListener('DOMContentLoaded', function () {
  const questions = document.querySelectorAll('.question');

  questions.forEach(question => {
    question.addEventListener('click', function () {
      const answer = this.nextElementSibling;
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
      } else {
        answer.style.display = 'block';
      }
    });
  });
});


const langButton = document.getElementById('langButton');
langButton.addEventListener('click', function () {
  // Toggle active class
  this.parentNode.classList.toggle('active');
  langButton.classList.add("reverse-flex-row")
  // Change image source
  const img = this.querySelector('img');
  if (img.getAttribute('src') === './assets/icons/Language.svg') {
    img.setAttribute('src', './assets/icons/lang-map.svg');
    langButton.classList.add("reverse-flex-row")
  } else {
    img.setAttribute('src', './assets/icons/Language.svg');
    langButton.classList.remove("reverse-flex-row")
  }
});



// Product page mutli step form  
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  console.log("🚀 ~ showTab ~ x:", x)
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}



function toggleOptions() {
  const options = document.querySelector('.select_options');
  const arrowIcon = document.getElementById('arrow-icon');
  if (options.style.display === 'block') {
      options.style.display = 'none';
      arrowIcon.classList.remove('arrow_rotate');
  } else {
      options.style.display = 'block';
      arrowIcon.classList.add('arrow_rotate');
  }
}

function targetDocumentToggleOptions() {
  const options = document.querySelector('.td-select_options');
  const arrowIcon = document.getElementById('arrow-icon');
  if (options.style.display === 'block') {
      options.style.display = 'none';
      arrowIcon.classList.remove('arrow_rotate');
  } else {
      options.style.display = 'block';
      arrowIcon.classList.add('arrow_rotate');
  }
}


function selectLanguage(element) {
  const select = document.querySelector('.select span');
  select.textContent = element.textContent;
  const options = document.querySelector('.select_options');
  options.style.display = 'none';
  document.getElementById('arrow-icon').classList.remove('arrow_rotate');
}

function selectTDLanguage(element) {
  const select = document.querySelector('.select span');
  select.textContent = element.textContent;
  const options = document.querySelector('.td-select_options');
  options.style.display = 'none';
  document.getElementById('arrow-icon').classList.remove('arrow_rotate');
}

// Optional: Close the options when clicking outside
document.addEventListener('click', function(event) {
  const select = document.querySelector('.select');
  const options = document.querySelector('.select_options');
  if (!select.contains(event.target)) {
      options.style.display = 'none';
      document.getElementById('arrow-icon').classList.remove('arrow_rotate');
  }
});


function countryToggleOptions() {
  const countryOptions = document.querySelector('.countryOptions')
  countryOptions.style.display = 'block'
}

function selectCountry(element) {
  const select = document.querySelector('.country span');
  const pElement = element.querySelector('p');
  select.textContent = pElement.textContent;
  const options = document.querySelector('.countryOptions');
  options.style.display = 'none';
  document.getElementById('arrow-icon').classList.remove('arrow_rotate');
}


fdocument.addEventListener('DOMContentLoaded', function() {
  const languageButton = document.getElementById('languageButton');
  const languageList = languageButton.querySelector('.l-list');

  languageButton.addEventListener('click', function() {
    alert('lkjklj')
    languageList.classList.toggle('active');
  });
});

