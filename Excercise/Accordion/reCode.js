const accordionHeader = document.querySelectorAll(".accordion-header");
[...accordionHeader].forEach((item) => {
  item.addEventListener("click", handleClickAccordion);
});
const activeStr = "is-active";
function handleClickAccordion(e) {
  const content = e.target.nextElementSibling;
  content.style.height = `${content.scrollHeight}px`;
  content.classList.toggle(activeStr);
  if (!content.classList.contains("is-active")) {
    content.style.height = `0px`;
  }
  const icon = e.target.querySelector(".icon");
  icon.classList.toggle("fa-angle-down");
  icon.classList.toggle("fa-angle-up");
}
