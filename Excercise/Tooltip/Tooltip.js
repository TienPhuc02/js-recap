window.addEventListener("load", function () {
  const text = document.querySelector(".text");
  text.addEventListener("mouseenter", function (event) {
    const title = event.target.dataset.tooltip;
    // console.log(title);
    const tooltipDiv = document.createElement("div");
    tooltipDiv.className = "tooltip-text";
    tooltipDiv.textContent = title;
    document.body.appendChild(tooltipDiv);
    const cords = event.target.getBoundingClientRect();
    // console.log(cords);
    const { top, left, width, height } = cords;
    const tooltipHeight = tooltipDiv.offsetHeight;
    const tooltipWidth = tooltipDiv.offsetWidth;
    const triangleHeight = 20;
    tooltipDiv.style.left = `${left - width / 2}px`;
    tooltipDiv.style.top = `${top - tooltipHeight - triangleHeight}px`;
  });
  text.addEventListener("mouseleave", function () {
    const tooltip = document.querySelector(".tooltip-text");
    if (!tooltip) return;
    tooltip.parentNode.removeChild(tooltip);
  });
});
