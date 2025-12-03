const track = document.querySelector(".carousel-track");
const next = document.querySelector(".next-btn");
const prev = document.querySelector(".prev-btn");
const projects = track.querySelectorAll(".project-card");
const gap = 30;

function updateCentering() {
  if (projects.length === 0) return;
  const cardWidth = projects[0].offsetWidth;
  if (projects.length * (cardWidth + gap) <= track.offsetWidth) {
    track.classList.add("centered");
    if (next) next.style.display = "none";
    if (prev) prev.style.display = "none";
  } else {
    track.classList.remove("centered");
    if (next) next.style.display = "block";
    if (prev) prev.style.display = "block";
  }
}

// Initial centering
updateCentering();

// Mise à jour lors du resize
window.addEventListener("resize", updateCentering);

// Scroll avec flèches
if (next && prev) {
  const cardWidth = projects[0].offsetWidth;
  const scrollAmount = cardWidth + gap;

  next.addEventListener("click", () => {
    track.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
  prev.addEventListener("click", () => {
    track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  function updateArrowVisibility() {
    const maxScroll = track.scrollWidth - track.clientWidth;
    prev.style.display = track.scrollLeft <= 0 ? "none" : "block";
    next.style.display = track.scrollLeft >= maxScroll ? "none" : "block";
  }

  track.addEventListener("scroll", updateArrowVisibility);
  updateArrowVisibility();
}
