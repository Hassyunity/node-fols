document.addEventListener('DOMContentLoaded', () => {
  // Ton code ici
  const menuLinks = document.querySelectorAll('.menu ul li a');

  function setActiveLink() {
    const currentUrl = window.location.href.split(/[?#]/)[0];
    menuLinks.forEach((link) => {
      const linkUrl = link.href.split(/[?#]/)[0];
      if (linkUrl === currentUrl) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  setActiveLink();

  menuLinks.forEach((link) => {
    link.addEventListener('click', function () {
      menuLinks.forEach((l) => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  document.querySelectorAll('.submenu > a').forEach((link) => {
    link.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        this.parentElement.classList.toggle('active');
      }
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      document
        .querySelectorAll('.submenu.active')
        .forEach((el) => el.classList.remove('active'));
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const btnPersonal = document.getElementById('btn-personal');
  const btnProfessional = document.getElementById('btn-professional');
  const worksPersonal = document.getElementById('works-personal');
  const worksProfessional = document.getElementById('works-professional');

  btnPersonal.addEventListener('click', () => {
    worksPersonal.style.display = 'block';
    worksProfessional.style.display = 'none';
    btnPersonal.classList.add('active');
    btnProfessional.classList.remove('active');
  });

  btnProfessional.addEventListener('click', () => {
    worksPersonal.style.display = 'none';
    worksProfessional.style.display = 'block';
    btnProfessional.classList.add('active');
    btnPersonal.classList.remove('active');
  });
});
