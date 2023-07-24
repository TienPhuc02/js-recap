$("#btn1").click(function () {
  $("#test1").text("Hello world!");
});
$("#btn2").click(function () {
  $("#test2").html("<b>Hello world!</b>");
});
$("#btn3").click(function () {
  $("#test3").val("Dolly Duck");
});

$("#btn1").click(function () {
  $("#test1").text(function (i, origText) {
    return (
      "Old text: " + origText + " New text: Hello world!(index: " + i + ")"
    );
  });
});

$("#btn2").click(function () {
  $("#test2").html(function (i, origText) {
    return (
      "Old html: " +
      origText +
      " New html: Hello <b>world!</b>(index: " +
      i +
      ")"
    );
  });
});

// Set Attribute -> attr()
$(selector).attr("attribute", "value");
$("button").click(function () {
  $("#w3s").attr("href", "https://www.w3schools.com/jquery/");
});
/**
 Phương pháp này attr()cũng cho phép bạn đặt nhiều thuộc tính cùng một lúc.
 */

$("button").click(function () {
  $("#w3s").attr({
    href: "https://www.w3schools.com/jquery/",
    title: "W3Schools jQuery Tutorial",
  });
});

//callback

$("button").click(function () {
  $("#w3s").attr("href", function (i, origValue) {
    return origValue + "/jquery/";
  });
});
