// Copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Simple waitlist handler (mailto fallback)
const form = document.getElementById('wl-form');
const msg = document.getElementById('form-msg');

form?.addEventListener('submit', (e)=>{
  e.preventDefault();
  const email = (document.getElementById('email') || {}).value?.trim();
  if(!email){
    msg.textContent = 'Ange en giltig e‑postadress.'; return;
  }
  const subject = encodeURIComponent('Prime Mind Waitlist');
  const body = encodeURIComponent(`Hej Prime Mind,\n\nJag vill stå på väntelistan.\nE‑post: ${email}\n\n/Website`);
  window.location.href = `mailto:contact@primemind.cloud?subject=${subject}&body=${body}`;
  msg.textContent = 'Öppnar e‑postklient...';
});
