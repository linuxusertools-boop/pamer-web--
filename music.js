const audio=new Audio('https://kevsoft-id.vercel.app/music/Pocket%20Orbit.mp3');
audio.loop=true;
window.addEventListener('load',()=>{audio.play().catch(()=>{});});
window.addEventListener('beforeunload',()=>{audio.pause();audio.currentTime=0;});