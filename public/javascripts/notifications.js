document.addEventListener('DOMContentLoaded', () => {
  const successMessage = document.getElementById('success-message');
  const errorMessage = document.getElementById('error-message');

  if (successMessage) {
    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 3000);
  }

  if (errorMessage) {
    setTimeout(() => {
      errorMessage.style.display = 'none';
    }, 3000);
  }
});
