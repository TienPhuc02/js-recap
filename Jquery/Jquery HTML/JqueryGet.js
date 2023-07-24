/**
 text()- Đặt hoặc trả về nội dung văn bản của các thành phần được chọn
html()- Đặt hoặc trả về nội dung của các phần tử đã chọn (bao gồm cả đánh dấu HTML)
val()- Đặt hoặc trả về giá trị trong input
 */

$("#btn1").click(function () {
  alert("Text: " + $("#test").text());
});
$("#btn2").click(function () {
  alert("HTML: " + $("#test").html());
});

$("#btn1").click(function () {
  alert("Value: " + $("#test").val());
});
