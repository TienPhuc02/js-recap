// window.addEventListener("input", function () {
//   console.log("load");
// });
// const p = document.querySelector("p");
// console.log(p);
//blocking page -> bị block bởi script trước khi load DOM

//properties của script: defer -> cứ load DOM trước không quan tâm script load trước hay load sau nhanh hay chậm
//defer-> none blocking page,load full khi DOM load xong ,
//properties của script async -> cũng là none blocking page load độc lập không phụ thuộc vào ai  hết

//removeEventLister
// function handleMouseMove(e) {
//   console.log(e.clientX);
// }
const button = document.querySelector(".button");
// button.addEventListener("mousemove", handleMouseMove);
// button.addEventListener("click", function () {
//   document.removeEventListener("mousemove", handleMouseMove);
// });

// sự khác nhau giữa onclick và addEventListener
function handleClick() {
  console.log("clicked");
}
button.onclick = handleClick;
button.addEventListener("click", handleClick);

//onclick chỉ chấp nhận 1 event handler
//addEventListener chấp nhận nhiều eventhandler
// muốn click chỉ chạy 1 lần once:true
