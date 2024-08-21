// navbar
document.addEventListener("DOMContentLoaded", function() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const body = document.body;

  navbarToggler.addEventListener('click', function() {
      body.classList.toggle('navbar-open');
  });
});




//banner
const swiper = new Swiper('.hero-swiper', {
  effect: "fade",
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
});

// testiminial
const swiper1 = new Swiper('.testimonial-swiper', {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 58,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

// course
const swiper2 = new Swiper('.courseswiper', {
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});


document.addEventListener('DOMContentLoaded', function() {
  const quickLinks = document.querySelectorAll('.quick-links');
  
  quickLinks.forEach(function(link) {
      link.querySelector('strong').addEventListener('click', function() {
          // First, close all sections
          quickLinks.forEach(function(otherLink) {
              if (otherLink !== link) {
                  otherLink.classList.remove('active');
              }
          });
          
          // Toggle the clicked section
          link.classList.toggle('active');
      });
  });
});