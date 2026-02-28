const form = document.querySelector('.form-box form');
const status = document.querySelector('.form-status');

form.addEventListener('submit', async e => {
  e.preventDefault();
  const data = new FormData(form);
  const response = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: { 'Accept': 'application/json' }
  });
  if (response.ok) {
    status.textContent = "Merci, message envoyé !";
    form.reset();
  } else {
    status.textContent = "Erreur, réessaye plus tard.";
  }
});