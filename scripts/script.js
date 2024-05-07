document.addEventListener('DOMContentLoaded', function() {
  var hamburgers = document.querySelectorAll('.hamburg');
  var crossBtn = document.querySelector('.cross');
  
  hamburgers.forEach(function(hamburger) {
    hamburger.addEventListener('click', function() {
      var nav = document.querySelector('.nav');
      nav.classList.toggle('open');
      this.classList.toggle('open');
    });
  });

  crossBtn.addEventListener('click', function() {
    var nav = document.querySelector('.nav');
    nav.classList.toggle('open');
    this.classList.toggle('open');
  });

});
