const btnDescrease = document.querySelector(".counter-descrease");
const btnIncrease = document.querySelector(".counter-increase");
const counterNumber = document.querySelector(".counter-number");
let number = parseInt(counterNumber.textContent);
btnIncrease.addEventListener("click", function (e) {
  if (number >= 10) {
    return 10;
  }
  number++;
  counterNumber.textContent = number;
});
btnDescrease.addEventListener("click", function (e) {
  if (number <= 0) {
    return 0;
  }
  number--;
  counterNumber.textContent = number;
});
