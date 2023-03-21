function saveScrollPosition() {
  // On récupère tous les liens avec la classe "scroll-link" ou "save-scroll"
  const scrollLinks = document.querySelectorAll('.scroll-link, .save-scroll');
  
  // Pour chaque lien, on ajoute un écouteur d'événements sur le clic
  scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // On vérifie si le lien possède la classe "save-scroll"
      const saveScroll = this.classList.contains('save-scroll');
      
      // Si le lien possède la classe "save-scroll", on sauvegarde la position de scroll dans le local storage
      if (saveScroll) {
        localStorage.setItem('scrollPosition', window.pageYOffset);
      } else {
        // Si le lien ne possède pas la classe "save-scroll", on supprime la sauvegarde de position de scroll
        localStorage.removeItem('scrollPosition');
      }
    });
  });
}
