const descriptions = {
    ai_vs_agi: {
      title: "AI vs AGI",
      text: "Comming soon ...",
      iframe: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/JwMfyRkS_rk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    llms: {
      title: "LLMs",
      text: "Comming soon ....",
      iframe: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/6wQ6gR6vErw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    inference: {
      title: "Inference",
      text: "Comming soon ...",
      iframe: ""
    },
    embeddings: {
      title: "Embeddings",
      text: "Comming soon ...",
      iframe: ""
    },
    ai_agent: {
      title: "AI Agent",
      text: "Comming soon ...",
      iframe: ""
    },
    rag: {
      title: "RAG",
      text: "Comming soon ...",
      iframe: ""
    },
    claude: {
      title: "Claude",
      text: "Comming soon ...",
      iframe: ""
    },
    gemini: {
      title: "Gemini",
      text: "Comming soon ...l.",
      iframe: ""
    },
    azure: {
      title: "Azure",
      text: "Comming soon ....",
      iframe: ""
    },
    mistral: {
      title: "Mistral",
      text: "Comming soon ...",
      iframe: ""
    },
    api: {
      title: "Completion API",
      text: "Comming soon ...ge.",
      iframe: ""
    },
    writing_prompt: {
      title: "Writing Prompt",
      text: "Comming soon ...",
      iframe: ""
    },
    fine: {
      title: "Fine-tuning",
      text: "Comming soon ....",
      iframe: ""
    },
    prompt: {
      title: "Prompt Injection Attack",
      text: "Comming soon ...",
      iframe: ""
    },
    security: {
      title: "Security",
      text: "Comming soon ...",
      iframe: ""
    },
    bias: {
      title: "Bias & Fairness",
      text: "Comming soon ....",
      iframe: ""
    },
  };
  
  // Fonction pour fermer le panneau
  function closePanel() {
    document.getElementById("tech-panel").classList.remove("open");
  }
  
  // Initialisation des événements
  function initRoadmapPanel() {
    // Sur chaque lien data-tech
    document.querySelectorAll('[data-tech]').forEach(el => {
      el.addEventListener('click', event => {
        event.preventDefault();
        const key = el.dataset.tech.trim();
        const content = descriptions[key];
        if (content) {
          document.getElementById('tech-title').textContent = content.title;
          document.getElementById('tech-text').textContent = content.text;
          document.getElementById('tech-iframe').innerHTML = content.iframe;
          document.getElementById('tech-panel').classList.add('open');
        }
      });
    });
  
    // Bouton fermeture
    const closeBtn = document.querySelector('#tech-panel .close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', closePanel);
    }
  }
  
  // Démarrer quand le DOM est prêt
  document.addEventListener('DOMContentLoaded', initRoadmapPanel);
  