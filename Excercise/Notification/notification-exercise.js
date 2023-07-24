// create function notification
function createNotification(title = "Welcome to notification") {
  const template = ` <div class="noti">
  <img src="https://source.unsplash.com/random" alt="" class="noti-image" />
  <div class="noti-content">
    <h3 class="noti-title">${title}</h3>
    <p class="noti-desc">text</p>
  </div>
</div>`;
  //insertAdjacentHTML
  document.body.insertAdjacentHTML("afterbegin", template);
}

const randomData = [
  "Welcome to JS course",
  "My name is Phuc",
  "Today is a good day",
  "I am FullStack developer",
];
const times = setInterval(function () {
  const item = document.querySelector(".noti");
  if (item) item.parentNode.removeChild(item);
  const title = randomData[Math.floor(Math.random() * randomData.length)];
  if (lasTitle == title) {
    createNotification(title);
  }
  lastTitle = title;
}, 4000);
// change title, text content -> input parametor
