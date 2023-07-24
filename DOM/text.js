//1.1 textContent -> lấy nội dung ở giữa tag
const spinner = document.querySelector("#spinner"); // trỏ đến node đó trước đã
// Thay đổi text content
spinner.textContent = "hello new content";
console.log(spinner.textContent);

//1.2 innerText như textContent loại bỏ khoảng trắng và không xuống dòng, và áp dụng với attribute value
//1.3 innerHTML ->
spinner.innerHTML = `<div class="demo"> hello html </div>`;
console.log(spinner.innerHTML); // in ra hello html
// parse
