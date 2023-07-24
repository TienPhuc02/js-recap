//[]:empty array
// index: vị trí của phần tử (giá trị ) trong mảng và nó bắt đầu từ 0 
//length: độ dài của mảng nó đếm từ 1
// các phương thức trong mảng
//valiables.length -> chiều dài mảng
//valiables.reverse() -> đảo ngược lại giá trị trong mảng
//valiables.join() -> nối các phần tử trong mảng thành chuỗi, thêm dấu phẩy giữa các giá trị
// arr = ["tuan","nam"] khi dùng arr.join("") thì sẽ có kết quả là "tuannam"
//valiables.includes() ->  kiểm tra phần tử có nằm trong mảng hay không
//valiables.indexOf() ->  trả về vị trí của phần tử trong mảng thấy đầu tiên
//valiables.LastIndexOf() ->  trả về vị trí của phần tử trong mảng thấy cuối cùng
//valiables.push() ->  thêm phần tử vào cuối mảng
//valiables.Unshift() ->  thêm phần tử vào đầu mảng
//valiables.pop() ->  xóa phần tử cuối cùng
//valiables.shift() ->  xóa phần tử vào đầu tiên trong mảng

//Tìm hiểu phương thức slice()
// Tạo ra một mảng copy của mảng ban đầu
//slice():tạo ra mảng mới y hệt mảng ban đầu
//slice(start) start -> vị trí bắt đầu trong mảng
//slice(start,end) start -> vị trí bắt đầu trong mảng, end là vị trí kết thúc -> sao chép từ vị trí start đến vị trí end -1
//slice(-number) -> lấy từ cuối về đầu


//Tìm hiểu phương thức splice()
// Xóa phần tử trong mảng hoặc thay thế phần tử trong mảng
//splice(start) start là vị trí bắt đầu
//splice(start,deleteCount) deleteCount là số lượng phần tử muốn xóa hoặc thay thế 
//splice(start,deleteCount,item1 ,item2 ,itemN) item1,item2,itemN là các phần tử thay thế

// Tìm hiểu phương thức sort()
// sắp xếp các phần tử trong mảng theo chuẩn unicode-16
//function(callback)
//sort(function(a,b))
// a-b=1 -> lớn dần , a-b=-1 -> nhỏ dần
//ternary operator : condition? something:something else


//Tìm hiểu phương thức find()
// nó sẽ trả về phần tử tìm thấy đầu tiên trong mảng thỏa mãn 1 điều kiện nào đó
// valiables.find((element,index) => element >10 )
// nếu không có thì là undefined

//Tìm hiểu phương thức findIndex()
// nó sẽ trả về vị trí tìm thấy đầu tiên trong mảng thỏa mãn 1 điều kiện nào đó


//Tìm hiểu phương thức map()
// duyệt qua từng phần tử trong mảng và trả ra một mảng mới mà không thay đổi mang ban đầu

// Tìm hiểu phương thúc forEach() -> khác với map(): không có return, không trả ra mảng mới, chạy mãi thường dùng trong DOM
// duyệt qua từng phần tử trong mảng


// Tìm hiểu phương thức filter()
// DÙng để sàng lọc các phần tử trong mảng thỏa mãi điều kiện nào đó ( return condition)


// Tìm hiểu phwuong thức some và every
// array.some -> trả về true khi thỏa mãn 1 điều kiện và ngược lại trả về false khi không thỏa điều kiện nào cả
//array.every -> trả về true khi thỏa mãn tất cả các điều kiện và ngược lại chỉ cần 1 cái false trả về false luôn


//Tìm hiểu phương thức reduce()
// gom các phần tử trong mảng lại thành 1
// .reduce((a,b)=>{},initialize value(giá trị khởi tạo))
//toLowerCase()
// .chartAt()
// .toUpperCase()

//By value và By referrence 
//By value -> giá trị thực sự được lưu trong vùng bộ nhớ
const num1 = 1 ;
const num2 =1;
console.log(num1===num2);// true
//By referrences -> nói tới vùng bộ nhớ
const arr1=[1,2];
const arr2=[1,2];
console.log(arr1===arr2);// flase

//Cách so sánh 2 mảng cơ bản -> chuyển mảng về string rồi so sánh 2 string
// lưu mảng vào database ngta thường chuyern qua kiểu dữ liệu JSON
// kiểu dữ liệu JSON: Javascript Object Notation
/**
 * 
 *{
    "key":Value,
    "key":value
 }
 */
// JSON.stringify(value) -> convert giá trị sang dưới sang JSON string
// JSON.stringify([1,2,3]) -> "[1,2,3]"
// JSON.parse() -> in mảng từ data base ra 
// JSON.parse("[1,2,3]") -> [1,2,3]



//Cách để sao chép mảng cần biết
//1. sử dụng phương thức slice()
//2.spread operator [...array]

//cách để gộp mảng cần biết
//1.concat
//array1.concat(array2,array3,arrayN);
//2.spread operator
//[...array1,...array2,...array3]

//Destruring là gì ?
//const [x,y,z] = valiavles
//console.log(x,y,z) -> in ra các phần từ theo từ trái sang phải theo ô trống của destruring

// rest parameter: sytax ...rest -> in ra các phần tử còn lại khi khai báo destruring
//const [x,y,z,...rest]=valiables
//console.log(x,y,z)
//console.log(rest)
//function demo(a,..rest){
    // console.log(a,rest);
//}
//demo(1,2,3,4,5,6,7)











