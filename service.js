const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
      card.addEventListener("click", () => {
        card.classList.toggle("active");
      });
    });


const popup = document.getElementById("popup");
const openPopup = document.getElementById("openPopup");
const closeBtn = document.querySelector(".close-btn");

openPopup.addEventListener("click", () => {
    popup.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});
   function okk(){
    alert("Thank you! your form has been submitted successfully");
   }




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




const intentRegistry = {
    greetings: {
        keywords: ["hello", "hi", "hey", "greetings", "morning", "evening", "anyone there"],
        responses: [
            "Hello, beautiful soul. ✨ Take a deep breath. How can I support your practice or peace of mind today?",
            "Kuzuzangpola. 🙏 Welcome back to your mat. What are we focusing on today—moving the body, or calming the mind?"
        ],
        nextChips: ["🧘 Yoga Flow", "🧠 Meditation", "🌬️ Breathing Session"]
    },
    yoga_general: {
        keywords: ["yoga", "stretch", "pose", "asana", "flexibility", "sore", "body", "pain"],
        responses: [
            "Yoga is perfect for checking back into the body. Are you looking to build heat and energy, or stretch out dynamic tension and relax?",
            "Let's move with intention. I can suggest poses for energy, flexibility, or targeting sore areas like your lower back."
        ],
        nextChips: ["⚡ Energetic Flow", "🍃 Gentle Stretching", "🩹 Relieve Pain"]
    },
    meditation_general: {
        keywords: ["meditate", "meditation", "mind", "overwhelmed", "anxious", "calm", "anxiety", "racing"],
        responses: [
            "Sitting with your thoughts takes immense courage. 🤍 We can try a silent focus technique, or I can walk you through an active grounding exercise.",
            "When the mind is loud, we don't force it quiet—we just change our relationship to the noise. Ready for a short guided session?"
        ],
        nextChips: ["⏱️ 2-Min Grounding", "🌊 Mindfulness Tips", "🔙 Main Menu"]
    },
    insomnia: {
        keywords: ["sleep", "insomnia", "tired", "bed", "night", "restless"],
        responses: [
            "Let's prepare your nervous system for deep rest. I highly recommend a passive yoga pose like **Legs-Up-The-Wall** or a progressive muscle relaxation layout. Want me to guide you?"
        ],
        nextChips: ["🌙 Sleep Meditation", "🧘 Bedtime Poses"]
    },
    gratitude_fallback: {
        keywords: ["thank you", "thanks", "awesome", "great", "helpful"],
        responses: [
            "You are so welcome. The dedication you are showing to your well-being today is beautiful. 🙏",
            "The peace you feel is your own creation—I'm just here to guide it. Is there anything else you need?"
        ],
        nextChips: ["🔙 Main Menu", "👋 Close Space"]
    }
};


