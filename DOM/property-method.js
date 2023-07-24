//1.1 selector.getAttribute("attribute") -> lấy ra giá trị của attribute selector
//selector : 1 cái
//attribute -> thuộc tính:href,id, class,src,style,
const link = document.querySelector(".link");
console.log(link.getAttribute("href")); // lấy ra node có className là link và có attribute là href
const li = document.querySelectorAll(".item");
li.forEach((item) => {
  console.log(item.getAttribute("class"));
}); // -> lấy ra 1 danh sách li có class là attribute

//1.2 selector.setAttribute("attribute",value) -> set giá trị cho attribute nào đó của selector nào đó
// khi không có quyền sửa vào HTML
// const link1 = document.querySelector(".link");
link.setAttribute("target", "_blank"); // tạo ra một attribute là target và có value target là _blank -> target=_blank
const listLinks = document.querySelectorAll("a.link");
listLinks.forEach((item) => {
  console.log(item.setAttribute("target", "_blank"));
});

//1.3 selector.removeAttribute("attribute") -> xoá attribute của selector
const p = document.getElementById("spinner");
p.removeAttribute("style"); // -> remove attribute style trong node có id là spinner

//1.4 selector.hasAttribute("attribute")-> kiểm tra selector có attributes nào đó hay không , nếu có -> true,không có -> false

console.log(p.hasAttribute("class")); // không có nên là false
console.log(p.hasAttribute("id")); // có nên là true
if (p.hasAttribute("id")) {
  //do something here
}
