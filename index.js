let timerMins = document.getElementById('setTimerMins')
let startButton = document.getElementById('startButton')
let stopButton = document.getElementById('stopButton')
let resetButton = document.getElementById('resetButton')
let showTimer = document.getElementById('showTimer')
let countdownSeconds = document.getElementById('countdownSeconds')
let times = document.getElementById('times')
let recordMins = document.getElementById('recordMins')
let totalMins = document.getElementById('totalMins')
let audio = document.getElementById('audio')

let timerID;
let timerMinToSec = 900;
let m = 0;
let s = 0; 
let count = 0;

function countDown() {
  if (timerMinToSec === 0 ) {
    count ++;
    times.innerHTML = count + "   *";
    stop()
    playaudio();
    timerMinToSec = 900
    recordMins.innerHTML = timerMinToSec/60 + " mins"
    totalMins.innerHTML = "Total " + 15 * count + " mins"
  }
  m = parseInt(timerMinToSec / 60)
  s = timerMinToSec % 60
  showTimer.innerHTML = ("0" + m).slice(-2) +"：" + ("0" + s).slice(-2);

  timerMinToSec --;
}

function start() {
  timerID = setInterval(countDown,1000);
}

function stop () {
  stopaudio();
  clearInterval(timerID);
  timerID = null;
}

function reset() {
  timerMinToSec = 900;
  m = parseInt(timerMinToSec / 60);
  s = timerMinToSec % 60;
  showTimer.innerHTML = ("0" + m).slice(-2) +"：" + ("0" + s).slice(-2);
}

function playaudio(){
  // audio.load();
  audio.play();
}

function stopaudio(){
  audio.pause();
}

startButton.addEventListener('click', start)
stopButton.addEventListener('click', stop)
resetButton.addEventListener('click', reset)
