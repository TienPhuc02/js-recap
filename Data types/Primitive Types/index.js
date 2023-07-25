// no error
let message = "hello";
message = 123456;
//JavaScript, được gọi là "kiểu động"(dynamically typed), nghĩa là tồn tại các kiểu dữ liệu, nhưng các biến không bị ràng buộc với bất kỳ kiểu dữ liệu nào.

//Number:
//đại diện cho cả số nguyên và số dấu phẩy động
//Infinityđại diện cho Vô cực toán học ∞. Đó là một giá trị đặc biệt lớn hơn bất kỳ số nào.
alert(1 / 0); // Infinity
alert(Infinity); // Infinity

//NaN đại diện cho một lỗi tính toán. Ví dụ, đó là kết quả của một phép toán không chính xác hoặc không xác định:
alert(NaN + 1); // NaN
alert(3 * NaN); // NaN
alert("not a number" / 2 - 1); // NaN

//string
// Dấu ngoặc kép: "Hello".
// Dấu nháy đơn: 'Hello'.
// Đánh dấu ngược: `Hello`
let name = "John";
//backticks
// embed a variable
alert(`Hello, ${name}!`); // Hello, John!

// embed an expression
alert(`the result is ${1 + 2}`); // the result is 3

//boolean
//Kiểu boolean chỉ có hai giá trị: true và false.
let nameFieldChecked = true;
//tự so sánh
let isGreater = 4 > 1;
alert(isGreater); // true

//undefined

//Nếu một biến được khai báo, nhưng không được gán, thì giá trị của nó là undefined:
let age;

alert(age); // shows "undefined"

//-> có thể gán undefined cho 1 biến
let age1 = 100;
// change the value to undefined
age = undefined;

alert(age); // "undefined"
// người ta sử dụng nullđể gán giá trị “trống” hoặc “không xác định” cho một biến
