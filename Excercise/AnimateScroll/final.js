document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".container img");
  window.addEventListener("scroll", function () {
    const windowScrollTop = window.pageYOffset;
    // console.log(windowScrollTop);
    [...images].forEach((item) => {
      //   const itemOffsetTop = item.OffsetTop;
      // console.log(itemoffsetTop);
      if (windowScrollTop > item.offsetTop - item.offsetHeight / 2) {
        item.classList.add("active");
      }
    });
  });
});
