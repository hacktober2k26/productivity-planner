// ===============================
// POMODORO TIMER
// ===============================

const display = document.getElementById("timerDisplay");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

// 25 minutes
let totalSeconds = 25 * 60;

let timer = null;

let running = false;

// ----------------------------
// Display Time
// ----------------------------

function updateDisplay() {

    const minutes = Math.floor(totalSeconds / 60);

    const seconds = totalSeconds % 60;

    display.innerText =
        `${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;

}

// ----------------------------
// Start Timer
// ----------------------------

function startTimer(){

    if(running) return;

    running = true;


    startBtn.disabled = true;

    pauseBtn.disabled = false;

    timer = setInterval(()=>{

        if(totalSeconds > 0){

            totalSeconds--;

            updateDisplay();

        }

        else{

            clearInterval(timer);

            running = false;

            alert("🎉 Pomodoro Complete!");

    let sessions =
    Number(localStorage.getItem("focusSessions")) || 0;

    sessions++;

localStorage.setItem(

"focusSessions",

sessions

);

        }

    },1000);

}

// ----------------------------
// Pause Timer
// ----------------------------

function pauseTimer(){

    clearInterval(timer);

    running = false;
    startBtn.disabled = false;

}

// ----------------------------
// Reset Timer
// ----------------------------

function resetTimer(){

    clearInterval(timer);

    running = false;

    startBtn.disabled = false;

    totalSeconds = 25 * 60;

    updateDisplay();

}

// ----------------------------
// Buttons
// ----------------------------

startBtn.addEventListener("click", startTimer);

pauseBtn.addEventListener("click", pauseTimer);

resetBtn.addEventListener("click", resetTimer);

// Initial Display

updateDisplay();