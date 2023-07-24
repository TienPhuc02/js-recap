// 1. sự khác nhau giữa i++ và ++i
//2. lưu ý khi return function
function total(x, y) {
  reuturn;
  x + y;
}
// undefined
//3. cách chuyển đổi dữ liệu
const str = "123"; // chuyển sang number
console.log(parseInt(str));
console.log(parseFloat(str));
console.log(Number(str));
console.log(+str);
console.log(!!str); // chuyển sang boolean -> true

//4.arguments trong function
// arguments như mảng như không phải mảng
function number(a, b, c) {
  console.log(typeof arguments); //object
  const args = Array.from(arguments);
  const args2 = [...arguments];
  console.log(arguments); //Argument
  console.log(args2); //[]
  // console.log(arguments[0]);
}
number(1, 2, 3);

//5.closure in loop

// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

//let -> not hoisting
//let -> scope của nó sẽ thay đổi sau mỗi vòng lặp
// kết quả là 4 lần ra bằng 5
//var-> hoisting
//scope của var sau mỗi vòng lặp thì nó không thay đổi

//6. Sự khác nhau giữa local Storage và sesionStorage
// localStorage -> mở tab hay tắt vẫn còn
//sessionStorage chỉ còn khi vẫn mở tab còn đóng tab hoặc tắt trình duyệt đi thì hết

// 7. những trường hợp không nên dùng arrow function
//7.1 Event handlers
const input = document.querySelector(".input");
input.addEventListener("keyup", () => {
  console.log(this.value);
}); //undefined

//7.2 Object
const student = {
  counter: 0,
  increment: () => {
    return ++this.counter;
  },
};
console.log(student.increment());
//NaN
// nói chung là khi dùng arrow function thì không dùng this
