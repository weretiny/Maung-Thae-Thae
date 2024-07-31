const messages = [
    "You are my sunshine on a rainy day.",
    "Every moment with you is a treasure.",
    "I love you more than words can express.",
    "You make my heart smile.",
    "You are the love of my life.",
    "With you, every day is a beautiful adventure.",
    "You are my forever and always.",
    "You make everything better just by being you."
];

function showMessage() {
    const messageElement = document.getElementById('message');
    const randomIndex = Math.floor(Math.random() * messages.length);
    messageElement.textContent = messages[randomIndex];
}
