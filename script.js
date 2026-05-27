// LIVE CLOCK

function updateClock(){

  let now = new Date();

  let hours = String(now.getHours()).padStart(2,'0');
  let minutes = String(now.getMinutes()).padStart(2,'0');
  let seconds = String(now.getSeconds()).padStart(2,'0');

  document.getElementById("clock").innerHTML =
    `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock,1000);

updateClock();


// RANDOM JOKES

const jokes = [

  "Why don’t programmers like nature? Too many bugs 😂",

  "I told my computer I needed a break, now it won’t stop sending KitKat ads 🍫",

  "Why was JavaScript sad? Because it didn’t know how to ‘null’ its feelings 😭",

  "I ate a clock yesterday. It was very time consuming ⏰",

  "Why do Java developers wear glasses? Because they can’t C# 🤓"

];

function showJoke(){

  let random =
    jokes[Math.floor(Math.random() * jokes.length)];

  document.getElementById("joke").innerHTML = random;
}


// CHANGE BACKGROUND

function changeBackground(){

  const backgrounds = [

    "linear-gradient(135deg,#ff0080,#7928ca,#00c6ff)",

    "linear-gradient(135deg,#00ff87,#60efff)",

    "linear-gradient(135deg,#fc466b,#3f5efb)",

    "linear-gradient(135deg,#f7971e,#ffd200)",

    "linear-gradient(135deg,#30cfd0,#330867)"

  ];

  let randomBg =
    backgrounds[Math.floor(Math.random() * backgrounds.length)];

  document.querySelector(".background").style.background =
    randomBg;
}


// DARK LIGHT MODE

function toggleTheme(){

  document.body.classList.toggle("light-mode");

}


// TYPING EFFECT

const text =
  "Welcome to my awesome first website 😎";

let index = 0;

function typeEffect(){

  if(index < text.length){

    document.querySelector(".typing").innerHTML +=
      text.charAt(index);

    index++;

    setTimeout(typeEffect,80);
  }
}

typeEffect();

function openSite(url){

  window.open(url, "_blank");

}