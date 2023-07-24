//fadeIn()-> làm phần tử đang ẩn hiện mờ ra

$(selector).fadeIn(speed, callback);

$("button").click(function () {
  $("#div1").fadeIn();
  $("#div2").fadeIn("slow");
  $("#div3").fadeIn(3000);
});

//fadeOut()-> làm phần tử đang hiện ->ẩn mờ đi

// $("selector").fadeOut(speed,callback)
$(selector).fadeOut(speed, callback);
$("button").click(function () {
  $("#div1").fadeOut();
  $("#div2").fadeOut("slow");
  $("#div3").fadeOut(3000);
});

/**
Phương thức jQuery fadeToggle()chuyển đổi giữa các phương thức fadeIn()và fadeOut() .

Nếu các yếu tố bị mờ đi, fadeToggle()sẽ làm mờ dần chúng.

Nếu các phần tử bị mờ dần, fadeToggle()sẽ làm mờ dần chúng.
*/

$(selector).fadeToggle(speed, callback);

$("button").click(function () {
  $("#div1").fadeToggle();
  $("#div2").fadeToggle("slow");
  $("#div3").fadeToggle(3000);
});

//fadeTo() ->Phương thức jQuery fadeTo()cho phép mờ dần theo độ mờ nhất định (giá trị từ 0 đến 1).

$(selector).fadeTo(speed, opacity, callback);

$("button").click(function () {
  $("#div1").fadeTo("slow", 0.15);
  $("#div2").fadeTo("slow", 0.4);
  $("#div3").fadeTo("slow", 0.7);
});
