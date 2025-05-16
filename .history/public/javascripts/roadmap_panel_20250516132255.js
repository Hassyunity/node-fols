const descriptions = {
    ai_vs_agi: {
      title: "AI vs AGI",
      text: "L’intelligence artificielle (IA) est spécialisée tandis que l’intelligence artificielle générale (AGI) peut s’adapter à toute tâche cognitive humaine.",
      iframe: `<iframe src="https://www.youtube.com/embed/2ePf9rue1Ao" allowfullscreen></iframe>`
    },
    llms: {
      title: "LLMs",
      text: "Les grands modèles de langage (LLMs) sont entraînés sur de vastes quantités de données pour comprendre et générer du langage naturel.",
      iframe: `<iframe src="https://www.youtube.com/embed/z_EfZ6RDKHM" allowfullscreen></iframe>`
    },
    inference: {
      title: "Inference",
      text: "L'inférence est le processus d'utilisation d'un modèle entraîné pour produire des prédictions ou des réponses.",
      iframe: `<iframe src="https://www.youtube.com/embed/p3U2MbugvC8" allowfullscreen></iframe>`
    },
    Embeddings: {
      title: "Embeddings",
      text: "Les embeddings sont des représentations numériques de concepts permettant aux modèles de comprendre les relations sémantiques.",
      iframe: `<iframe src="https://www.youtube.com/embed/YjR3eM6dSxA" allowfullscreen></iframe>`
    },
    ai_agent: {
      title: "AI Agent",
      text: "Un agent IA est un système autonome qui peut percevoir son environnement, raisonner, et agir pour atteindre ses objectifs.",
      iframe: `<iframe src="https://www.youtube.com/embed/CFBuw9uU0j0" allowfullscreen></iframe>`
    },
    rag: {
      title: "RAG (Retrieval-Augmented Generation)",
      text: "RAG combine les modèles génératifs avec la recherche d'information pour fournir des réponses plus précises.",
      iframe: `<iframe src="https://www.youtube.com/embed/YOeM_AAKuRc" allowfullscreen></iframe>`
    },
    claude: {
      title: "Claude",
      text: "Claude est un modèle d'IA développé pour fournir des interactions conversationnelles avancées.",
      iframe: `<iframe src="https://www.youtube.com/embed/4cRVoFm3b7I" allowfullscreen></iframe>`
    },
    gemini: {
      title: "Gemini",
      text: "Gemini est un projet de Google visant à créer des modèles d'IA puissants combinant différentes approches.",
      iframe: `<iframe src="https://www.youtube.com/embed/GeminiVideoID" allowfullscreen></iframe>`
    },
    azure: {
      title: "Azure",
      text: "Azure propose des services d'IA dans le cloud pour construire et déployer des modèles de machine learning.",
      iframe: `<iframe src="https://www.youtube.com/embed/AzureAIIntro" allowfullscreen></iframe>`
    },
    mistral: {
      title: "Mistral",
      text: "Mistral est une startup spécialisée dans les modèles de langage open-source.",
      iframe: `<iframe src="https://www.youtube.com/embed/MistralVideoID" allowfullscreen></iframe>`
    },
    api: {
      title: "Completion API",
      text: "L'API de complétion permet de générer du texte en se basant sur un prompt donné.",
      iframe: `<iframe src="https://www.youtube.com/embed/OpenAICompletionAPI" allowfullscreen></iframe>`
    },
    writing_prompt: {
      title: "Writing Prompt",
      text: "Techniques pour créer des prompts efficaces pour générer du texte cohérent.",
      iframe: `<iframe src="https://www.youtube.com/embed/WritingPromptVideo" allowfullscreen></iframe>`
    },
    fine: {
      title: "Fine-tuning",
      text: "Le fine-tuning consiste à ajuster un modèle pré-entraîné sur des données spécifiques pour améliorer ses performances.",
      iframe: `<iframe src="https://www.youtube.com/embed/FineTuningTutorial" allowfullscreen></iframe>`
    },
    prompt: {
      title: "Prompt Injection Attack",
      text: "Une attaque par injection de prompt manipule les entrées pour biaiser la sortie du modèle.",
      iframe: `<iframe src="https://www.youtube.com/embed/PromptInjection" allowfullscreen></iframe>`
    },
    security: {
      title: "Security",
      text: "Les meilleures pratiques pour sécuriser les systèmes utilisant l'IA.",
      iframe: `<iframe src="https://www.youtube.com/embed/AISecurity" allowfullscreen></iframe>`
    },
    bias: {
      title: "Bias & Fairness",
      text: "Comprendre et atténuer les biais dans les modèles d'IA pour garantir l'équité.",
      iframe: `<iframe src="https://www.youtube.com/embed/AIBiasFairness" allowfullscreen></iframe>`
    }
  };
  
  function closePanel() {
    document.getElementById("tech-panel").classList.remove("open");
  }
  
  document.addEventListener("DOMContentLoaded", () => {
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
  
    document.querySelector('.close-btn').addEventListener('click', closePanel);
  });
  