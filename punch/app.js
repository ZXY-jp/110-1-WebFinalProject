// 選擇相對emoji放入陣列
var answers = [
  "🧣",
  "🎩",
  "🧢",
  "👒",
  "🎓",
  "🥂",
  "👑",
  "🎀",
  "🧣",
  "🎩",
  "🧢",
  "👒",
  "🎓",
  "🥂",
  "👑",
  "🎀",
];
var first;
var second;

var firstEl; //儲存選取到的元素(選擇器)
var secondEl; //儲存選取到的元素(選擇器)

var firstindex;
var secondindex;

var lock = false;
var click = 0;
$("h2").hide();

for (var i = 0; i < 20; i++) {
  var rand1 = Math.floor(Math.random() * 15);
  var rand2 = Math.floor(Math.random() * 15);

  var tmp = answers[rand1];
  answers[rand1] = answers[rand2];
  answers[rand2] = tmp;
}

$("button").click(function () {
  if (!lock) {
    if ($(this).text() == "❓")
      //點擊已經翻開的牌，不會計入翻牌次數
      click++;

    $("h1").text("翻開" + click + "次");

    if (first == undefined && $(this).text() == "❓") {
      firstindex = $(this).data("index");

      first = answers[$(this).data("index")];
      $(this).text(first);
      firstEl = $(this);
    } else if (second == undefined && $(this).text() == "❓") {
      secondindex = $(this).data("index");

      if (firstindex != secondindex) {
        second = answers[$(this).data("index")];
        $(this).text(second);
        secondEl = $(this);

        if (first != second) {
          lock = true;
          setTimeout(function () {
            firstEl.text("❓");
            secondEl.text("❓");
            lock = false;
          }, 1000);
        } else {
          $("h2").show();
          setTimeout(function () {
            $("h2").hide();
          }, 800);
        }
        first = undefined;
        second = undefined;
      }
    }
  }
});
