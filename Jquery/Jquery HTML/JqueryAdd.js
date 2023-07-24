/**
 append()- Chèn nội dung vào cuối phần tử được chọn
prepend()- Chèn nội dung vào đầu phần tử được chọn
after()- Chèn nội dung vào sau phần tử đã chọn
before()- Chèn nội dung vào trước phần tử được chọn
 */

$(document).ready(function () {
  $("#btn1").click(function () {
    $("p").prepend("<b>Prepended text</b>. ");
  });
  $("#btn2").click(function () {
    $("ol").prepend("<li>Prepended item</li>");
  });
});

//append
function appendText() {
  var txt1 = "<p>Text.</p>"; // Create text with HTML
  var txt2 = $("<p></p>").text("Text."); // Create text with jQuery
  var txt3 = document.createElement("p");
  txt3.innerHTML = "Text."; // Create text with DOM
  $("body").append(txt1, txt2, txt3); // Append new elements
}

/**
 Các phương thức after() và before() của jQuery
Phương thức jQuery after()chèn nội dung SAU các phần tử HTML đã chọn.
Phương thức jQuery before()chèn nội dung TRƯỚC phần tử HTML đã chọn.
 */

function afterText() {
  var txt1 = "<b>I </b>"; // Create element with HTML
  var txt2 = $("<i></i>").text("love "); // Create with jQuery
  var txt3 = document.createElement("b"); // Create with DOM
  txt3.innerHTML = "jQuery!";
  $("img").after(txt1, txt2, txt3); // Insert new elements after <img>
}
