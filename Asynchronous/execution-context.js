//global excution context
//function excution context
//call stack

function foo() {
  console.log("foo");
}

function bar() {
  foo();
  console.log("bar");
}

function baz() {
  bar();
}

baz();

/*
Trong ví dụ này, việc gọi baz hàm sẽ tạo một khung mới ở đầu ngăn xếp cuộc gọi. 
Khung này đại diện cho ngữ cảnh thực thi của baz hàm.

Khi bazhàm gọi barhàm, một khung mới được thêm vào đầu ngăn xếp cuộc gọi để biểu thị ngữ cảnh thực thi của bar hàm. 
Tương tự, khi bar hàm gọi foo hàm, một khung mới được thêm vào đầu ngăn xếp để biểu thị ngữ cảnh thực thi của foo hàm.

Khi foo chức năng hoàn tất quá trình thực thi, khung của nó sẽ bị xóa khỏi đầu ngăn xếp cuộc gọi và quá trình thực thi tiếp tục với bar khung của chức năng. Khi bar chức năng hoàn tất quá trình thực thi, khung của nó sẽ bị xóa khỏi đầu ngăn xếp cuộc gọi và quá trình thực thi tiếp tục với bazkhung của chức năng.
Cuối cùng, khi baz chức năng hoàn thành việc thực thi, khung của nó sẽ bị xóa khỏi đầu ngăn xếp cuộc gọi và chương trình hoàn tất.



*/

// event looop
console.log("start");

setTimeout(function () {
  console.log("timeout callback");
}, 1000);

console.log("end");
// start-> end-> timeout callback
//Vòng lặp sự kiện đảm bảo rằng thời gian chạy JavaScript có thể xử lý
//các hoạt động không đồng bộ theo cách không chặn mà không phải đợi chúng hoàn thành trước khi thực thi mã khác.
