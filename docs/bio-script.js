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
