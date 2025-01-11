$(function() {
  $('.slider-blog').owlCarousel({
      loop: true,
      margin: 10,
      nav: true, // Enable navigation to make navText visible
      autoplay: false,
      dots: true,
      navText: [
          '<i class="fa-solid fa-angle-left"></i>',
          '<i class="fa-solid fa-angle-right"></i>'
      ],
      responsive: {
          0: {
              items: 1
          },
          990: {
              items: 2
          },
          1200: {
              items: 2
          }

      }
  });
});


$(function() {
  // Owl Carousel
  var owl = $(".testimonial-content-wrapper");
  owl.owlCarousel({
      items: 1,
      margin: 10,
      loop: true,
      nav: true,
      dots: true,
      navText: [
          '<i class="fa-solid fa-angle-left"></i>',
          '<i class="fa-solid fa-angle-right"></i>'
      ]

  });
});


document.addEventListener("DOMContentLoaded", function() {
  const faqItems = document.querySelectorAll(".faq-singular");

  faqItems.forEach(function(faq) {
      faq.addEventListener("click", function() {
          // Collapse other items
          faqItems.forEach(item => {
              if (item !== faq) {
                  item.classList.remove("active");
              }
          });

          // Toggle clicked item
          faq.classList.toggle("active");
      });
  });
});
