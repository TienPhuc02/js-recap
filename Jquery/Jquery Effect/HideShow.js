// Jquery Hide() and Show()
$("#hide").click(function () {
  $("p").hide();
});

$("#show").click(function () {
  $("p").show();
});

//syntax
$(selector).hide(speed, callback);

$(selector).show(speed, callback);

//example
$("button").click(function () {
  $("p").hide(1000);
});

//toggle() -> Các phần tử hiển thị bị ẩn và các phần tử ẩn được hiển thị:

$("button").click(function () {
  $("p").toggle();
});

//syntax
$(selector).toggle(speed, callback);
