/*
click vào element nào đó thì có thêm class active
*/
const tabItems = document.querySelectorAll(".tab-item");
const tabContents = document.querySelectorAll(".tab-content");
[...tabItems].forEach((item) => item.addEventListener("click", handleTabClick));
function handleTabClick(event) {
  //   console.log(event.target);
  //remove active ở element hiện tại rồi mới add active vào element target
  [...tabItems].forEach((item) => item.classList.remove("active"));
  event.target.classList.add("active");
  // vấn đề:Làm thế nào để khi active tab thì nội dung tab đó cũng active
  // đặt property cho element là data-tab=1,...
  const tabNumber = event.target.dataset.tab;
  //   console.log(tabNumber); 1,2,3
  [...tabContents].forEach((item) => {
    item.classList.remove("active");
    // vấn đề : xáo trộn data-tab thì bị bug-> check data-tab khi mình click với data tab content có khớp nhau không
    // lấy ra giá trị attribute
    if (item.getAttribute("data-tab") === tabNumber) {
      item.classList.add("active");
    }
  });
  [...tabContents][tabNumber - 1].classList.add("active");
}
