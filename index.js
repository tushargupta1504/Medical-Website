// let lastScrollTop = 0;
// const navbar = document.querySelector('.navbar');

// window.addEventListener('scroll', function() {
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
//     if (scrollTop > lastScrollTop) {
//         // Scrolling down
//         navbar.style.top = '-80px'; // Adjust height accordingly
//     } else {
//         // Scrolling up
//         navbar.style.top = '0';
//     }
    
//     lastScrollTop = scrollTop;
// });
window.addEventListener('scroll', function(){
 var header = document.querySelector('.navbar');
 header.classList.toggle("sticky", window.scrollY>0);
})

const carousel = document.querySelector('.carousel');
const slides = carousel.querySelectorAll('.slide');
const prevButton = carousel.querySelector('.prev');
const nextButton = carousel.querySelector('.next');

let currentSlide = 0;

prevButton.addEventListener('click', () => {
  console.log('Previous button clicked');
  currentSlide--;
  updateSlide();
});

nextButton.addEventListener('click', () => {
  console.log('Next button clicked');
  currentSlide++;
  updateSlide();
});

function updateSlide() {
  console.log('Updating slide...');
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === currentSlide) {
      slide.classList.add('active');
    }
  });
  console.log(`Current slide: ${currentSlide}`);
}
