// --- Gestion du volet ---
const toggleBtn = document.querySelector('.side-panel-toggle');
const wrapper = document.querySelector('.wrapper');
const sidePanel = document.querySelector('.side-panel');

toggleBtn.addEventListener('click', () => {
  sidePanel.classList.toggle('collapsed');
  wrapper.classList.toggle('side-panel-open');
});

// --- Un seul details ouvert à la fois ---
document.querySelectorAll('.side-panel details').forEach((det) => {
  det.addEventListener('click', function() {
    document.querySelectorAll('.side-panel details').forEach((other) => {
      if (other !== det) other.removeAttribute('open');
    });
  });
});

// --- Fermer tous les details par défaut sur mobile ---
document.addEventListener("DOMContentLoaded", function() {
  const mobileWidth = 768;
  if (window.innerWidth <= mobileWidth) {
    document.querySelectorAll(".side-panel details").forEach(d => {
      d.removeAttribute("open");
    });
  }
});