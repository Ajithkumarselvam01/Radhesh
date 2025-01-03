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
          1200: {
              items: 2
          },
          900: {
              items: 2
          }

      }
  });
});

$(document).ready(function() {
  let currentIndex = 0; // Initialize the current index
  const testimonials = $(".testimonial-content-wrapper .testimonial-content"); // Get all testimonial content
  const totalTestimonials = testimonials.length; // Total number of testimonials

  // Show the first testimonial initially
  testimonials.hide().eq(currentIndex).show();

  // Function to update the displayed testimonial
  function showTestimonial(index) {
      testimonials.fadeOut(300).eq(index).fadeIn(300); // Smooth transition
  }

  // Left arrow click event
  $(".left-arrow-mob-tes").click(function() {
      currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials; // Loop back to the last testimonial
      showTestimonial(currentIndex);
  });

  // Right arrow click event
  $(".right-arrow-mob-tes").click(function() {
      currentIndex = (currentIndex + 1) % totalTestimonials; // Loop back to the first testimonial
      showTestimonial(currentIndex);
  });
});

// document.querySelector('.read-more-btn').addEventListener('click', function() {
//   const hiddenContent = document.querySelector('.content-about.hidden');
//   if (hiddenContent.style.display === 'none' || !hiddenContent.style.display) {
//       hiddenContent.style.display = 'block';
//       this.innerHTML = 'Read Less <i class="fa fa-lg fa-angle-double-right" style="vertical-align: middle; padding-left: 5px;" aria-hidden="true"></i>';
//   } else {
//       hiddenContent.style.display = 'none';
//       this.innerHTML = 'Read More <i class="fa fa-lg fa-angle-double-right" style="vertical-align: middle; padding-left: 5px;" aria-hidden="true"></i>';
//   }
// });
