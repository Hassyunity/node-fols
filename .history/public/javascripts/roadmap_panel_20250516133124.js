// Contenu des descriptions pour chaque technologie
const descriptions = {
    ai_vs_agi: {
      title: "AI vs AGI",
      text: "L’intelligence artificielle (IA) est spécialisée tandis que l’intelligence artificielle générale (AGI) peut s’adapter à toute tâche cognitive humaine.",
      iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/2ePf9rue1Ao" allowfullscreen></iframe>`
    },
    llms: {
      title: "LLMs",
      text: "Les grands modèles de langage (LLMs) sont entraînés sur de vastes quantités de données pour comprendre et générer du langage naturel.",
      iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/z_EfZ6RDKHM" allowfullscreen></iframe>`
    },
    inference: {
      title: "Inference",
      text: "L'inférence est le processus d'utilisation d'un modèle entraîné pour produire des prédictions ou des réponses.",
      iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/p3U2MbugvC8" allowfullscreen></iframe>`
    },
    Embeddings: {
      title: "Embeddings",
      text: "Les embeddings sont des représentations numériques de concepts permettant aux modèles de comprendre les relations sémantiques.",
      iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/YjR3eM6dSxA" allowfullscreen></iframe>`
    },
    ai_agent: {
      title: "AI Agent",
      text: "Un agent IA est un système autonome qui peut percevoir son environnement, raisonner, et agir pour atteindre ses objectifs.",
      iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/CFBuw9uU0j0" allowfullscreen></iframe>`
    },
    rag: {
      title: "RAG (Retrieval-Augmented Generation)",
      text: "RAG combine les modèles génératifs avec la recherche d'information pour fournir des réponses plus précises.",
      iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/YOeM_AAKuRc" allowfullscreen></iframe>`
    },
    claude: {
      title: "Claude",
      text: "Claude est un modèle d'IA avancé développé pour offrir des capacités de traitement du langage naturel performantes.",
      iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/e2sA7TnlN6E" allowfullscreen></iframe>`
    },
    gemini: {
      title: "Gemini",
      text: "Gemini est un système d'IA qui combine différents types de modèles pour améliorer la compréhension contextuelle.",
      iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Rd6-EV6d5Us" allowfullscreen></iframe>`
    },
    azure: {
      title: "Azure",
      text: "Azure AI est une plateforme de Microsoft proposant divers services d'IA pour entreprises et développeurs.",
      iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/4JrHkDQ10rM" allowfullscreen></iframe>`
    },
    mistral: {
      title: "Mistral",
      text: "Mistral est un modèle open-source d'IA spécialisé dans le traitement du langage naturel avec des performances élevées.",
      iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Q2Qc3aOkpo0" allowfullscreen></iframe>`
    },
    api: {
      title: "Completion API",
      text: "L'API Completion d'OpenAI permet de générer du texte basé sur des prompts fournis par l'utilisateur.",
      iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/N8cQDEPKT_U" allowfullscreen></iframe>`
    },
    writing_prompt: {
      title: "Writing Prompt",
      text: "Les prompts d'écriture sont des instructions ou des questions destinées à guider la génération de texte par l'IA.",
      iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Gzq2wv5zjDY" allowfullscreen></iframe>`
    },
    fine: {
      title: "Fine-tuning",
      text: "Le fine-tuning permet d'adapter un modèle pré-entraîné à des tâches spécifiques en utilisant des données supplémentaires.",
      iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/VHAlDtxfuwY" allowfullscreen></iframe>`
    },
    prompt: {
      title: "Prompt Injection Attack",
      text: "Les attaques par injection de prompt manipulent les entrées pour tromper ou modifier le comportement de l'IA.",
      iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/K6dd12cc7t8" allowfullscreen></iframe>`
    },
    security: {
      title: "Security",
      text: "La sécurité en IA vise à protéger les systèmes contre les attaques et à garantir la confidentialité des données.",
      iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/t1qvt3kHKlI" allowfullscreen></iframe>`
    },
    bias: {
      title: "Bias & Fairness",
      text: "Le biais dans les modèles IA peut entraîner des résultats injustes ; il est crucial de s'assurer de l'équité des systèmes.",
      iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/oPt1y15iNQI" allowfullscreen></iframe>`
    }
  };
  
  // Fonction pour fermer le panneau
  window.closePanel = function() {
    document.getElementById("tech-panel").classList.remove("open");
  };
  
  // Initialisation des événements
  function initRoadmapPanel() {
    // Clic sur chaque lien data-tech
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
  
    // Clic sur le bouton fermeture
    const closeBtn = document.querySelector('#tech-panel .close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', closePanel);
    }
  }
  
  // Appeler la fonction quand le DOM est prêt
  document.addEventListener('DOMContentLoaded', initRoadmapPanel);
  