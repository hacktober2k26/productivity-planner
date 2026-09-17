// =========================
// STREAK TRACKER
// =========================

let streakData = JSON.parse(localStorage.getItem("streakData")) || {

    current: 0,

    best: 0,

    lastCompleted: ""

};

const current = document.getElementById("currentStreak");
const best = document.getElementById("bestStreak");
const button = document.getElementById("completeDay");

function save(){

    localStorage.setItem(

        "streakData",

        JSON.stringify(streakData)

    );

}

function updateUI(){

    current.innerText = streakData.current;

    best.innerText = streakData.best;

}

button.addEventListener("click",()=>{

    const today = new Date().toDateString();

    // Prevent double-clicking the same day
    if(streakData.lastCompleted === today){

        alert("✅ You've already completed today!");

        return;

    }

    streakData.current++;

    if(streakData.current > streakData.best){

        streakData.best = streakData.current;

    }

    streakData.lastCompleted = today;

    save();

    updateUI();

});

updateUI();