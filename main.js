jQuery(document).ready(function($) {

   if ($('.ds-testimonials-section').length) {
		$('.ds-testimonials-slider').slick({
		  	infinite: true,
		  	arrows: true,
		  	autoplay: true,
		  	autoplaySpeed: 4000,
		  	prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='ri-arrow-left-line'></i></button>",
		  	nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='ri-arrow-right-line'></i></button>"
		});
    }
     // Array of image URLs
const testimonialImages = [
  'projects-1.png',
  'nn1.png',
  'projects-2.png',
  'practices1.png',
  'process-2.png',
  // Add more image URLs as needed
];

// Get the testimonials-slider element
const testimonialsSlider = document.getElementById('testimonials-slider');

// Loop through the image URLs and create image elements
testimonialImages.forEach(imageUrl => {
  // Create an img element
  const imageElement = document.createElement('img');
  imageElement.src = imageUrl;
  imageElement.alt = 'Testimonial Image';

  // Append the image to the testimonials-slider
  testimonialsSlider.appendChild(imageElement);
});

});
