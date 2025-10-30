Crimson Cipher — VHS cryptic clips package (v3)

This package includes the Crimson Cipher site plus detailed instructions to create distorted AI-anchor audio and embed it into short VHS-style video clips using free tools (TTS + ffmpeg).

Included:
- index.html, storytime.html, video.html (with Ezoic placeholders)
- styles/style.css
- scripts/main.js (TV + mute behavior)
- assets/clips/*.mp4 and assets/audio/*.mp3 — placeholders (replace with real files)

Suggested voice lines to generate (AI-distorted):
1. "Authorities continue to deny the existence of the signal."
2. "If you hear the tone... do not respond."
3. "The voice is broadcasting from inside the wires."
4. "You were never supposed to see this transmission."

Quick ffmpeg recipe to make a clip from an image + audio:
1) Create a base visual (tv_frame.jpg) — your TV screen image or title card
2) Create distilled audio (cryptic1.mp3) using TTS + distortion
3) Build clip:
   ffmpeg -loop 1 -i tv_frame.jpg -i cryptic1.mp3 -c:v libx264 -t 10 -pix_fmt yuv420p -c:a aac -b:a 128k -shortest assets/clips/cryptic1.mp4

For VHS overlay/static, you can blend with a static loop:
   ffmpeg -i base.mp4 -i static_overlay.mp4 -filter_complex "[0:v][1:v]blend=all_mode='overlay':all_opacity=0.12" -c:v libx264 -pix_fmt yuv420p vhs_visual.mp4

Replace placeholders in assets/clips/ and assets/audio/ with your real files, then push to GitHub.

If you want me to generate the actual distorted audio files and package them into MP4s, say so and I'll prepare them for you.
