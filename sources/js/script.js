document.addEventListener("DOMContentLoaded", function() {
  // Sélectionnez l'élément
  const cardElement = document.querySelector('.blog-preview-card');
  const titleElement = document.querySelector('.blog-preview-card__title');
  
  titleElement.addEventListener('mouseover', () => {
    cardElement.classList.add('is-hover-card');
    titleElement.classList.add('is-hover-title');
  })
  
  titleElement.addEventListener('mouseout', () => {
    cardElement.classList.remove('is-hover-card');
    titleElement.classList.remove('is-hover-title');
  })
});