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
      text: "Gemini est un projet de modèle avancé pour le traitement du langage naturel.",
      iframe: ""
    },
    azure: {
      title: "Azure",
      text: "Azure propose des services cloud, dont des APIs d'intelligence artificielle.",
      iframe: ""
    },
    mistral: {
      title: "Mistral",
      text: "Mistral est un modèle open source performant pour la génération de texte.",
      iframe: ""
    },
    api: {
      title: "Completion API",
      text: "L'API Completion permet d'obtenir des réponses générées par un modèle de langage.",
      iframe: ""
    },
    writing_prompt: {
      title: "Writing Prompt",
      text: "Les prompts sont des instructions ou questions envoyées aux modèles pour guider la génération.",
      iframe: ""
    },
    fine: {
      title: "Fine-tuning",
      text: "Le fine-tuning consiste à entraîner un modèle préexistant sur des données spécifiques.",
      iframe: ""
    },
    prompt: {
      title: "Prompt Injection Attack",
      text: "Une attaque d'injection de prompt tente de manipuler le comportement du modèle.",
      iframe: ""
    },
    security: {
      title: "Security",
      text: "La sécurité en IA couvre la protection contre les usages malveillants et les vulnérabilités.",
      iframe: ""
    },
    bias: {
      title: "Bias & Fairness",
      text: "Les biais dans les modèles peuvent affecter l'équité des résultats générés.",
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
  