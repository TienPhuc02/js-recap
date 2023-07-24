// function ( hàm )
//khai báo function
//cú pháp (Syntax) : function functionName(parameter,parameter){
    // Your code here
//}
function sum (a,b){
    console.log(a + b);
    //return a +b;
}
//sum() : invoke function như kiểu gọi function thôi
sum (100,200)
//console.log(sum(100,200))
//function hoisting -> function tự hiểu là khai báo trước in ra sau
// Lưu function vào 1 biến để gọi sau này

//Anonymous function(function expression)
//Function declaration ->function được khai báo -> không bị hoisting-> khai báo đúng thứ tự
// IIFE -> immediately invoke function execution
// (function(){
//     console.log("this is IIFE function");
// })(); // -> đoạn code này tự chạy luôn


// Scope -> phạm vi biến đó có thể truy cập được
//Global scope , function scope 
let myName = "Phuc" // global scope -> log ở đâu cũng được
function logYourName(){
    let myName2 ="Tien" // function scope -> hoạt động trong phạm vi trong function
}
console.log(myName);

// Block scope
//nếu khai báo trong dấu {} -> chỉ hoạt động trong {}
//var -> là 1 global scope,hoisting

//Lexical scope -> log cả function thay vì log mỗi biến thôi
//closure -> nhiều function lồng vào nhau
//inner function có thể truy xuất tới, lấy state của parent function để dùng để log
// bthg thì sau khi chạy xong 1 function thì biến block scope không sử dụng lại được nữa, nhưng với closure thì vẫn được dùng tiếp sau khi log function

//ex1: viết function so sánh 2 số a,b tìm ra số lớn hơn
function soSanh(a,b){
    return Math.max(a,b)
}
console.log(soSanh(10,110))


// Arrow function: Anonymus function
// ECMAScript:
//Normal function:
const square = function(x) {
    return x *x 
}
square(5)

//arrow function
// const valiable = (input) =>{
//     return  output
// }
// valiable(input)
