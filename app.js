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

function setsubmit() {
  if (myWorks.value == 0) window.location = "http://www.google.com";
  if (myWorks.value == 1) window.location = "http://www.163.com";
  if (myWorks.value == 2) window.location = "http://www.sina.com";
}
