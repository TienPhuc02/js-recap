//CHỌN PHẦN TỬ
// Bạn có thể chọn tất cả <p>các yếu tố trên một trang như thế này:
$("p");
//Khi người dùng nhấp vào nút, tất cả <p>các phần tử sẽ bị ẩn:
$(document).ready(function () {
  $(".button").click(function () {
    $("p").hide();
  });
});

//CHỌN ID
$("test");
//Khi người dùng nhấp vào nút, tất cả các phần tử có id là test sẽ bị ẩn:
$(document).ready(function () {
  $(".button").click(function () {
    $("#test").hide();
  });
});

//CHỌN CLASS

$(".test");
//Khi người dùng nhấp vào nút, tất cả các phần tử có class là test sẽ bị ẩn:
$(document).ready(function () {
  $(".button").click(function () {
    $(".test").hide();
  });
});

//other:

// chọn tất cả các phần tử
$("*");

// chọn đến phần tử HTML hiện tại
$(this);

//chọn tất cả các phần tử p với class là intro

$("p.intro");

//chọn phần tử p đầu tiên

$("p:first");

//chọn phần tử li đầu tiên của phần từ ul đầu tiên

$("ul li:first");

// chọn phần tử li đầu tiên của tất cả các phần tử ul

$("ul li:first-child");

//chọn tất cả các phần tử có attribute là href

$("[href]");

//chọn tất cả các phần tử a có attribute là target với giá trị là _blank

$("a[target='_bank']");

//chọn tất cả các phần tử a có attribute là target với giá trị không phải là _blank

$("a[target!='_bank']");

//chọn tất cả các phần tử buttons và phần tử input có type="button"

$(":button");

//chọn tất cả các phần tử tr chẵn

$("tr:even");

//chọn tất cả các phần tử tr lẻ

$("tr:odd");
