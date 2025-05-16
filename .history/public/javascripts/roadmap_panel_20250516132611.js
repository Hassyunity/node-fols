const descriptions = {
    ai_vs_agi: {
      title: "AI vs AGI",
      text: "L’intelligence artificielle (IA) est spécialisée tandis que l’intelligence artificielle générale (AGI) peut s’adapter à toute tâche cognitive humaine.",
      iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/2ePf9rue1Ao" allowfullscreen></iframe>`
    },
    // ... autres entrées ...
    writing_prompt: {
      title: "Writing Prompt",
      text: "Techniques pour créer des prompts efficaces pour générer du texte cohérent.",
      iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/EXAMPLE_VIDEO" allowfullscreen></iframe>`
    }
  };
  
  function openPanel(key) {
    const panel = document.getElementById('tech-panel');
    const title = document.getElementById('tech-title');
    const text = document.getElementById('tech-text');
    const iframeDiv = document.getElementById('tech-iframe');
  
    if (descriptions[key]) {
      title.textContent = descriptions[key].title;
      text.textContent = descriptions[key].text;
      iframeDiv.innerHTML = descriptions[key].iframe;
      panel.classList.add('open');
    }
  }
  
  function closePanel() {
    document.getElementById('tech-panel').classList.remove('open');
  }
  
  document.querySelectorAll('.tree a[data-tech]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      const techKey = el.getAttribute('data-tech');
      openPanel(techKey);
    });
  });
  