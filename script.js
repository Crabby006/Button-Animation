document.getElementById('jumpscareButton').addEventListener('click', function() {
    // Get the video element
    const video = document.getElementById('jumpscareVideo');
    
    // Set volume to 1000% (10x)
    video.volume = 1.0; // Browsers typically cap volume at 1.0
    
    // Display the video in full-screen mode
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { // Firefox
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { // Chrome, Safari and Opera
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { // IE/Edge
        video.msRequestFullscreen();
    }

    // Play the video
    video.style.display = "block";
    video.play();
});
