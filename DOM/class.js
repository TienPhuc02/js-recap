// 1.1 selector.classList.add("abc"); -> thêm 1 class nào đó
const container = document.querySelector(".container");
container.classList.add("is-active"); // add class=is-active vào node có class là container

//1.2 selector.classList.remove("abc");// xoá 1 class nào đó
container.classList.remove("is-active");

//1.3 selector.classList.contains("abc");// kiểm tra node có chứa class nào đó không
console.log(container.classList.contains("container")); // false
console.log(container.contains("is-active")); //false
console.log(!container.contains("is-active")); //true

//1.4 selector.classList.toggle("abc");-> nếu có class đó có rồi thì remove đi , còn chưa có thì add vào
if (container.classList.contains("is-active")) {
  container.classList.remove("is-active");
} else {
  container.classList.add("is-active");
}
container.classList.toggle("is-active");

//selector.className -> trả ra chuỗi các class của selector
const title = document.querySelector("title");
console.log(title.className);
title.className = "title";

// toggle menu đơn giản với toggle class ->transform:translate(100%)-> transform:translate(0) và classList.toggle("is-show")
