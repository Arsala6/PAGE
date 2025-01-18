function fillLoveMeter() {
    const fill = document.querySelector(".fill");
    fill.style.width = "100%";
}

function showRandomMessage() {
    const messages = [
        "You are my sunshine! ☀️",
        "I love you to the moon and back! 🌙",
        "You make my world brighter. 💖",
        "Forever and always, it’s you. ❤️",
        "You are my dream come true. 🌟"
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = document.getElementById("random-message");
    randomMessage.textContent = messages[randomIndex];
}
