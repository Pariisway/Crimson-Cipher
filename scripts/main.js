// TV Video Player with creepy videos
const tvPlayer = document.getElementById('tvPlayer');
const muteBtn = document.getElementById('muteBtn');

// List of creepy videos (you'll need to add these files to your assets/clips folder)
const creepyVideos = [
    'assets/clips/cryptic1.mp4',
    'assets/clips/cryptic2.mp4', 
    'assets/clips/cryptic3.mp4',
    'assets/clips/cryptic4.mp4'
];

// Function to get a random video
function getRandomVideo() {
    const randomIndex = Math.floor(Math.random() * creepyVideos.length);
    return creepyVideos[randomIndex];
}

// Initialize TV with random video
function initTV() {
    const randomVideo = getRandomVideo();
    tvPlayer.src = randomVideo;
    tvPlayer.load();
    
    // Add some glitch effects randomly
    setInterval(() => {
        if (Math.random() > 0.7) {
            tvPlayer.style.filter = 'hue-rotate(90deg)';
            setTimeout(() => {
                tvPlayer.style.filter = 'none';
            }, 100);
        }
    }, 3000);
}

// Mute button functionality
muteBtn.addEventListener('click', () => {
    tvPlayer.muted = !tvPlayer.muted;
    muteBtn.textContent = tvPlayer.muted ? 'SOUND OFF' : 'SOUND ON';
    muteBtn.style.background = tvPlayer.muted ? '#ff0000' : '#2a0a0a';
    muteBtn.style.color = tvPlayer.muted ? '#000' : '#ff0000';
});

// When video ends, play another random one
tvPlayer.addEventListener('ended', () => {
    const newVideo = getRandomVideo();
    tvPlayer.src = newVideo;
    tvPlayer.play();
});

// Error handling for videos
tvPlayer.addEventListener('error', (e) => {
    console.error('Video error:', e);
    // Fallback to a different video
    setTimeout(() => {
        const fallbackVideo = getRandomVideo();
        if (fallbackVideo !== tvPlayer.src) {
            tvPlayer.src = fallbackVideo;
        }
    }, 2000);
});

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initTV);
