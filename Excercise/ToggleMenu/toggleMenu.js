const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
menuToggle.addEventListener("click", handleClickMenuToggle);
function handleClickMenuToggle() {
  menu.classList.toggle("is-show");
  menuToggle.classList.toggle("fa-bars");
  menuToggle.classList.toggle("fa-times");
}

// selector.contains(event.target) -> check xem selector có chứa trong cái chỗ mình click event target không
// event.target.matches(class)-> check xem phần mình click có phải là 1 cái gì đó không
function handleClickOut(event) {
  if (!menu.contains(event.target) && !event.target.matches(".menu-toggle")) {
    menu.classList.remove("is-show");
    menuToggle.classList.remove("fa-times");
    menuToggle.classList.add("fa-bars");
  }
}
document.addEventListener("click", handleClickOut);
