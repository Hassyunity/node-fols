// Récupère tous les liens du menu
const menuLinks = document.querySelectorAll('.menu ul li a');

// Fonction pour appliquer la classe 'active' au lien correspondant à l'URL actuelle
function setActiveLink() {
  menuLinks.forEach(link => {
    // Si l'URL du lien correspond à l'URL actuelle de la page
    if (link.href === window.location.href) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Appliquer la classe 'active' au chargement de la page
setActiveLink();

// Ajoute un événement de clic pour gérer l'ajout de la classe 'active' lors d'un clic
menuLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Retire la classe 'active' de tous les liens
    menuLinks.forEach(l => l.classList.remove('active'));

    // Ajoute la classe 'active' uniquement au lien cliqué
    this.classList.add('active');
  });
});
