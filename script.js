// ===== Fade-in elements =====
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

// ===== Smooth scroll without URL change =====
const scrollBtn = document.getElementById("scrollBtn");
const target = document.getElementById("hireDesigner");

if(scrollBtn && target) {
  scrollBtn.addEventListener("click", function(e) {
    e.preventDefault(); // prevents hash from showing in URL
    target.scrollIntoView({ behavior: "smooth" }); // smooth scroll still works from CSS
  });
}
