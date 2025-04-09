// Récupère tous les liens du menu
const menuLinks = document.querySelectorAll('.menu ul li a');

menuLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Retire la classe 'active' de tous les liens
    menuLinks.forEach(l => l.classList.remove('active'));

    // Ajoute la classe 'active' uniquement au lien cliqué
    this.classList.add('active');
  });
});
