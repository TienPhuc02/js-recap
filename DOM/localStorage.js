//1.localStorage.setItem("key","value")
localStorage.setItem("name", "phuc");
// key:name -> Value:evondev
//2.localStorage.getItem("key")
//3.localStorage.removeItem("key")
localStorage.remove("name");
//4.localStorage.clear()
const arr = [1, 2, 3, 4, 5];
localStorage.setItem("list", JSON.stringify(arr));
const newArr = JSON.parse(localStorage.getItem("list"));
console.log(newArr);
