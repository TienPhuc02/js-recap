// object literal
let user = {
  // an object
  name: "John", // by key "name" store value "John"
  age: 30, // by key "age" store value 30
};
//Các giá trị thuộc tính có thể truy cập được bằng cách sử dụng ký hiệu dấu chấm:
// get property values of the object:
alert(user.name); // John
alert(user.age); // 30
// thêm giá trị
user.isAdmin = true;
//Để loại bỏ một thuộc tính, chúng ta có thể sử dụng deletetoán tử:
delete user.age;

let user = {
  name: "John",
  age: 30,
  "likes birds": true, // tên thuộc tính nhiều từ phải được ""
};

//dấu ngoặc vuông
//Đối với các thuộc tính nhiều từ, quyền truy cập dấu chấm không hoạt động:
// this would give a syntax error
// user.likes birds = true //error

let user = {};

// set
user["likes birds"] = true;

// get
alert(user["likes birds"]); // true

// delete
delete user["likes birds"];

let key = "likes birds";

// same as user["likes birds"] = true;
user[key] = true;

//error
let user = {
  name: "John",
  age: 30,
};

let key1 = "name";
alert(user.key); // undefined

//thuộc tính tính toán

let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert(bag.apple); // 5 if fruit="apple"

let fruit1 = prompt("Which fruit to buy?", "apple");
let bag1 = {};

// take property name from the fruit variable
bag[fruit] = 5;

let fruit2 = "apple";
let bag = {
  [fruit + "Computers"]: 5, // bag.appleComputers = 5
};

//viết tắt
function makeUser(name, age) {
  return {
    name, // same as name: name
    age, // same as age: age
    // ...
  };
}

// giới hạn tên thuộc tính
//Nói tóm lại, không có giới hạn về tên tài sản. Chúng có thể là bất kỳ chuỗi hoặc ký hiệu nào (một loại đặc biệt dành cho số nhận dạng, sẽ được đề cập sau).

let obj = {
  0: "test", // same as "0": "test"
};

// both alerts access the same property (the number 0 is converted to string "0")
alert(obj["0"]); // test
alert(obj[0]); // test (same property)

//Kiểm tra sự tồn tại của thuộc tính, toán tử “in”

//syntax

"key" in object;

let user = { name: "John", age: 30 };

alert("age" in user); // true, user.age exists
alert("blabla" in user); // false, user.blabla doesn't exist

let user = { age: 30 };

let key3 = "age";
console.log(key3 in user); // true, property "age" exists

let obj1 = {
  test: undefined,
};

alert(obj1.test); // it's undefined, so - no such property?

alert("test" in obj1); // true, the property does exist!

//vòng lặp for in
//Để duyệt qua tất cả các khóa của một đối tượng, tồn tại một dạng vòng lặp đặc biệt: for..in
//syntax

for (key in object) {
  // executes the body for each key among object properties
}
let user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for (let key in user) {
  // keys
  alert(key); // name, age, isAdmin
  // values for the keys
  alert(user[key]); // John, 30, true
}
