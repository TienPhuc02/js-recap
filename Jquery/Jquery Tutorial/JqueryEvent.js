// cú pháp cho các phương thức sự kiện

$("selector").click();
//Bước tiếp theo là xác định điều gì sẽ xảy ra khi sự kiện kích hoạt. Bạn phải truyền một chức năng cho sự kiện:
$("selector").click(function () {
  // do something
});

//syntax
$(document).ready(function () {
  // jquery event
});

//click()

$("p").click(function () {
  $(this).hide();
});

//dbclick()

$("p").dblclick(function () {
  $(this).hide();
});

//mouseenter() -> rê chuột vào 1 selector nào đó thì event thực thi

$("#p1").mouseenter(function () {
  alert("You entered p1!");
});

//mouseleave()-> khi rê chuột ra 1 selector nào đó thì event được thực thi
$("#p1").mouseleave(function () {
  alert("Bye! You now leave p1!");
});

//mousedown()-> hàm được thực thi click chuột trái chuột phải vào phần tử

$("#p1").mousedown(function () {
  alert("Mouse down over p1!");
});

//mouseup()-> hàm được thực thi khi thả click vào phần tử được chọn

$("#p1").mouseup(function () {
  alert("Mouse down over p1!");
});

//hover()-> Phương thức này hover()nhận hai hàm và là sự kết hợp của các phương thức mouseenter()và mouseleave() .

$("#p1").hover(
  function () {
    alert("You entered p1!");
  },
  function () {
    alert("Bye! You now leave p1!");
  }
);

//focus()-> Hàm được thực thi khi trường biểu mẫu được lấy tiêu điểm

$("input").focus(function () {
  $(this).css("background-color", "#cccccc");
});

// blur()-> Hàm được thực thi khi trường biểu mẫu mất  tiêu điểm

$("input").focus(function () {
  $(this).css("background-color", "green");
});

//on() -> Phương on()thức đính kèm một hoặc nhiều trình xử lý sự kiện cho các phần tử đã chọn.

$("p").on("click", function () {
  $(this).hide();
});

$("p").on({
  mouseenter: function () {
    $(this).css("background-color", "lightgray");
  },
  mouseleave: function () {
    $(this).css("background-color", "lightblue");
  },
  click: function () {
    $(this).css("background-color", "yellow");
  },
});
