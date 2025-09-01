const faders = document.querySelectorAll('.fade-in');
const options = { threshold: 0.2 };

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    appearOnScroll.unobserve(entry.target);
  });
}, options);

faders.forEach(fader => { appearOnScroll.observe(fader); });
