// addClass()- Thêm một hoặc nhiều lớp vào các phần tử đã chọn
// removeClass()- Loại bỏ một hoặc nhiều lớp khỏi các thành phần được chọn
// toggleClass()- Chuyển đổi giữa việc thêm/xóa các lớp khỏi các phần tử đã chọn
// css()- Đặt hoặc trả về thuộc tính style

$("button").click(function () {
  $("h1, h2, p").addClass("blue");
  $("div").addClass("important");
});

$("button").click(function () {
  $("h1, h2, p").removeClass("blue");
});

$("button").click(function () {
  $("#div1").addClass("important blue");
});
