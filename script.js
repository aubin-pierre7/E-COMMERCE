// script.js — animations et hamburger
(() => {
  const yearEl = document.getElementById('year');
  yearEl && (yearEl.textContent = new Date().getFullYear());

  // hamburger menu
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.querySelector('.nav-menu');
  hamburger && hamburger.addEventListener('click', ()=> {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!expanded));
    navMenu.classList.toggle('show');
  });

  // scroll animations
  const fadeEls = document.querySelectorAll('.fade-up-init');
  const obs = new IntersectionObserver((entries, o) => {
    entries.forEach(e => {
      if(e.isIntersecting){ e.target.classList.add('visible'); o.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  fadeEls.forEach(el => obs.observe(el));
})();
