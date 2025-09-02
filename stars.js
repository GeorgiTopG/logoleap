const container = document.querySelector(".floating-shapes");

if (!container) {
  console.error("Container .floating-shapes not found!");
} else {
  const numStars = 200; // more stars
  const stars = [];
  const rotationSpeed = 0.0001; // slow rotation
  let vpWidth = window.innerWidth;
  let vpHeight = window.innerHeight;

  let centerX = vpWidth / 2;
  let centerY = vpHeight / 2;
  const maxRadius = Math.sqrt(centerX**2 + centerY**2) + 220;

  // Helper function for bias toward edges
  function biasedRadius(min, max) {
    const t = Math.random();
    return min + (max - min) * Math.sqrt(t); // sqrt bias → more stars at large radius
  }

  // Create stars
  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("span");
    star.radius = biasedRadius(50, maxRadius);
    star.angle = Math.random() * Math.PI * 2;

    star.style.width = "2px";
    star.style.height = "2px";
    star.style.background = "white";
    star.style.borderRadius = "50%";
    star.style.position = "absolute";

    star.x = centerX + star.radius * Math.cos(star.angle);
    star.y = centerY + star.radius * Math.sin(star.angle) * 0.4; // flat perspective
    star.style.transform = `translate(${star.x}px, ${star.y}px)`;

    container.appendChild(star);
    stars.push(star);
  }

  // Animate stars
  function animateStars() {
    stars.forEach(star => {
      star.angle += rotationSpeed;
      star.x = centerX + star.radius * Math.cos(star.angle);
      star.y = centerY + star.radius * Math.sin(star.angle) * 0.4;
      star.style.transform = `translate(${star.x}px, ${star.y}px)`;
    });
    requestAnimationFrame(animateStars);
  }

  animateStars();

  // Resize handling
  window.addEventListener("resize", () => {
    vpWidth = window.innerWidth;
    vpHeight = window.innerHeight;
    centerX = vpWidth / 2;
    centerY = vpHeight / 2;
    const newMaxRadius = Math.sqrt(centerX**2 + centerY**2) + 220;

    stars.forEach(star => {
      star.radius = biasedRadius(50, newMaxRadius);
    });
  });
}
