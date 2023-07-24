//block scope
//Các biến được khai báo bên trong khối { } không thể được truy cập từ bên ngoài khối:
{
  let x = 2;
}
// x can NOT be used here

//local scope
//các biến được khai báo trong function thì được trở thành local cho function
// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName
// chỉ được truy cập bên trong function

//function scope
//phạm vi sử dụng bên trong function
function myFunction() {
  var carName = "Volvo"; // Function Scope
}
function myFunction() {
  let carName = "Volvo"; // Function Scope
}
function myFunction() {
  const carName = "Volvo"; // Function Scope
}

//global scope
//một biến được khai báo bên ngoài 1 hàm, trở thành global variable
let carName = "Volvo";
// code here can use carName

function myFunction() {
  // code here can also use carName
}
var x = 2; // Global scope
let x = 2; // Global scope
const x = 2; // Global scope

//Automatically Global(tự động toàn cầu)
// Nếu bạn gán giá trị cho một biến chưa được khai báo, nó sẽ tự động trở thành biến TOÀN CẦU .
myFunction();

// code here can use carName

function myFunction() {
  carName = "Volvo";
}
