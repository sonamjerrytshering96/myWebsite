const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Thank you! Your message has been sent successfully.");

    form.reset();
});

// header
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

// MOBILE MENU 
const toggleMenu = () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("is-open");

  const expanded = hamburger.getAttribute("aria-expanded") === "true";
  hamburger.setAttribute("aria-expanded", !expanded);
};

// INIT 
document.addEventListener("DOMContentLoaded", () => {
  if (hamburger) {
    hamburger.addEventListener("click", toggleMenu);
  }
});



