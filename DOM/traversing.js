//1. parentNode,parentElement,removeChild
//parentNode vs parentElement
const span = document.querySelector(".span");
console.log(span.parentNode.parentNode); // phần tử cha gần nhất
console.log(span.parentElement);

//2. selector.parentNode or selector.parentElement.removeChild(selector) -> xoa chinh ban than
span.parentNode.removeChild(span); // remove the element itself

// span.remove();

//3.nextElementSibling: find next element vs previousElementSibling: find previos element

const nextSpan = span.nextElementSibling;
console.log(nextSpan); // phần tử tiếp theo( dòng code tiếp theo)
const preSpan = span.previousElementSibling;
console.log(preSpan); // back the element(upper node)

//4.childNodes:trả về 1 NodeList, children-> trả về HTMLCollection

//5.firstChild vs firstElementChild
console.log(span.firstChild); // trả về phần tử đầu tiên trong childNodes
console.log(span.firstElementChild); // trả về element trong childNodes

//5. lastChild vs lastElementChild

console.llog(span.lastChild);
console.log(span.lastElementChild);

///6. nextSibing vs previousSibling
// có cả text(khoảng trống xuống dòng), và element -> Sibling
console.log(span.nextElementSibling);
console.log(span.previousElementSibling);
