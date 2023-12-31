// JavaScript code here
const projectImages = [
  'projects-1.png',
  'nn1.png',
  'projects-2.png',
  'practices1.png',
  'process-2.png',
  // Add more image URLs as needed
];

const projectShowcaseSlider = document.getElementById('project-showcase-slider');
let currentIndex = 0;

function updateSlider() {
  projectShowcaseSlider.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % projectImages.length;
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + projectImages.length) % projectImages.length;
  updateSlider();
}

setInterval(nextSlide, 3000);

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    nextSlide();
  } else if (event.key === 'ArrowLeft') {
    prevSlide();
  }
});

projectImages.forEach((imageUrl) => {
  const projectLoop = document.createElement('div');
  projectLoop.classList.add('ds-testimonials-loop');
  const imageElement = document.createElement('img');
  imageElement.src = imageUrl;
  imageElement.alt = 'Project Image';
  projectLoop.appendChild(imageElement);
  projectShowcaseSlider.appendChild(projectLoop);
});

// Stick slider
$(document).ready(function(){
  $('#project-showcase-slider').slick({
    // Slick Slider options (if needed)
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Change slide every 3 seconds
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});


