document.addEventListener("DOMContentLoaded", function (e) {
  const images = document.querySelectorAll(".container img");
  window.addEventListener("scroll", function (e) {
    const windowScrollTop = window.pageYOffset;
    [...images].forEach((item) => {
      if (windowScrollTop > item.offsetTop - item.offsetHeight / 2) {
        item.classList.add("active");
      }
    });
  });
});
