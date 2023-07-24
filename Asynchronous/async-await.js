function wait(timer = 0) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, timer);
  });
}
//function expression
async function run() {
  console.log("starting");
  await wait(1000);
  console.log("running");
  await wait(2000);
  console.log("ending");
}
run();
// await  chỉ được sử dụng trong function
//arrow function

const fn = async () => {
  const student = {
    fullname: async function () {},
    async calsAge() {},
    yearly: async () => {},
  };
};
