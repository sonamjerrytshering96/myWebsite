// parallax

function goToNext(nextId) {
  const target = document.getElementById(nextId);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}


// carousel effect
const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let index = 0;

nextBtn.addEventListener('click', () => {
  const cards = document.querySelectorAll('.sangay-card-mini');
  if (index < cards.length - 1) index++;
  track.style.transform = `translateX(-${index * 220}px)`;
});

prevBtn.addEventListener('click', () => {
  if (index > 0) index--;
  track.style.transform = `translateX(-${index * 220}px)`;
});

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
const overlay = document.querySelector(".nav-overlay");

// OPEN / CLOSE MENU
menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
    overlay.classList.toggle("active");
});

// CLOSE WHEN CLICKING OUTSIDE (OVERLAY)
overlay.addEventListener("click", () => {
    nav.classList.remove("active");
    overlay.classList.remove("active");
});

// OPTIONAL: CLOSE MENU WHEN CLICKING A LINK
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        overlay.classList.remove("active");
    });
});
