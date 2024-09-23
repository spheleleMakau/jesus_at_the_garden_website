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