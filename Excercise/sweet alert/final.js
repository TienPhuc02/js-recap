window.addEventListener("load", function () {
  function renderSweetAlert() {
    const template = `
  <div class="sweet-alert">
  <i class="fa fa-check sweet-icon"></i>
  <p class="sweet-text">Congratulations on learning JS</p>
  </div>
    `;
    document.body.insertAdjacentHTML("afterbegin", template);
  }
  const button = document.querySelector(".button");
  button.addEventListener("click", handleClickButton);
  function handleClickButton(e) {
    renderSweetAlert();
    const sweetItem = document.querySelector(".sweet-alert");
    if (sweetItem) {
      setTimeout(function () {
        sweetItem.parentNode.removeChild(sweetItem);
      }, 2000);
    }
  }
});
