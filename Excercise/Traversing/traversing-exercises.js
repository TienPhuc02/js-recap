// cach 1: co HTML roi

// const modal = document.querySelector(".modal");
// console.log(modal);
// if (modal) {
//   setTimeout(function () {
//     modal.classList.add("is-show");
//   }, 3000);
// }

//cach2: dung JS de tao HTML

//  <div class="modal">
// <div class="modal-content">
// <i class="fa fa-times modal-close"></i>
// <div class="modal-desc">text</div>
// <div class="modal-action">
//   <button class="modal-confirm">confirm</button>
//   <button class="modal-cancel">Cancel</button>
// </div>
// </div>
// </div>

// const template = `
// <div class="modal">
//  <div class="modal-content">
//  <i class="fa fa-times modal-close"></i>
//  <div class="modal-desc">text</div>
//  <div class="modal-action">
//    <button class="modal-confirm">confirm</button>
//    <button class="modal-cancel">Cancel</button>
//  </div>
//  </div>
//  </div>`;

// const body = document.body;
// body.insertAdjacentHTML("afterbegin", template);

// const modal = document.querySelector(".modal");
// console.log(modal);
// if (modal) {
//   setTimeout(function () {
//     modal.classList.add("is-show");
//   }, 3000);
// }

//cach 3: tao tu A-Z
const modal = document.createElement("div");
modal.classList.add("modal");
const modalContent = document.createElement("div");
modalContent.classList.add("modal-content");
modal.appendChild(modalContent);
const modalClose = document.createElement("i");
modalClose.className = "fa fa-times modal-close";
modalContent.appendChild(modalClose);
const modalDesc = document.createElement("div");
modalDesc.classList.add("modal-desc");
modalDesc.textContent = "text";
modalContent.appendChild(modalDesc);
const modalAction = document.createElement("div");
modalAction.classList.add("modal-action");
modalContent.appendChild(modalAction);
const modalConfirm = document.createElement("button");
modalConfirm.classList.add("modal-confirm");
modalConfirm.textContent = "confirm";
modalAction.appendChild(modalConfirm);
const modalCancel = document.createElement("button");
modalCancel.classList.add("modal-cancel");
modalCancel.textContent = "cancel";
modalAction.appendChild(modalCancel);
document.body.appendChild(modal);

// const modal = document.querySelector(".modal");
// console.log(modal);
if (modal) {
  setTimeout(function () {
    modal.classList.add("is-show");
  }, 3000);
}
