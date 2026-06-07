
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


let currentContext = "global"; 


function toggleChat() {
    const win = document.getElementById("win");
    win.style.display = (win.style.display === "none" || win.style.display === "") ? "flex" : "none";
    if(win.style.display === "flex" && document.getElementById("chips-container").children.length === 0) {
        renderChips(intentRegistry.greetings.nextChips);
    }
}


function send() {
    const input = document.getElementById("input");
    const text = input.value.trim();
    if (!text) return;

    appendMessage(text, "user");
    input.value = "";
    
    showTypingIndicator();
    
    
    setTimeout(() => {
        removeTypingIndicator();
        processRealNLP(text);
    }, 850);
}


function processRealNLP(userInput) {
    const cleanInput = userInput.toLowerCase();
    
    
    if (cleanInput.includes("main menu") || cleanInput.includes("back to topics")) {
        appendMessage("Returning to the center. What path calls to you now?", "bot");
        renderChips(intentRegistry.greetings.nextChips);
        currentContext = "global";
        return;
    }
    if (cleanInput.includes("close space")) {
        appendMessage("Go gently. Kuzuzangpola. ✨", "bot");
        setTimeout(toggleChat, 1500);
        return;
    }

    let bestIntent = null;
    let highestScore = 0;

   
    for (const [intentName, intentData] of Object.entries(intentRegistry)) {
        let score = 0;
        intentData.keywords.forEach(keyword => {
            if (cleanInput.includes(keyword)) {
                score += 2; 
            }
        });

       
        if (currentContext === intentName) {
            score += 1; 
        }

        if (score > highestScore) {
            highestScore = score;
            bestIntent = intentName;
        }
    }

    
    if (highestScore > 0 && bestIntent) {
        currentContext = bestIntent; 
        const intent = intentRegistry[bestIntent];
        
        
        const randomResponse = intent.responses[Math.floor(Math.random() * intent.responses.length)];
        appendMessage(randomResponse, "bot");
        renderChips(intent.nextChips);
    } else {
        
        handleFallback(cleanInput);
    }
}


function handleFallback(rawText) {
    const fallbacks = [
        "I want to make sure I give you exactly what you need. Are we focusing on physical stretching (**Yoga**), or mental clarity (**Meditation**)?",
        "My sensors can't quite read that wave length! 🌊 Tell me a bit more: are you experiencing tension in your body, or stress in your thoughts?",
        "Let's narrow our focus down together. What sounds best to your spirit right now? Selecting a path below can help us begin:"
    ];
    
    const randomFallback = fallbacks[Math.floor(Math.random() * fallbacks.length)];
    appendMessage(randomFallback, "bot");
    renderChips(["🧘 Yoga Support", "🧠 Meditation Support", "🌬️ Breathing Core"]);
}



function appendMessage(text, sender) {
    const body = document.getElementById("body");
    const wrapper = document.createElement("div");
    wrapper.className = `msg-wrapper ${sender === "bot" ? "left" : "right"}`;
    
    const msg = document.createElement("div");
    msg.className = `msg ${sender}`;
    msg.innerHTML = text;
    
    wrapper.appendChild(msg);
    body.appendChild(wrapper);
    body.scrollTop = body.scrollHeight; 
}

function showTypingIndicator() {
    if(document.getElementById("typing-indicator")) return;
    
    const body = document.getElementById("body");
    const wrapper = document.createElement("div");
    wrapper.className = "msg-wrapper left";
    wrapper.id = "typing-indicator";
    
    const msg = document.createElement("div");
    msg.className = "msg bot typing-dots";
    msg.innerHTML = "<span></span><span></span><span></span>";
    
    wrapper.appendChild(msg);
    body.appendChild(wrapper);
    body.scrollTop = body.scrollHeight;
}

function removeTypingIndicator() {
    const indicator = document.getElementById("typing-indicator");
    if(indicator) indicator.remove();
}

function renderChips(chipsArray) {
    const container = document.getElementById("chips-container");
    container.innerHTML = "";
    if(!chipsArray) return;

    chipsArray.forEach(chipText => {
        const chip = document.createElement("div");
        chip.className = "chip";
        chip.innerText = chipText;
        chip.onclick = () => {
            appendMessage(chipText, "user");
            showTypingIndicator();
            setTimeout(() => {
                removeTypingIndicator();
                processRealNLP(chipText);
            }, 600);
        };
        container.appendChild(chip);
    });
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



