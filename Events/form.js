//1.keydown: sự kiện xảy ra khi mình ấn 1 nút gì đó trên bàn phím
const input = document.querySelector(".input");
input.addEventListener("keydown", function (event) {
  //   console.log(event.key);
});

//2.keyup :sự kiện xảy ra khi mình ấn  giữ 1 nút gì đó trên bàn phím
input.addEventListener("keyup", function (event) {
  //   console.log(event.key);
});

//3.keypress: sự kiện xảy ra khi mình ấn 1 nút gì đó trên bàn phím giống keydown nhưng có 1 số phím mình ấn không được
input.addEventListener("keypress", function (event) {
  //   console.log(event.key);
});
//thứ tự ưu tiên:keydown-> keypress->keyup

//4.change:xảy ra khi gõ xong ,nhấn Enter hoặc nhấn ra ngoài
input.addEventListener("change", function (event) {
  //   console.log(event.key);
});

//5.focus: xảy ra khi mỗi lần mình nhấn vào input
input.addEventListener("focus", function (event) {
  //   console.log(event.key);
});

///6:blur: xảy ra khi mỗi lần mình nhấn vào input và ấn ra ngoài

input.addEventListener("blur", function (event) {
  //   console.log(event.key);
});

//7.submit trong form: lấy giá trị khi nhập vào input , input là clid của form
// const form = document.querySelector(".form");
// form.addEventListener("submit", function (e) {
//   //   e.preventDefault();
//   //   console.log(input.value);
// });

// truy xuất giá trị cơ bản
const form = document.querySelector(".form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  //   console.log(input.value);
  //this:selector mà mình đang chọn
  //this,event.target
  console.log(this.elements); // lấy các element trong form
  console.log(this.elements["username"].value); //lấy ra giá trị của submit
  const username = this.elements["username"].value;
  if (!username) {
    alert("please input username");
  }
  const gender = this.elements["male"].value;
  const hobby = this.querySelectorAll(`input=[name="hobby"]`);
  console.log(hobby);
  let hobbyvalues = [];
  [...hobby].forEach((item) => hobbyvalues.push(item.value));
  console.log(hobbyValues);
  console.log({ username, gender });
});
//Validation
