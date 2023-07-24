// addEventListener("click")
// const button = document.querySelector(".button");
// const span = document.querySelector(".button span");
// function handleClick() {
//   console.log("click button");
// }
// // lỗi sai khi dùng function vào eventListener
// // button.addEventListener("click", handleClick());
// button.addEventListener("click", handleClick);
// //event:e
// span.addEventListener("click", function (e) {
//   e.stopImmediatePropagation();
//   e.stopPropagation();
//   console.log("click span");
// });
// document.body.addEventListener("click", function () {
//   console.log("click body");
// });
// //-> chạy click span trước, click button sau
// // Bubbling trong click -> e.stopPropagation()
// // sự kiện click chạy từ trong ra ngoài

// span.addEventListener("click", function (e) {
//   e.stopPropagation();
//   console.log("click span 2");
// });
// Capturing trong click-> e.stopImmediatePropagation()
// chạy từ ngoài vào trong

//target vs currentTarget
const button = document.querySelector(".button");
button.addEventListener("click", function (event) {
  console.log(event.target);
  //event.target: nó sẽ chọn chính xác element mà mình click tới
  console.log(event.currentTarget);
  //event.curentTarget: nó sẽ chọn phần tử mà mình click
});

//event.preventDefault():ngăn cản một hành vi nào đó
const link = document.querySelector(".link");
link.addEventListener("click", function (event) {
  event.preventDefault(); // ngăn cản load đế google
  //truy xuất giá trị của custom attribute
  // Lấy custom attribute data-abc
  // .dataset.name
  const name = event.target.dataset.nameAbc;
  console.log(name);

  // console.log("click me");

  // //selector.style
  // //event.target.style
  // // event.target.style.property=value
  // console.log(event.target.style);
  // event.target.style.color = "red";
});
