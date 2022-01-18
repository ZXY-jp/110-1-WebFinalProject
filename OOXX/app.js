var flag = true;
var playing = true;
var count = 0;
$(".grid div").click(place);
$("button").click(reset);

function place() {
  if ($(this).text() === "" && playing === true) {
    count++;
    $(this).removeClass("gray");
    if (flag) {
      $(this).text("O");
      $(this).addClass("orange");
    } else {
      $(this).text("X");
      $(this).addClass("red");
    }
    flag = !flag;

    var a = $("#a").text();
    var b = $("#b").text();
    var c = $("#c").text();
    var d = $("#d").text();
    var e = $("#e").text();
    var f = $("#f").text();
    var g = $("#g").text();
    var h = $("#h").text();
    var i = $("#i").text();

    check(a, b, c); /*橫線*3*/
    check(d, e, f);
    check(g, h, i);
    check(a, d, g); /*直線*3*/
    check(b, e, h);
    check(c, f, i);
    check(a, e, i); /*對角線*2*/
    check(c, e, g);
  }
  if (count == 9) {
    $("h1").text("平手！");
  }
}

function check(x, y, z) {
  console.log(x);
  if (x == y && y == z && x !== "") {
    $("h1").text(x + "獲勝！");
    playing = false;
  }
}

function reset() {
  flag = true;
  playing = true;
  count = 0;
  $("h1").text("Tic Tac Toe");
  $(".grid div").text("");

  $(".grid div").removeClass("red");
  $(".grid div").removeClass("orange");
  $(".grid div").addClass("gray");
}
