const text = document.querySelectorAll(".paths");

for (let i = 0; i < text.length; i++) {
  console.log(`text number ${i} length is ${text[i].getTotalLength()}`);
}


// Wrap every letter in a span
var textWrapper = document.querySelector('.ml14 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml14 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeInOutExpo",
    duration: 900
  }).add({
    targets: '.ml14 .letter',
    opacity: [0,1],
    translateX: [40,0],
    translateZ: 0,
    scaleX: [0.3, 1],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=600',
    delay: (el, i) => 150 + 25 * i
  }).add({
    targets: '.ml14',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
// 把字體消除(透明)
// seconde動畫結束後才會消失
const lastWord = document.querySelector("#second");
const animation = document.querySelector("div.animation");
lastWord.addEventListener("animationend", () => {
  animation.style = "transition: all 1s ease; opacity: 0; pointer-events: none;";
})

var $loading = $('#loading')
var $progress = $('#progress')
window.onload = () => {
$loading.hide()
}