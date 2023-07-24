//Regular expression:Biểu thức chính quy
//1.2 cách khai báo với Regex
const re1 = /hello/;
const re2 = new RegExp("hello");
// hello word
//method regex.test(value)-> true or false
// console.log(re1.test("hello word"));

//2.Anchor ^ $
// ^  string bắt đầu với từ nào đó
// $ string kết thức với từ nào đó
// const re3=/hi/;
// /hi/.test("hi")// true
// /hi$/.test("welcome to hi");// true
// /hi$/.test("hi welcome to hi")// true
// /^hi/.test("hi welcome to hi"); //true
// /^hi/.test("welcome to hi"); // false

//3.Ranges []

//[a-z]: các kí từ từ a-z in thường
//[A-Z]: các kí tự từ A đến Z in HOA
//[0-9]: các số từ 0-9
//[a-z0-9A-Z]: các số từ 0-9 hoặc từ a-z hoặc từ A-Z
// /[a-z]/.test("aasdasd")// true
// /[a-z]/.test("A")//flase
// /[A-Z]/.test("A")//true
// /[A-Z]/.test("Z")//true
// /[A-Z]/.test("x")//false
// /[0-9]/.test("10000")//true
// /[0-9]/.test("abc123123xyz")//true
// /[^a-z]/.test("a");//false luúc này dấu ^ là phủ định

//4.Meta characters

// \d. Khớp với số nó sẽ tương đương với [0-9]

// /\d/.test("12345"); /// true

// \D: ngược lại với \d tương đương với [^0-9]

// /\D/.test("123");// flase

// \w: khớp với các kí tự và dấu gạch dưới và số , nó sẽ tương đương với [a-zA-Z0-9_]

// /\w/.test("_"); // true

// /\W/: ngược lại với \w nó sẽ tương đương với [^a-zZ-A0-9_]

// /\W/.test("_")//false

// /\s/: khớp với các kí tự khoảng trắng : space, tabs,newline

// /\s/.test(" ");//true

// /\S/: khớp với các kí tự không phải khoảng trắng

//  /\S/.test(" ");// false

// /\n/: khớp với newline ( xuống hàng)

// /\t/: khớp với lại tab character

// .: khớp với tất cả mọi thử ngoại từ newline(\n)

//[^] : khớp với tất cả mọi thứ bao gôm newline(\n)

//5.Quantifiers : {n} {n,m} + ? *

//{number}: số lượng nhất định
//{number1,number2}: số lượng trong khoảng từ n đến m
// +: lấy 1 hoặc nhiều kí tự thoả điều kiện

//string,match(regex) "abc".match(/\w/) -> []
const str1 = "Welcome to 2021232323123123123";
console.log(str1.match(/\d\d\d\d/)[0]);
console.log(str1.match(/\d{4}/)[0]);
console.log(str1.match(/\d{4,6}/)[0]);
console.log(str1.match(/\d+/)[0]);
const str2 = "color or colour?";
// ? : có thể có hoặc không có kí tự nào đó
console.log(str2.match(/colou?r/g)); // ["color","colour"]

// flag

//g: global
//i:case insesitive
//m: multipe lines
// *: không có hoặc là nhiều

const str3 = "12345";
console.log(str3.match(/\d*/g)); //["12345",""]
console.log(str3.match(/\d+/g)); //null
console.log(str3.match(/\d?/g)); //["1","2","3","4","5",""]

//6.groups ()
/(\d{3})(\w+)/.test("123"); //false
/(\d{3})?(\w+)/.test("123"); //true

//7. Escaping \ / [ ] ( ) { } ? + * | . ^ $
//8. Boundaries  \b \B
/\?/.test("?"); //Escaping để biến regex thành 1 kí tự như bthg
/\*/.test("*");

// \b in ra phần tử đứng độc lập

"my name is phuc".match(/\bphuc/g); // ["phuc"]

//  \B: in ra phần tử dính vào 1 từ nào đó
"my name isphuc".match(/\Bphuc/g);
//["phuc"]

// 9.

const str4 = "hello welcome hello to my hello";
console.log(str4.replace("hello", "hi"));
// string.replace(regex,value);
str4.replace(/hello/g, "phuc");
"welcome 1234567".match(/\d+/g);
