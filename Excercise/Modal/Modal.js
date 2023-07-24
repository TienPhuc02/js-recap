const button = document.querySelector(".button");
const template = `<div class="modal">
<div class="modal-content">
  <i class="fa fa-times modal-close"></i>
</div>
</div>`;
button.addEventListener("click", function () {
  document.body.insertAdjacentHTML("beforeend", template);
});

// const modalClose = document.querySelector(".modal-close");
// modalClose.addEventListener("click", handleCloseModal);
// function handleCloseModal(event) {
//   console.log(event.target);
// }
// event voiws body vì body có sẵn khi chạy DOM thì ko bị null
document.body.addEventListener("click", function (event) {
  // console.log(event.target);
  if (event.target.matches(".modal-close")) {
    //handle close modal here
    const modal = event.target.parentNode.parentNode; //modal
    modal.parentNode.removeChild(modal);
  } else if (event.target.matches(".modal")) {
    event.target.parentNode.removeChild(event.target);
  }
});
