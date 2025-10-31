// === TV FUNCTIONALITY ===
// Only run on home page (index.html)
if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
    const tvPlayer = document.getElementById('tvPlayer');
    const muteBtn = document.getElementById('muteBtn');

    if (tvPlayer && muteBtn) {
        // List of creepy videos - using free online videos that work immediately
        const creepyVideos = [
            <a href="https://pixabay.com/users/simovina-7130282/">simovina</a> from <a href="https://pixabay.com/">Pixabay</a>
            'https://assets.mixkit.co/videos/preview/mixkit-abstract-red-and-orange-flow-34560-large.mp4',
            'https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-red-light-flickering-34558-large.mp4',
            'https://assets.mixkit.co/videos/preview/mixkit-a-blurred-bokeh-of-colorful-lights-abstract-background-34564-large.mp4',
            'https://assets.mixkit.co/videos/preview/mixkit-red-and-blue-abstract-lights-34562-large.mp4'
        ];

        function getRandomVideo() {
            const randomIndex = Math.floor(Math.random() * creepyVideos.length);
            return creepyVideos[randomIndex];
        }

        function initTV() {
            const randomVideo = getRandomVideo();
            tvPlayer.src = randomVideo;
            tvPlayer.load();
            
            // Add random glitch effects
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
            console.log('Video failed, trying next...');
            const currentIndex = creepyVideos.indexOf(tvPlayer.src);
            const nextIndex = (currentIndex + 1) % creepyVideos.length;
            tvPlayer.src = creepyVideos[nextIndex];
            tvPlayer.play().catch(err => {
                console.log('All videos failed, using placeholder');
                tvPlayer.style.backgroundColor = '#ff0000';
                tvPlayer.innerHTML = '<div style="color:white;font-size:2rem;display:flex;align-items:center;justify-content:center;height:100%;">SIGNAL LOST</div>';
            });
        });

        // Initialize TV when page loads
        document.addEventListener('DOMContentLoaded', initTV);
        
        // Also try initializing if DOM is already loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initTV);
        } else {
            initTV();
        }
    }
}
