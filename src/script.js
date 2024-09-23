const joinUsButton = document.getElementById('join_us');
const modal = document.getElementById('next_step');

// Function to show the modal
joinUsButton.addEventListener('click', () => {
  // Remove 'd-none' class to show the modal
  modal.classList.remove('d-none');
  
  // Use Bootstrap's modal method if Bootstrap is included
  const bootstrapModal = new bootstrap.Modal(modal);
  bootstrapModal.show();
});



const imageSlider = document.querySelector('.image-slider');
const slides = imageSlider.querySelectorAll('.slide');
let slideIndex = 0;

function showSlide(index) {z
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function nextSlide() {
  slideIndex  
 = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

setInterval(nextSlide, 3000);