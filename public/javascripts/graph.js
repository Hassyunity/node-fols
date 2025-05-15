const descriptions = {
    html: {
      title: "HTML",
      text: "🕒 Futuristic Neon Clock — A sleek, cyber-style clock, perfect for a modern tech atmosphere",
      iframe: `<iframe
        src="https://jsfiddle.net/hassytsihoarana/ym5cLkwx/4/embedded/html,result/"
        allowfullscreen="true"
        loading="lazy"
      ></iframe>`
    },
    css: {
      title: "CSS",
      text: "🕒 Futuristic Neon Clock — A sleek, cyber-style clock, perfect for a modern tech atmosphere",
      iframe: `<iframe
        src="https://jsfiddle.net/hassytsihoarana/ym5cLkwx/4/embedded/css,result/"
        allowfullscreen="true"
        loading="lazy"
      ></iframe>`
    },
    javascript: {
      title: "JavaScript",
      text: "Stay tuned — something amazing is on the way!"
    },
    react: {
      title: "React",
      text: "Stay tuned — something amazing is on the way!"
    },
    vue: {
      title: "Vue.js",
      text: "Stay tuned — something amazing is on the way!"
    },
    angular: {
      title: "Angular",
      text: "Stay tuned — something amazing is on the way!"
    },
    php: {
      title: "PHP",
      text: "Stay tuned — something amazing is on the way!"
    },
    node: {
      title: "Node.js",
      text: "Stay tuned — something amazing is on the way!"
    },
    ruby: {
      title: "Ruby",
      text: "Stay tuned — something amazing is on the way!"
    },
    java: {
      title: "Java",
      text: "Stay tuned — something amazing is on the way!"
    },
    mysql: {
      title: "MySQL",
      text: "Stay tuned — something amazing is on the way!."
    },
    mongodb: {
      title: "MongoDB",
      text: "Stay tuned — something amazing is on the way!"
    },
    postgresql: {
      title: "PostgreSQL",
      text: "Stay tuned — something amazing is on the way!"
    },
    rest: {
      title: "REST API",
      text: "Stay tuned — something amazing is on the way!"
    },
    graphql: {
      title: "GraphQL",
      text: "Stay tuned — something amazing is on the way!"
    },
    jquery: {
      title: "jQuery",
      text: "Stay tuned — something amazing is on the way!"
    },
    tailwind: {
      title: "Tailwind CSS",
      text: "Stay tuned — something amazing is on the way!."
    },
    bootstrap: {
      title: "Bootstrap",
      text: "Stay tuned — something amazing is on the way!."
    }
  };
  
  document.querySelectorAll('[data-tech]').forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
  
      // Enlève la classe 'selected' de tous les items (si tu veux un effet visuel)
      document.querySelectorAll('[data-tech]').forEach(i => i.classList.remove('selected'));
      this.classList.add('selected');
  
      const tech = this.getAttribute('data-tech');
      const info = descriptions[tech];
  
      if (info) {
        document.getElementById('tech-title').textContent = info.title;
        document.getElementById('tech-text').textContent = info.text;
        // Injecte le contenu HTML de l'iframe ou vide le div s'il n'y en a pas
        document.getElementById('tech-iframe').innerHTML = info.iframe || '';
        document.getElementById('tech-description').style.display = 'block';
        document.getElementById('tech-description').scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  const items = document.querySelectorAll('[data-tech]');

items.forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault();

    // Enlève la classe 'selected' de tous les items
    items.forEach(i => i.classList.remove('selected'));

    // Ajoute la classe 'selected' à l'élément cliqué
    this.classList.add('selected');

    // Affiche la description
    const tech = this.getAttribute('data-tech');
    const info = descriptions[tech];
    if (info) {
      document.getElementById('tech-title').textContent = info.title;
      document.getElementById('tech-text').textContent = info.text;
      document.getElementById('tech-description').style.display = 'block';
      document.getElementById('tech-description').scrollIntoView({ behavior: 'smooth' });
    }
  });
});
