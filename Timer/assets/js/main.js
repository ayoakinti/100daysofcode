let timer;
let sec = 0;
let min = 0;
let hour = 0;

function timerStart() {
  sec++;
  if (sec == 60) {
    min++;
    sec = 0;
  }
  if (min == 60) {
    hour++;
    min = 0;
  }

  displayTime();
}

function displayTime() {
  let timerdisplay = document.getElementById("timer");

  let sec2 = sec;
  let min2 = min;
  let hour2 = hour;
  if (sec < 10) {
    sec2 = "0" + sec;
  }
  if (min < 10) {
    min2 = "0" + min;
  }
  if (hour < 10) {
    hour2 = "0" + hour;
  }

  timerdisplay.innerHTML = `${hour2}: ${min2}: ${sec2}`;
}

let start_btn = document.getElementById("start");
let pause_btn = document.getElementById("pause");
let reset_btn = document.getElementById("reset");

start_btn.addEventListener("click", () => {
  timer = setInterval(timerStart, 1000);
});
pause_btn.addEventListener("click", () => {
  timer = clearInterval(timer);
});
reset_btn.addEventListener("click", () => {
  timer = clearInterval(timer);
  sec = 0;
  min = 0;
  hour = 0;
  displayTime();
});
