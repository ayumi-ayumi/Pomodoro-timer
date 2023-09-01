let timerMins = document.getElementById('setTimerMins')

let startButton = document.getElementById('startButton')
let stopButton = document.getElementById('stopButton')
let resetButton = document.getElementById('resetButton')
let showTimer = document.getElementById('showTimer')
let countdownSeconds = document.getElementById('countdownSeconds')
let recordMins = document.getElementById('recordMins')

// let timeLeft;
// let startedTime = Date.now()

// function abc () {
//   countDown();
//   console.log(timerMins.value)
//   console.log(timerMinsToMilli)
//   showTimer.innerHTML = timerMins.value
// }

let timerID;
// let timerMinsToMilli = timerMins.value

// console.log(timerMinsToMilli)

// function abc (timerMinsToMilli) {
//   timerMinsToMilli = timerMinsToMilli - 1000
//   console.log(timerMinsToMilli)


// }
let timerMinsToMilli = 2
let m = 0;
let s = 0; 
let count = 0;

function start() {
  timerID = setInterval(countDown,1000);
}

function countDown() {
  if (timerMinsToMilli === 0 ) {
    count ++;
    recordMins.innerHTML = count;
    reset()
  }
  timerMinsToMilli --;
  m = parseInt(timerMinsToMilli / 60)
  s = timerMinsToMilli % 60
  showTimer.innerHTML = ("0" + m).slice(-2) +"：" + ("0" + s).slice(-2);
}
 
// function countdown () {
//   if(!nintervalID) {
//     nintervalID = setInterval(() => {
//     //  let timerMinsToMilli = timerMins.value * 60
//     //  timerMinsToMilli --;
//     //  let m = parseInt(timerMinsToMilli / 60)
//     //  let s = timerMinsToMilli % 60

//     //  let currentTime = Date.now()
//     //  let diff = currentTime-startedTime
//     //  let timeLeftMilli = timerMinsToMilli - diff
//     //  let timeLeftMins = new Date(timeLeftMilli)
//     //  let min = timeLeftMins.getMinutes()
//     //  let sec = timeLeftMins.getSeconds()
   
//     //  min = ("0" + min).slice(-2);
//     //  sec = ("0" + sec).slice(-2);
   
//     //  showTimer.innerHTML = m + ":" + s;
//     //  abc(timerMinsToMilli)
//     //  console.log(min + ":" + sec)
//     //  console.log(timerMinsToMilli)

//    }, 1000);

//   }
// }
startButton.addEventListener('click', start)

function stop () {
  clearInterval(timerID);
  timerID = null;

}

stopButton.addEventListener('click', stop)

function reset() {
  timerMinsToMilli = 2;
  m = parseInt(timerMinsToMilli / 60);
  s = timerMinsToMilli % 60;
  showTimer.innerHTML = ("0" + m).slice(-2) +"：" + ("0" + s).slice(-2);
}
resetButton.addEventListener('click', reset)
// let timerMins = document.getElementById('setTimerMins')

// let startButton = document.getElementById('startButton')
// let stopButton = document.getElementById('stopButton')
// let showTimer = document.getElementById('showTimer')
// let countdownSeconds = document.getElementById('countdownSeconds')

// let timeLeft;

// let startedTime = Date.now()

// // function abc () {
// //   countDown();
// //   console.log(timerMins.value)
// //   console.log(timerMinsToMilli)
// //   showTimer.innerHTML = timerMins.value
// // }

// startButton.addEventListener('click', countdown)
// let nintervalID;
// let timerMinsToMilli = timerMins.value

// console.log(timerMinsToMilli)

// function abc (timerMinsToMilli) {
//   timerMinsToMilli = timerMinsToMilli - 1000
//   console.log(timerMinsToMilli)


// }
 
// function countdown () {
//   if(!nintervalID) {
//     nintervalID = setInterval(() => {
//      let timerMinsToMilli = timerMins.value * 60000
//      let currentTime = Date.now()
//      let diff = currentTime-startedTime
//      let timeLeftMilli = timerMinsToMilli - diff
//      let timeLeftMins = new Date(timeLeftMilli)
//      let min = timeLeftMins.getMinutes()
//      let sec = timeLeftMins.getSeconds()
   
//      min = ("0" + min).slice(-2);
//      sec = ("0" + sec).slice(-2);
   
//      showTimer.innerHTML = min + ":" + sec;
//     //  abc(timerMinsToMilli)
//     //  console.log(min + ":" + sec)
//     //  console.log(timerMinsToMilli)

//    }, 1000);

//   }
// }

// function stop () {
//   clearInterval(nintervalID);
//   // 変数から intervalID を解放
//   nintervalID = null;

// }

// stopButton.addEventListener('click', stop)
