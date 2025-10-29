# Crimson Cipher - static site package

This package contains a 4-page static site (Home, StoryTime, Video, Chatroom) styled with the Crimson Cipher / IAIWAF v2 theme.

## Quick deploy
- Upload the contents of this folder to a GitHub repository.
- Enable GitHub Pages on the `main` branch (root).
- Add your domain `iaiwaf.com` in repository Pages settings and configure DNS.

## Notes
- Firebase configuration is included in `firebase.js` and within each page's inline scripts for convenience (uses your `iaiwaf` project).
- Story chapters should be added to Firestore collection `chapters`.
- Videos should be added to Firestore collection `videos` (with fields `title`, `url`, `createdAt`).
- Chat uses Firebase Realtime Database at `https://iaiwaf-default-rtdb.firebaseio.com`.
- The homepage TV uses a Canvas-based faux-looping "clips" animation (no binary video files included).
