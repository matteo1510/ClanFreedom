// contatore animato

let counter = document.getElementById("counter");

let value = 0;

let interval = setInterval(() => {

value++;

counter.innerText = value;

if(value >= 120){
clearInterval(interval);
}

},30);


// apertura app

document.getElementById("android").onclick = function(){

window.open("https://play.google.com/store/apps/details?id=com.floraincognita.app.floraincognita");

}

document.getElementById("ios").onclick = function(){

window.open("https://apps.apple.com/app/flora-incognita/id1297860122");

}
