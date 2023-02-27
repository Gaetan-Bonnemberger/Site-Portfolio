// Ce module permet la gestion des actions afférentes au thème
const theme = {
    // Méthode init lancée au démarrage de la page et qui permet de mettre en place le code à exécuter au démarrage.
    init: function() {

        // On place un écouteur de clics sur le bouton "lune" pour changer le thème
        const themeBtnElement = document.querySelector('#theme-switch');
        themeBtnElement.addEventListener('click', theme.toggleDarkTheme);


        // On sélectionne l'ensemble des pastilles de couleur pour les surveiller
        const colorButtonsElements = document.querySelectorAll('.theme-button');

        // Pour chaque bouton sélectionné et se trouvant dans le tableau colorButtonsElements, on place un écouteur
        for (const currentButton of colorButtonsElements) {
            
            currentButton.addEventListener('click', theme.handleThemeColorClick)

        }

        // Au chargement de la page, on exécute la méthode initLocalState qui se charge de vérifier dans le localStorage si on n'a pas un theme déjà sauvegardé
        theme.initLocalState();

    },

    /**
     * Méthode permettant de passer du thème clair au thème sombre et inversement
     */
    toggleDarkTheme: function () {

        const checkbox = document.getElementById('checkbox');
        checkbox.addEventListener('change', () => {
          if (checkbox.checked) {
            document.body.classList.add('theme-dark');
          } else {
            document.body.classList.remove('theme-dark');
          }
          theme.saveToLocalStorage();
        });
        

    },

    // Méthode qui se charge de sauvegarder la préférence de l'utilisateur sur le theme dark/light
    saveToLocalStorage: function() {

        // On commence par sélectionner le body pour savoir s'il possède la classe theme-dark
        // Comme la balise body est obligatoire et unique dans une page HTML, JS a prévu un raccourci pour la sélectionner : document.body
        const isDark = document.body.classList.contains('theme-dark');

        // isDark contient une valeur booléenne qu'on veut stocker en localStorage. Mais ce dernier ne comprend que les string, on doit donc la convertir.
        const stringifiedIsDark =  JSON.stringify(isDark);
        
        // On sauvegarde dans le localStorage l'information récupérée
        localStorage.setItem('darkMode', stringifiedIsDark);

    },

    // Méthode qui se charge de vérifier si on a un thème sauvegardé dans le localStorage
    initLocalState: function() {
        
        // On récupère la valeur du thème dark sauvegardée dans le localstorage
        const savedDarkMode = localStorage.getItem('darkMode');

        // On traduit l'information stockée en string en valeur comprise par JS.
        const isDark = JSON.parse(savedDarkMode);
      
        // Si isDark contient true, on applique le thème sombre
        if(isDark) {
            document.body.classList.add('theme-dark');
            // Avoir le bouton de switch qui persiste suivant le light ou darkmode
            document.getElementById('checkbox').checked = true;
        }

        // On veut aussi vérifier que localStorage contient une information sur un potentiel theme de couleur choisi
        const savedColorTheme = localStorage.getItem('colorTheme'); 

        // Si savedColorTheme contient quelque chose, alors on applique le theme contenu à la page
        // Si la variable savedColorTheme contient une string, c'est une valeur "considérée comme vraie" (truthy). Donc la condition sera effective si savecColorTheme ne contient pas du vide.
        if(savedColorTheme) {
            
            // On passe le nom du theme sauvegardé à la fonction dont c'est le role de l'afficher
            theme.changeColorTheme(savedColorTheme);
        }
    },

    // Méthode qui modifie le DOM afin d'afficher un thème de couleur reçu en paramètre
    changeColorTheme: function(colorTheme) {

        
        // Méthode subtile @copyright Xavier
        // On parcourt la liste des classes du body
        for (const item of document.body.classList) {
            // Si le nom de la classe contient le mot 'theme' et ne contient pas le mot "dark" (on ne veut pas supprimer la classe liée au thème dark)
            if (item.includes("theme") && (!item.includes("dark"))) {
                // Alors on supprime la calsse
                document.body.classList.remove(item);
            }
        }

        // On ajoute la classe du thème sur le body
        document.body.classList.add(colorTheme);

        // On modifie l'attribut src avec le nouveau chemin généré pour le thème actuel
        logoElement.src = logoUrl;

    }


    
}