//các cách để viết số
let billion = 1000000000;
//Chúng ta cũng có thể sử dụng dấu gạch dưới _làm dấu phân cách, làm cho dễ đọc hơn thôi:
let billion1 = 1_000_000_000;
//Trong JavaScript, chúng ta có thể rút ngắn một số bằng cách thêm chữ cái "e"vào nó và chỉ định số lượng số 0:
let billion2 = 1e9; // 1 billion, literally: 1 and 9 zeroes
alert(7.3e9); // 7.3 billions (same as 7300000000 or 7_300_000_000)
let mсs = 0.000001;
let mcs = 1e-6;
//một số âm sau "e"có nghĩa là phép chia cho 1 với số lượng 0 đã cho:
// -3 divides by 1 with 3 zeroes
1e-3 === 1 / 1000; // 0.001
// -6 divides by 1 with 6 zeroes
1.23e-6 === 1.23 / 1000000; // 0.00000123
// an example with a bigger number
1234e-2 === 1234 / 100; // 12.34, decimal point moves 2 times

//làm tròn
Math.floor;
// Làm tròn xuống: 3.1trở thành 3và -1.1trở thành -2.
Math.ceil;
// Làm tròn: 3.1trở thành 4và -1.1trở thành -1.
Math.round;
// Làm tròn đến số nguyên gần nhất: 3.1trở thành 3, 3.6trở thành 4, chữ thường ở giữa: cũng 3.5làm tròn lên 4.
// có 2 cách làm tròn thông dụng
//cách 1: nhân và chia
let num = 1.23456;
alert(Math.round(num * 100) / 100); // 1.23456 -> 123.456 -> 123 -> 1.23
//cách 2:Phương thức toFixed(n) làm tròn số thành ncác chữ số sau dấu chấm và trả về một chuỗi biểu diễn kết quả.
let num1 = 12.34;
alert(num.toFixed(1)); // "12.3"
let num2 = 12.36;
alert(num.toFixed(1)); // "12.4"
//Điều này làm tròn lên hoặc xuống đến giá trị gần nhất, tương tự như Math.round, kết quả của toFixedlà một chuỗi. Nếu phần thập phân ngắn hơn yêu cầu, các số 0 sẽ được thêm vào cuối:
let num3 = 12.34;
alert(num.toFixed(5)); // "12.34000",

//tính toán không chính xác
alert(1e500); // Infinity
alert(0.1 + 0.2 == 0.3); // false
alert(0.1 + 0.2); // 0.30000000000000004
let sum = 0.1 + 0.2;
alert(+sum.toFixed(2)); // 0.3

//kiểm tra:isNaN
alert(isNaN(NaN)); // true
alert(isNaN("str")); // true

//isFinite(value)chuyển đổi đối số của nó thành một số và trả về true nếu đó là số thông thường, không phải NaN/Infinity/-Infinity:
let num4 = +prompt("Enter a number", "");

//Number.isNaN(value)trả về truenếu đối số thuộc numberloại và nó là NaN. Trong mọi trường hợp khác, nó trả về false.
//Number.isFinite(value)trả về truenếu đối số thuộc về numberloại và nó không phải là NaN/Infinity/-Infinity. Trong mọi trường hợp khác, nó trả về false.
// will be true unless you enter Infinity, -Infinity or not a number
alert(isFinite(num));
alert(Number.isNaN(NaN)); // true
alert(Number.isNaN("str" / 2)); // true

// Note the difference:
alert(Number.isNaN("str")); // false, because "str" belongs to the string type, not the number type
alert(isNaN("str"));

// parseInt và parseFloat
alert(parseInt("100px")); // 100
alert(parseFloat("12.5em")); // 12.5

alert(parseInt("12.3")); // 12, only the integer part is returned
alert(parseFloat("12.3.4")); // 12.3, the second point stops the reading

//Có những tình huống khi parseInt/parseFloatsẽ trở lại NaN. Nó xảy ra khi không có chữ số nào có thể đọc được:

alert(parseInt("a123")); // NaN

//các hàm toán học khác

//Math.random()
alert(Math.random()); // 0.1234567894322
alert(Math.random()); // 0.5435252343232
alert(Math.random()); // ... (any random numbers)

//Math.max(a, b, c...)VàMath.min(a, b, c...)
alert(Math.max(3, 5, -10, 0, 1)); // 5
alert(Math.min(1, 2)); // 1

//Math.pow(n, power)
alert(Math.pow(2, 10)); // 2 in power 10 = 1024

// fix 6.35
alert((6.35 * 10).toFixed(20)); // 63.50000000000000000000

alert(Math.round(6.35 * 10) / 10); // 6.35 -> 63.5 -> 64(rounded) -> 6.4
