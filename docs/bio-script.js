document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById('background-audio');
    const playBtn = document.getElementById('play-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const volumeSlider = document.getElementById('volume-slider');
    const timeDisplay = document.getElementById('time-display');

    // Play audio
    playBtn.addEventListener('click', function() {
        audio.play();
    });

    // Pause audio
    pauseBtn.addEventListener('click', function() {
        audio.pause();
    });

    // Volume control
    volumeSlider.addEventListener('input', function() {
        audio.volume = parseFloat(this.value);
    });

    // Update time display
    audio.addEventListener('timeupdate', function() {
        const currentTime = formatTime(audio.currentTime);
        const duration = formatTime(audio.duration);
        timeDisplay.textContent = `${currentTime} / ${duration}`;
    });

    // Format time as MM:SS
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        const formattedTime = `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
        return formattedTime;
    }
});

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
