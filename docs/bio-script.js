document.addEventListener('DOMContentLoaded', function() {
    const bioContent = document.getElementById('bio-content');
    const text = "Kurxx33 forever...";
    let index = 0;

    var video = document.getElementById('background-video');
    video.volume = 0.5; // Adjust volume as needed
    video.play();

    function typeWriter() {
        if (index < text.length) {
            bioContent.innerHTML = text.substring(0, index + 1) + '<span class="cursor">|</span>';
            index++;
            setTimeout(typeWriter, 200);
        } else {
            setTimeout(() => {
                bioContent.innerHTML = '';
                index = 0;
                setTimeout(typeWriter, 3000);
            }, 3000);
        }
    }

    typeWriter();
});
