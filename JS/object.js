// Object là đối tượng tập hợp key và value
// object literal
const objectLiteral = {};
// object constructor
const objectConstructor = new Object();
const student = {
  name: "phuc",
  "last-name": "tien",
  //name là keys, "phuc" value
  hi: function () {
    console.log("hello phuc"); // function trong object là method
  },
};
// keys = properties

// 2 cách truy xuất giá trị của object
//2.1 Dot notation
console.log(student.name);
//2.2 Bracket notation ["key"]
console.log(student["last-name"]);
console.log(student["name"]);
//Thay đối giá trị của Object
student.name = "guma";
student.male = "male";
student["is-developer"] = false;
student.isDeveloper = true;
student.hello = function () {
  console.log("hello");
};
//Cách xóa giá trị trong object
delete student["last-name"];
console.log(student);

//for in
// duyệt qua object để lấy keys và value
for (let keys in student) {
  if (keys === "name") {
    console.log("hello name");
  }
  console.log(keys); // gọi ra keys trong loop for in
  // console.log(student[keys]);// gọi ra value trong loop for in
  const value = student[keys];
  console.log(`${keys}:${value}`);
}

//Object.keys(object) -> trả về 1 mảng chứa tất cả các keys của object đó

const keys = Object.keys(student);
console.log(keys);

//Object.values(object) -> trả về 1 mảng chứa tất các giá trị của object
const values = Object.values(student);
console.log(values);

//Object.entries(object) -> trả về 1 mảng nested(trong mảng có mảng) gồm có keys và values
const entries = Object.entries(student);
console.log(entries);

//Object.assign(object) -> sao chép dữ liệu object này sang object khác
const a = {
  fistName: "do",
};
const b = {
  lastName: "phuc",
};
const c = Object.assign(a, b);
console.log(c); // gộp 2 object với nhau
const d = { ...a, ...b };
console.log(d); // gộp 2 object với nhau

//Object.freeze(object) -> ngăn chặn chỉnh sửa key và value của object
const car = {
  brand: "BMW",
};
const newCar = Object.freeze(car);
newCar.brand = "Audi"; // vẫn là "BMW"

//Object.seal(object)-> cho phép chỉnh sửa key và value nhưng không được thêm key value mới

//Cách sao chép 1 object
// {...object}

// Cách sao chép 1 object phức tạp
//Object.assign
// Object.assign({},object)
// const newUser = Object.assign({}, user);
//clone nested object
//JSON.parse(JSON.stringify(user))

// Từ khóa this trong object
// this nó sẽ đề cập tới object gần nhất
const student2 = {
  name: "phuc",
  age: 20,
  male: true,
  "last-name": "tien",
  hi: function () {
    // console.log(this); // function trong object là method
    console.log(`My name is ${this.name} and i am ${this.age} years old`);
  },
  fullname: {
    name: "Do Tien Phuc",
  },
};
student2.hi();

//optional chaining -> check key khi chưa chắc nó đã tồn tại
console.log(student2.name);
// console.log(student.fullname); không có -> undefined
if (student2.fullname) {
  if (student2.fullname.name) {
    console.log(student2.fullname.name);
  }
}
//student2?.fullname?.name?.abc

//Destructuring object

// const name = student2.name;
// const age = student2.age;
// const male = student2.male;
//NORMAL FUNCTION
// const {name,age,male,....rest}=student2;
// console.log(name,age,male,...rest);

// function WhatYourInfo(name, age, school) {
//   console.log(name, age, school);
// }
// WhatYourInfo("Phuc", 20,"BKHN")
// function with object parameter
function WhatYourInfor(obj) {
  console.log(obj.name, obj, age, obj, school);
}
const newObj = {
  name: "phuc",
  age: 20,
  school: "BKHN",
};
WhatYourInfor(newObj);

//object destructuring parameter
function WhatYourInfo2({ name, age, school }) {
  console.log(name, age, school);
}
WhatYourInfo2({
  shool: "BKHN",
  age: 20,
  name: "Phuc",
}); // dù đảo lộn vị trí trong object thì log ra vẫn đúng thứ tự đầu vào
