# Crimson Cipher - Static Site Package (Final)

This package contains the Crimson Cipher static site (Home, StoryTime, Video, Chatroom) with a large styled retro TV on the homepage that cycles through cryptic news clips and static.

## What is included
- `index.html` — Home page with TV loop (uses `scripts/main.js`)
- `storytime.html` — Story posts page
- `video.html` — Video listing page
- `chatroom.html`, `chat-text.html`, `chat-voice.html` — Chatroom hub + placeholders
- `styles/style.css` — CSS (Crimson Cipher / IAIWAF v2 theme)
- `scripts/main.js` — JavaScript controlling the TV loop + mute button
- `assets/clips/*.mp4` — placeholder clips (replace with real clips)
- `assets/audio/*.mp3` — placeholder audio files (replace with real audio)
- `assets/images/logo.png` — placeholder logo image

## Notes on placeholders
The `assets/clips` folder contains small placeholder `.mp4` files (single-byte placeholders). These are NOT real videos — replace them with real clips as described below.

## Where to get royalty-free clips & audio
- Use public domain / royalty-free sources such as **Pexels**, **Pixabay**, **Internet Archive**, or **Mixkit**.
- Search for "TV static", "vintage news", "VHS glitch", or "broadcast" clips.
- For audio, look for "white noise", "radio static", or "distorted voice" clips. Audacity can be used to mix voice + static.

## How to replace clips (quick guide)
1. Upload or copy real MP4 clips into `assets/clips/` with names like `news1.mp4`, `news2.mp4`, `news3.mp4`, and `static.mp4` (static should be ~1s long).
2. If you use different filenames, open `scripts/main.js` and update the `clips` array and `staticClip` path accordingly.
3. Commit and push to GitHub. GitHub Pages will redeploy automatically.

## Customization
- Change clip durations in `scripts/main.js` (`clipDuration`, `staticDuration` in ms).
- Edit cryptic messages in the `randomMessage()` function in `scripts/main.js`.
- Replace `styles/style.css` to tweak the TV bezel or scanline appearance.

## Deploy
- Push the folder contents to your `crimson-cipher` GitHub repo root and enable GitHub Pages (branch: `main`, folder: `/ (root)`).
- Point your domain `iaiwaf.com` to GitHub Pages A-records and CNAME for `www` (if not already done).

---
Done. Replace the placeholders with real clips and sounds to get the full experience.
