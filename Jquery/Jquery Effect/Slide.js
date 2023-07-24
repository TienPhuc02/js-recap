//slideDown() ->Phương thức jQuery slideDown()được sử dụng để trượt xuống một phần tử.

$(selector).slideDown(speed, callback);

$("#flip").click(function () {
  $("#panel").slideDown();
});

//slideUp()->Phương thức jQuery slideUp()được sử dụng để trượt lên một phần tử.

$(selector).slideUp(speed, callback);

$("#flip").click(function () {
  $("#panel").slideUp();
});

//slideToggle()->
/**
 Phương thức jQuery slideToggle()chuyển đổi giữa các phương thức slideDown()và slideUp() .

Nếu các yếu tố đã được trượt xuống, slideToggle()sẽ trượt chúng lên.

Nếu các yếu tố đã được trượt lên, slideToggle()sẽ trượt chúng xuống.
 */

$(selector).slideToggle(speed, callback);
$("#flip").click(function () {
  $("#panel").slideToggle();
});
