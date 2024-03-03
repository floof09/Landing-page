const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelector('.carousel-items');
const images = document.querySelectorAll('.carousel-items .work');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;
const totalImages = images.length;
const imageWidth = images[0].clientWidth;
let autoSlideInterval; 

function showImage(index) {
  carouselItems.style.transform = `translateX(-${index * imageWidth}px)`;
}

function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  showImage(currentIndex);
}

function startAutoSlide() {
  autoSlideInterval = setInterval(nextImage, 3000); 
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval); 
}

nextButton.addEventListener('click', () => {
  nextImage();
  stopAutoSlide(); 
});

prevButton.addEventListener('click', () => {
  prevImage();
  stopAutoSlide();
});

carousel.addEventListener('mouseenter', stopAutoSlide);
carousel.addEventListener('mouseleave', startAutoSlide); 

startAutoSlide();
