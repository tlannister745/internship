document.addEventListener('DOMContentLoaded', function () {
    const scrollContainer = document.querySelector('.scroll-container');
    const cards = document.querySelector('.cards');
    const leftButton = document.querySelector('.scroll-button.left');
    const rightButton = document.querySelector('.scroll-button.right');
  
    const cardWidth = document.querySelector('.card').offsetWidth;
    let scrollPosition = 0;
  
    leftButton.addEventListener('click', function () {
      if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        updateScroll();
      }
    });
  
    rightButton.addEventListener('click', function () {
      if (scrollPosition < cards.scrollWidth - scrollContainer.offsetWidth) {
        scrollPosition += cardWidth;
        updateScroll();
      }
    });
  
    function updateScroll() {
      cards.style.transform = `translateX(-${scrollPosition}px)`;
    }
  });
  