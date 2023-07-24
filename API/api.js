//API
//Application Programing Interface
//fetch -> fetch data từ API -> trả về 1 cái promise
//JSON.parse(data) -> parse sang object
const endpoint = "https://api-ecom.duthanhduoc.com";
const promise = fetch(endpoint);
console.log(promise);
promise
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
