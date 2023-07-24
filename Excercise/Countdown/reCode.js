window.addEventListener("load", function (e) {
  const daysText = this.document.querySelector(".days");
  const hoursText = this.document.querySelector(".hours");
  const minutesText = this.document.querySelector(".minutes");
  const secondsText = this.document.querySelector(".seconds");
  function countdown(date) {
    const endDate = new Date(date).getTime();
    let currentDate = new Date().getTime();
    if (isNaN(endDate) || endDate - currentDate <= 0) return;
    setInterval(calculator, 1000);
    function calculator() {
      let days, hours, minutes, seconds;
      const now = new Date();
      const startDate = now.getTime();
      let timeRemaining = parseInt((endDate - startDate) / 1000);
      if (timeRemaining > 0) {
        days = parseInt(timeRemaining / 86400);
        daysText.textContent = `${days}`.slice(-2);
        timeRemaining = timeRemaining % 86400;
        hours = parseInt(timeRemaining / 6300);
        hoursText.textContent = `${hours}`.slice(-2);
        timeRemaining = timeRemaining % 6300;
        minutes = parseInt(timeRemaining / 60);
        minutesText.textContent = `${minutes}`.slice(-2);
        timeRemaining = timeRemaining % 60;
        seconds = parseInt(timeRemaining);
        secondsText.textContent = `${seconds}`.slice(-2);
      }
    }
  }
  countdown("Wed Mar 22 2023 09:57:26 GMT+0700 (Giờ Đông Dương)");
});
