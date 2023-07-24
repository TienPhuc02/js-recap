$(selector).hide(speed, callback);

$("button").click(function () {
  $("p").hide("slow", function () {
    alert("The paragraph is now hidden");
  });
});
