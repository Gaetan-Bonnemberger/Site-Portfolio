// la fonction init contient tout le code qui est doit etre exécuté au chargement de la page
function init() {

    // Au chargement de la page, on démarre le module theme qui s'occupe des actions liées au thème
    theme.init();
 
    enableFullscreenImages()

    // appel à la fonction saveScrollPosition
    saveScrollPosition();

}

// Pour attendre que la page soit vraiment totalement chargée, on place un écouteur d'événements sur le document. On lui demande d'écouter l'événement DOMContentLoaded qui est émis une fois que toute la page est bien chargée.
document.addEventListener('DOMContentLoaded', init);
