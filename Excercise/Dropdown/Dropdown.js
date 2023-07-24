const dropdown = document.querySelector(".dropdown");
const dropdownSelect = document.querySelector(".dropdown__select");
const dropdownSelected = document.querySelector(".dropdown__selected");
const dropdownCaret = document.querySelector(".dropdown__caret");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownItems = document.querySelectorAll(".dropdown__item");

dropdownSelect.addEventListener("click", function (event) {
  //   console.log(event.target);
  dropdownList.classList.toggle("show");
  dropdownCaret.classList.toggle("fa-caret-up");
});
dropdownItems.forEach((item) => {
  item.addEventListener("click", function (event) {
    const text = event.target.querySelector(".dropdown__text").textContent;
    dropdownSelected.textContent = text;
    dropdownList.classList.remove("show");
  });
});

document.addEventListener("click", function (event) {
  if (!dropdown.contains(event.target)) {
    dropdownList.classList.remove("show");
    dropdownCaret.classList.remove("fa-caret-up");
  }
});
