document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const form = document.getElementById('wl-form');
  if (form) {
    const msg = document.getElementById('form-msg');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]').value.trim();
      if(!email){ msg.textContent='Fyll i din e‑post.'; return; }
      msg.textContent = 'Tack! Vi hör av oss.';
      form.reset();
    });
  }
});