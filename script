/* scripts/main.js - controls the fake TV loop, static transitions, and mute button */

const clips = [
  "assets/clips/news1.mp4",
  "assets/clips/news2.mp4",
  "assets/clips/news3.mp4"
];
const staticClip = "assets/clips/static.mp4";
const clipDuration = 7000; // 7s per clip
const staticDuration = 1200; // 1.2s static

let tvVideoEl, muteBtn;
let muted = false;

function pickRandom(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

async function playSequence(){
  while(true){
    const clip = pickRandom(clips);
    tvVideoEl.src = clip;
    tvVideoEl.play().catch(()=>{});
    await wait(clipDuration);
    // show static
    tvVideoEl.src = staticClip;
    tvVideoEl.play().catch(()=>{});
    showOverlayMessage(randomMessage(), staticDuration);
    await wait(staticDuration);
  }
}

function wait(ms){ return new Promise(res=>setTimeout(res, ms)); }

function randomMessage(){
  const msgs = [
    "THE SIGNAL IS BROKEN",
    "AUTHORITIES DENY THE EXISTENCE OF THE SIGNAL",
    "DO NOT LISTEN AFTER MIDNIGHT",
    "NOBODY SPEAKS OF THE GRAY FLOOR",
    "WAKE UP"
  ];
  return msgs[Math.floor(Math.random()*msgs.length)];
}

function showOverlayMessage(text, duration){
  const overlay = document.createElement('div');
  overlay.style.position='absolute';
  overlay.style.inset='0';
  overlay.style.display='flex';
  overlay.style.alignItems='center';
  overlay.style.justifyContent='center';
  overlay.style.pointerEvents='none';
  overlay.style.color='rgba(255,255,255,0.95)';
  overlay.style.fontFamily='Orbitron, monospace';
  overlay.style.fontSize='28px';
  overlay.style.textShadow='0 0 18px rgba(138,3,3,0.95)';
  overlay.style.background='linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.0))';
  overlay.innerText = text;
  document.querySelector('.tv-bezel').appendChild(overlay);
  setTimeout(()=>overlay.remove(), duration);
}

function setup(){
  tvVideoEl = document.getElementById('tvPlayer');
  muteBtn = document.getElementById('muteBtn');
  muted = false;
  tvVideoEl.muted = muted;
  muteBtn.addEventListener('click', ()=>{
    muted = !muted;
    tvVideoEl.muted = muted;
    muteBtn.classList.toggle('muted', muted);
    muteBtn.innerText = muted ? 'MUTED' : 'SOUND';
  });
  // start loop
  playSequence();
}

window.addEventListener('DOMContentLoaded', setup);
