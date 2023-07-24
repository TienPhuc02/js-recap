//DOM là gì ?
//Document Object Model
// DOM  attribute : src, href,type,..
// DOM  node: thẻ html, title, script,...
// 2.Selecting nodes:

//2.1:document.querySelector("selecter",'selector',`selector`) -> sẽ trả về 1 node nếu nó tồn tại selector đó , ngược lại nó sẽ trả về null
//

const singleNode = document.querySelector("h1");
const singleNode2 = document.querySelector(".container");
const singleNode3 = document.querySelector("#spiner");
// console.log(singleNode);
// console.log(singleNode2);
console.log(singleNode3);

// 2.2 document.querySelectorAll("selector") -> trả về một NodeList chứa danh sách các node , nếu không có trả về empty
// nó có thể loop(for, for off) và  sử dụng ForEach, không thể sử dụng các phưuong thức của mảng
const multiNodes = document.querySelectorAll(".item"); // trả về hết các node có class=item
console.log(multiNodes);
//2.4 document.getElementsByClassName("className") -> trả về một HTMLCollection
// chứa danh sách  các node, nếu không có thì trả về empty []
const classNodes = document.getElementsByClassName("header");
console.log(classNodes); // -> không có sẽ trả về HTMLCollection[empty]

//2.3 document.getElementsBytagName("tagName") -> trả về một HTMLCollection
// chứa danh sách các node , nếu không có thì trả về empty []
const tagNodes = document.getElementsByTagName("h1");
console.log(tagNodes);

//2.5 document.getElementById("id")-> trả về 1 node nếu không có thì là null
// const idNode = document.getElementById("spiner");
const idNode = document.querySelector("#spiner");
console.log(idNode);
// Hay dùng nhất document.querySelector(tag,class,id);
// document.querySelectorAll(tag,class,id)
