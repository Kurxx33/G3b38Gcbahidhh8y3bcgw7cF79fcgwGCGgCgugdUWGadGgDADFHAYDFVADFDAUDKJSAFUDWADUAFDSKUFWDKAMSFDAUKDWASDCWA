document.addEventListener('DOMContentLoaded', function() {
    // Text for typewriter effect
    const text = "Kurxx33 forever...";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            document.getElementById('bio-content').innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 50); // Adjust typing speed here (in milliseconds)
        }
    }

    // Start typewriter effect
    typeWriter();
});
