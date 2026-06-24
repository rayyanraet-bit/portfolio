// Typing effect parameters
const phrase = "System.out.print('Hello World!');";
const typingSpeed = 100; // milliseconds per letter
let index = 0;

function typeEffect() {
  if (index < phrase.length) {
    document.getElementById("typing-text").textContent += phrase.charAt(index);
    index++;
    setTimeout(typeEffect, typingSpeed);
  }
}

// Interactive execution button logic
function runCommand() {
  const outputBox = document.getElementById("terminal-output");
  
  // Show output box
  outputBox.classList.remove("hidden");
  outputBox.innerHTML = "Connecting to server...<br>PING successful! Status: 200 OK<br> Let's build something epic together.";
}

// Start typing effect when DOM content has loaded
document.addEventListener("DOMContentLoaded", typeEffect);