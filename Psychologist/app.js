// ================== Init AOS animations ==================
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
});

// ================== Smooth scroll for in-page anchors ==================
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length > 1 && document.querySelector(id)) {
      e.preventDefault();
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

