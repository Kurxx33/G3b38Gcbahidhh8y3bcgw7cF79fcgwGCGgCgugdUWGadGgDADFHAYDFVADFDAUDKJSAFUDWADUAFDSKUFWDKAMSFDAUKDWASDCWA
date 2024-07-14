// JavaScript file for handling typewriter animation

// Text content for typewriter effect
const text = "Kurxx33 forever...";

// Index to track current character in text
let charIndex = 0;

// DOM element for bio text
const bioContent = document.getElementById('bio-content');

// Function for typewriter effect
function typeWriter() {
    if (charIndex < text.length) {
        bioContent.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100); // Adjust typing speed (milliseconds)
    } else {
        setTimeout(eraseText, 3000); // Pause before erasing text
    }
}

// Function to erase text
function eraseText() {
    if (charIndex > 0) {
        bioContent.textContent = text.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 50); // Adjust erasing speed (milliseconds)
    } else {
        charIndex = 0;
        setTimeout(typeWriter, 500); // Pause before typing again
    }
}

// Start typewriter effect on page load
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeWriter, 1000); // Delay typewriter effect after page load
});

// Autoplay audio on page load
const audioPlayer = document.querySelector('audio');
audioPlayer.play();

// Pause and hide video element
const videoElement = document.getElementById('background-video');
videoElement.pause();
videoElement.style.display = 'none';
