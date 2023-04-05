function enableFullscreenImages() {
    const fullscreenImgs = document.querySelectorAll('.fullscreen-img');
    const modal = document.getElementById('fullscreen-modal');
    const modalImg = document.getElementById('fullscreen-img');
    const closeBtn = document.querySelector('.close-btn');
    
    fullscreenImgs.forEach(function(img) {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
        });
    });
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
    
  }
  
  // Appelle la fonction enableFullscreenImages une fois que le DOM est prêt
  document.addEventListener('DOMContentLoaded', enableFullscreenImages);
  