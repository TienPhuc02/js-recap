// thêm xoá sửa node trong Javascript
// 1. Tạo ra Element trong javascript
// document.createElement("tag")
const div = document.createElement("div");
//2.selector.ppendChild
// document.body -> thẻ body
//document.querySelector("body")
const body = document.body;
body.appendChild("div"); // tag <div></div> sẽ hiện ở trong tag <body></body>

//3. documentcreateTextNode("abc")-> tạo text
const text = document.createTextNode("Hi I am Phuc");
const h1 = document.createElement("h1");
h1.appendChild(text);
body.appendChild(h1); // sẽ in ra màn hình là Hi I am Phuc

//4. element.cloneNode(true,false) -> clone number cái node
const h1Clone = h1.cloneNode(true); //true là copy hết, false là copy tag thôi
body.appendChild(h1Clone);

//5.element.hasChildNodes -> kiểm tra có phần tử con hay không , có true, không thì false
console.log(document.querySelector("h3").hasChildNodes);
