document.addEventListener('DOMContentLoaded', function() {
    // Typewriter effect variables
    var textElement = document.getElementById('bio-content');
    var text = 'Kurxx33 forever...';
    var speed = 50; // Speed of typing in milliseconds

    function typeWriter() {
        if (i < text.length) {
            textElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(deleteText, 1000); // Wait for 1 second before deleting text
        }
    }

    function deleteText() {
        var currentText = textElement.innerHTML;
        if (currentText.length > 0) {
            textElement.innerHTML = currentText.substring(0, currentText.length - 1);
            setTimeout(deleteText, speed);
        } else {
            i = 0;
            setTimeout(typeWriter, 1000); // Wait for 1 second before typing again
        }
    }

    var i = 0;
    typeWriter(); // Start the typing animation initially

    // Play audio from MP3 file
    var audio = new Audio('https://pub-2284c75c95fc4a7982093319d9faf433.r2.dev/0714.MP3');
    audio.volume = 0.5; // Adjust volume as needed
    audio.play();
});
