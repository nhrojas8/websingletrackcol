  // Chain links
  const ct = document.getElementById('chainTrack');
  for(let i = 0; i < 120; i++) {
    const l = document.createElement('div');
    l.className = 'chain-link';
    ct.appendChild(l);
  }

  // Pause chainring on hover
  const cr = document.getElementById('chainringAnim');
  const gw = document.querySelector('.gear-wrapper');
  gw.addEventListener('mouseenter', () => cr.style.animationPlayState = 'paused');
  gw.addEventListener('mouseleave', () => cr.style.animationPlayState = 'running');

  // Scroll reveal
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal-card').forEach((c, i) => {
    c.style.opacity = '0';
    c.style.transform = 'translateY(28px)';
    c.style.transition = `opacity 0.5s ${i * 0.07}s ease, transform 0.5s ${i * 0.07}s ease, background .3s, border-color .3s, box-shadow .3s`;
    io.observe(c);
  });

  // Nav compact on scroll
  const nav = document.getElementById('mainNav');
  window.addEventListener('scroll', () => {
    nav.style.padding = window.scrollY > 60 ? '10px 48px' : '16px 48px';
  });