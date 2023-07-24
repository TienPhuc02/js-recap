const emailInput = document.querySelector(".input");
emailInput.addEventListener("input", function (e) {
  const value = e.target.value;
  //   console.log(value);
  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (regexEmail.test(value.trim())) {
    console.log("valid email");
    e.target.classList.add("valid");
    e.target.classList.remove("invalid");
  } else {
    console.log("invalid email");
    e.target.classList.add("invalid");
    e.target.classList.remove("valid");
  }
  if (!value) {
    e.target.classList.remove("invalid");
  }
});
