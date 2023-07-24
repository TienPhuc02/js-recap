const button = document.querySelector(".button");
const colors = ["#ffa400", "#00aefd", "#07a787", "#ffb86c"];
button.addEventListener("click", function (event) {
  //   console.log("click me");
  //   document.body.setAttribute("style", "background-color:red");
  // document.body.style.backgroundColor="red";
  // lấy màu từ mảng:array[Math.floor(Math.random() * colors.length)];
  const color = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = color;
});
