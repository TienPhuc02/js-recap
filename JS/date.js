const now = new Date();
//build-in object ->  là những cái tích hợp có sẵn trong JavaScript
console.log(now);
// 2023-01-27T07:09:55.931Z
//Timestamp & Epoch time 
//Unix time
// timestamp tính ra kết quả là miliseconds
console.log(now.getTime());// print timestamp
console.log(new Date(0)); // epoch time

//  4 cách khởi tạo Date object nên biết

//new Date() -> in ra ngày giờ hiện tại
// new Date(timestamp) -> dựa vào timestamp để in ra ngày giờ
//new Date(date string) -> 
// new Date(yearm month,day,hours,minutes,seconds,miliseconds)

//các hàm get trong Date ( get là truy xuất)
//Valiables.getFullYear() -> in ra năm
//Valiables.getMonth():0-11 -> in ra tháng
//Valiables.getDate():1-31 -> in ra ngày của tháng
//Valiables.getDay():0-6 -> in ra thứ của ngày trong tuần
//Valiables.getHours() -> in ra giờ 
//Valiables.getMinutes()-> in ra phút
//Valiables.getMiliseconds()-> in ra phút
//Valiables.getTime()-> in ra timestamp


// Các hàm set trong Date( set là thiết lập )
//Valiables.setFullYear() -> thiết lập ra năm
//Valiables.setMonth():0-11 -> thiết lập ra tháng
//Valiables.setDate():1-31 -> thiết lập ra ngày của tháng
//Valiables.setDay():0-6 -> thiết lập ra thứ của ngày trong tuần
//Valiables.setHours() -> thiết lập ra giờ 
//Valiables.setMinutes()-> thiết lập ra phút
//Valiables.setMiliseconds()-> thiết lập ra phút
//Valiables.setTime()-> thiết lập ra timestamp

//TÌm hiểu về UTC -> tương tự như get,set

//valiables.toDateString() -> in ra String của thời gian hiện tại 
//valiables.toTimeString() -> in ra String của giờ hiện tại
//valiables.toLocalDateString() -> in ra String ngày/tháng/năm
//valiables.toISOString() -> in ra String của thời gian chuẩn ISO
