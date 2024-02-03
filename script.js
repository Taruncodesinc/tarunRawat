const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

class Particle {
  constructor(x, y, radius, color, velocity) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  update() {
    this.draw();
    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }
}

function init() {
  for (let i = 0; i < 100; i++) {
    const radius = Math.random() * 2 + 1;
    const x = Math.random() * (canvas.width - radius * 2) + radius;
    const y = Math.random() * (canvas.height - radius * 2) + radius;
    const color = 'white';
    const velocity = {
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2
    };
    particles.push(new Particle(x, y, radius, color, velocity));
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(particle => {
    particle.update();
    if (
      particle.x + particle.radius < 0 ||
      particle.x - particle.radius > canvas.width ||
      particle.y + particle.radius < 0 ||
      particle.y - particle.radius > canvas.height
    ) {
      particle.x = Math.random() * canvas.width;
      particle.y = Math.random() * canvas.height;
    }
  });
}

init();
animate();

  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    var scrollButton = document.getElementById("scrollButton");
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
      // User has scrolled to the bottom of the page
      scrollButton.classList.add("show");
    } else {
      scrollButton.classList.remove("show");
    }
  }
  
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
