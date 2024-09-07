const defaultSongIndex = 0;
let defaultSongCurrentTime = 82;
let currentSongIndex = 0;

const playlist = [
    { src: 'songs/main.mp3' }
];

const audio = new Audio(playlist[currentSongIndex].src);
audio.loop = true;



function changeSong(index, currentTime = 0) {
    if (currentSongIndex === defaultSongIndex) {
        defaultSongCurrentTime = audio.currentTime;
    }

    currentSongIndex = index;
    audio.src = playlist[currentSongIndex].src;
    audio.currentTime = currentTime;
    audio.play();

    const songTitleElement = document.getElementById('songTitle');
    if (songTitleElement) {
        songTitleElement.innerText = playlist[currentSongIndex].title || 'Unknown Title';
    }
}

function playDefaultSong() {
    changeSong(defaultSongIndex, defaultSongCurrentTime);
}

function removeOverlay() {
    const overlay = document.getElementById("overlay");
    if (overlay) {
        overlay.style.display = 'none';
        playDefaultSong();
    }
}


