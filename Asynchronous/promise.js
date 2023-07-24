/**
 * status:pending
 * status:suscess
 * status:reject
 */
// new Promise(function(resolve,reject){})
let buyIphone = true;
let willBuyIphone = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (buyIphone) {
      resolve("i have new Iphone");
      //   console.log("OK");
    } else {
      reject("i dont have new Iphone");
      console.log("not OK");
    }
  }, 5000);
});
// console.log("pendding");

// .then(onfullfilled,onRejected)
function makePromise(buyIphone) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (buyIphone) {
        resolve("i have new Iphone");
        // console.log("OK");
      } else {
        reject("i dont have new Iphone");
        // console.log("not OK");
      }
    }, 5000);
  });
}
let haveIphone = makePromise(true); // biến haveIphone chứa pendding của promise
haveIphone
  .then(
    (success) => console.log(success)

    //   (reason) => console.log(reason)
  )
  // onfullfilled -> i have new iphone
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Im still happy");
  });
//catch -> khi không được thì chạy vào đây
// finally -> được hay không thì đều chạy vào đây
//Exercise
// new Promise(function (resolve) {
//   setTimeout(() => {
//     resolve("1.Run the first time");
//   }, 3000);
// }).then((data) => {
//   console.log(data);
//   return new Promise(function (resolve) {
//     setTimeout(() => {
//       resolve("2.Run the second time");
//     }, 1000);
//   }).then((data) => {
//     console.log(data);
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("3.Run the third time");
//       }, 1000);
//     }).then((data) => {
//       console.log(data);
//       return new Promise((resolve) => {
//         setTimeout(() => {
//           resolve("4.Run the forth time");
//         }, 1000);
//       }).then((data) => {
//         console.log(data);
//         return new Promise((resolve) => {
//           setTimeout(() => {
//             resolve("5.Run the fifth time");
//           }, 1000);
//         }).then((data) => {
//           console.log(data);
//         });
//       });
//     });
//   });
// });

///Promise.all -> chạy tất cả cùng 1 lúc
// trả về resolve khi tất cả promise truyền vào phải resolve
// trả về rejected khi 1 trong tất cả promise truyền vào đó bị reject

function makeTimer(timer = 1000, str) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(str);
    }, timer);
  });
}

const timer1 = makeTimer(1000, "first time");
const timer2 = makeTimer(2000, "second time");
const timer3 = makeTimer(3000, "third time");
// console.log(timer1, timer2, timer3);
const timeTotal = Promise.all([timer1, timer2, timer3]).then((data) => {
  //   console.log(data);
});
//Promise.race -> trả về cái chạy nhanh nhất không qtam về resolve hay reject
const timeRace = Promise.race([timer1, timer2, timer3]).then((data) => {
  console.log(data);
});
//Promise.allSettled -> trả về cả resolve và reject
function isFullStackDev(languages) {
  return new Promise((resolve, reject) => {
    if (!languages.includes("html")) {
      reject("You are not Full Stack Dev");
    }
    setTimeout(() => {
      resolve("You are FullStack Dev");
    }, 1000);
  });
}
const dev1 = isFullStackDev(["html", "css"]);
const dev2 = isFullStackDev(["css", "js"]);
// const devAll = Promise.all([dev1, dev2]).then((data) => {
//   console.log(data);
// });
// const devRace = Promise.race([dev1, dev2]).then((data) => {
//   console.log(data);
// });
const devAllSettled = Promise.allSettled([dev1, dev2]).then((data) => {
  console.log(data);
});

//try catch
function isFullStackDev(languages) {
  return new Promise((resolve, reject) => {
    if (!languages.includes("html")) {
      throw new Error("You are not Full Stack Dev");
    }
    setTimeout(() => {
      resolve("You are FullStack Dev");
    }, 1000);
  });
}
try {
  isFrontEndDev2(["css"])
    .then((data) => console.log(data))
    .catch((error) => {
      console.log(err);
    });
} catch (error) {
  console.log("oh no");
} finally {
  console.log("demo");
}
// lỗi trong console -> bắt lỗi trong promise để làm gì đó
//catch -> dùng lỗi ngoài promise để làm gì đó
