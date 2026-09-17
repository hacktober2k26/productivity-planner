// =============================
// PROFILE
// =============================

// STREAKS
const streakData =
JSON.parse(localStorage.getItem("streakData")) || {

current:0,

best:0

};

document.getElementById("currentStreak").innerText =
streakData.current;

document.getElementById("bestStreak").innerText =
streakData.best;


// TASKS

const tasks =
JSON.parse(localStorage.getItem("tasks")) || [];

const completed =
tasks.filter(task=>task.completed).length;

document.getElementById("tasksDone").innerText =
completed;


// POMODORO

const sessions =
localStorage.getItem("focusSessions") || 0;

document.getElementById("focusSessions").innerText =
sessions;


// PLANNER

const planner =
JSON.parse(localStorage.getItem("planner")) || {};

document.getElementById("plannerEntries").innerText =
Object.keys(planner).length;


// PRODUCTIVITY

const productivity = Math.min(

100,

completed*5 +

Number(sessions)*10 +

streakData.current*5

);

document.getElementById("progressBar").style.width =
productivity + "%";