const text = document.querySelectorAll(".paths");

for (let i = 0; i < text.length; i++) {
  console.log(`text number ${i} length is ${text[i].getTotalLength()}`);
}

// 把字體消除(透明)
// seconde動畫結束後才會消失
//讓後續畫面顯示
const lastWord = document.querySelector("#second");
const animation = document.querySelector("div.animation");
lastWord.addEventListener("animationend", () => {
  animation.style =
    "transition: all 1s ease; opacity: 0; pointer-events: none;";
});
