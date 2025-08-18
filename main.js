document.addEventListener('DOMContentLoaded', () => {
  // Form submission for email collection
  const form = document.getElementById('wl-form');
  if (form) {
    const msg = document.getElementById('form-msg');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]').value.trim();
      if(!email){ msg.textContent='Fyll i din e-post.'; return; }
      msg.textContent = 'Tack! Vi hör av oss.';
      form.reset();
    });
  }

  // Plausible CTA tracking
  document.querySelectorAll('.cta .btn').forEach(button => {
    button.addEventListener('click', (event) => {
      const label = event.target.innerText || 'Unlabeled button';
      plausible('CTA Click', { props: { button: label } });
    });
  });
});
