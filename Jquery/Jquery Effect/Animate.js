$(selector).animate({ params }, speed, callback);
//Tham số params bắt buộc xác định các thuộc tính CSS sẽ được làm động.

$("button").click(function () {
  $("div").animate({ left: "250px" });
});

// với nhiều thuộc tính

$("button").click(function () {
  $("div").animate({
    left: "250px",
    opacity: "0.5",
    height: "150px",
    width: "150px",
  });
});

// sử dụng với các giá trị tương đối

$("button").click(function () {
  $("div").animate({
    left: "250px",
    height: "+=150px",
    width: "+=150px",
  });
});
//-> to dần lên sau mỗi cú click

// sư dụng các giá trị được xác định trước : chỉ định giá trị hoạt ảnh của thuộc tính là " show", " hide" hoặc " toggle":

$("button").click(function () {
  $("div").animate({
    height: "toggle",
  });
});

//sử dụng chức năng hàng chờ đợi

$("button").click(function () {
  var div = $("div");
  div.animate({ height: "300px", opacity: "0.4" }, "slow");
  div.animate({ width: "300px", opacity: "0.8" }, "slow");
  div.animate({ height: "100px", opacity: "0.4" }, "slow");
  div.animate({ width: "100px", opacity: "0.8" }, "slow");
});

$("button").click(function () {
  var div = $("div");
  div.animate({ left: "100px" }, "slow");
  div.animate({ fontSize: "3em" }, "slow");
});
