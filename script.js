// Contatore animato
let counter = document.getElementById("counter");
let value = 0;
let interval = setInterval(()=>{
  value++;
  counter.innerText = value;
  if(value>=120){clearInterval(interval);}
},30);

// Pulsanti app
document.getElementById("android").onclick = ()=>{
window.open("https://play.google.com/store/apps/details?id=com.floraincognita.app.floraincognita");
}
document.getElementById("ios").onclick = ()=>{
window.open("https://apps.apple.com/app/flora-incognita/id1297860122");
}

// Fade-in al scroll
const faders = document.querySelectorAll(".fade-in");
window.addEventListener("scroll", ()=>{
  faders.forEach(el=>{
    const top = el.getBoundingClientRect().top;
    const trigger = window.innerHeight - 100;
    if(top<trigger) el.classList.add("show");
  });
});

// Foglie animate
const canvas = document.getElementById("leaves");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let leaves = [];
for(let i=0;i<50;i++){
  leaves.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    r:Math.random()*15+5,
    speed:Math.random()*1+0.5,
    angle:Math.random()*2*Math.PI
  });
}
function drawLeaves(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="rgba(62,163,77,0.7)";
  leaves.forEach(l=>{
    ctx.beginPath();
    ctx.arc(l.x,l.y,l.r,0,2*Math.PI);
    ctx.fill();
    l.y += l.speed;
    l.x += Math.sin(l.angle);
    l.angle += 0.01;
    if(l.y>canvas.height) l.y=-10;
    if(l.x>canvas.width) l.x=0;
  });
  requestAnimationFrame(drawLeaves);
}
drawLeaves();

window.addEventListener("resize", ()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
