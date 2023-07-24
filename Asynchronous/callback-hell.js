// Callbakck hell
//là tình huống trong đó bạn có một loạt các cuộc gọi lại lồng nhau khiến mã khó đọc và khó bảo trì.
//Điều này có thể xảy ra khi xử lý các thao tác không đồng bộ trong JavaScript,
//nơi bạn cần đợi kết quả trước khi tiếp tục thao tác tiếp theo.
setTimeout(() => {
  console.log("run the first time");
  setTimeout(() => {
    console.log("run the second time");
    setTimeout(() => {
      console.log("run the third time");
      setTimeout(() => {
        console.log("run the fouth time");
      }, 1000);
    }, 1000);
  }, 1000);
}, 3000);

//callbacks hell
