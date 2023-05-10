// Stopwatch logic
let hr = 0;
let min = 0;
let sec = 0;
let msec = 0;
let timer;
let timerRunning = false;

function startTimer() {
  if (timerRunning) {
    return;
  }
  timerRunning = true;
  timer = setInterval(runStopwatch, 10);
}

function runStopwatch() {
  msec++;
  if (msec == 100) {
    sec++;
    msec = 0;
  }
  if (sec == 60) {
    min++;
    sec = 0;
  }
  if (min == 60) {
    hr++;
    min = 0;
  }

  let displayHr = hr < 10 ? `0${hr}` : `${hr}`;
  let displayMin = min < 10 ? `0${min}` : `${min}`;
  let displaySec = sec < 10 ? `0${sec}` : `${sec}`;
  let displayMsec = msec < 10 ? `0${msec}` : `${msec}`;

  document.getElementById("hours").textContent = displayHr;
  document.getElementById("minutes").textContent = displayMin;
  document.getElementById("seconds").textContent = displaySec;
  document.getElementById("milliseconds").textContent = displayMsec;
}

function stopTimer() {
  clearInterval(timer);
  timerRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  timerRunning = false;
  hr = 0;
  min = 0;
  sec = 0;
  msec = 0;
  document.getElementById("hours").textContent = "00";
  document.getElementById("minutes").textContent = "00";
  document.getElementById("seconds").textContent = "00";
  document.getElementById("milliseconds").textContent = "00";
}

// Button event listeners
document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
