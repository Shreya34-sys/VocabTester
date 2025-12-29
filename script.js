function openDemo(url){
  if(url === '#') return alert('Replace with your project link');
  window.open(url, '_blank');
}

document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', ()=>{
    document.querySelectorAll('.chip').forEach(c=>c.classList.remove('active'));
    chip.classList.add('active');

    const filter = chip.dataset.filter;
    document.querySelectorAll('.project').forEach(p=>{
      p.style.display = (filter === 'all' || p.dataset.type === filter) ? '' : 'none';
    });
  });
});

document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const msgEl = document.getElementById('formMsg');

  if(!name || !email || !message){ msgEl.textContent = 'Please fill all fields.'; return; }
  if(!/\S+@\S+\.\S+/.test(email)) { msgEl.textContent = 'Enter a valid email.'; return; }

  msgEl.textContent = 'Message sent (demo).';
  this.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();
