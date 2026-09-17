//weather api key-
const API_KEY = "87a77265cefa4a8290a210656260807";

const city = document.getElementById("city");
const temp = document.getElementById("temperature");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const weatherIcon = document.getElementById("weatherIcon");

function getWeather(lat, lon) {

    fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${lat},${lon}&aqi=no`
    )
    .then(res => res.json())
    .then(data => {

        city.textContent = `📍 ${data.location.name}`;

        temp.textContent = `${Math.round(data.current.temp_c)}°C`;

        condition.textContent = data.current.condition.text;

        humidity.textContent = `${data.current.humidity}%`;

        wind.textContent = `${data.current.wind_kph} km/h`;

        weatherIcon.src = "https:" + data.current.condition.icon;

    })
    .catch(err => console.log(err));

}


//user's location for weather-
navigator.geolocation.getCurrentPosition(

(position)=>{

    getWeather(
        position.coords.latitude,
        position.coords.longitude
    );

},

(error)=>{

    console.log(error);

}

);


setInterval(updateClock, 16);  //ms

// elements wirte
const addBtn = document.getElementById("addGoalBtn");
const goalInput = document.getElementById("goalInput");
const goalList = document.getElementById("goalList");
const progress = document.getElementById("progress");


const clearCompleted =
document.getElementById("clearCompleted"); //clear completed


//no completed task-
clearCompleted.addEventListener("click",()=>{

    const completedGoals=
    goals.filter(goal=>goal.completed);

    if(completedGoals.length===0){

        alert("No completed tasks!");

        return;

    }

    goals=goals.filter(goal=>!goal.completed);

    saveGoals();

    renderGoals();

});


// Stores all goals
let goals = [];

// Current Filter
let currentFilter = "all";

//local storage save

function saveGoals() {

    localStorage.setItem(
        "goals",
        JSON.stringify(goals)
    );

}

//progress counter
function updateProgress() {

    const completed =
        goals.filter(goal => goal.completed).length;

    const total = goals.length;

    progress.innerText =
        `${completed} of ${total} Completed`;

}

//goals display
function renderGoals() {

    goalList.innerHTML = "";

    goals.forEach((goal, index) => {

        // Filter Logic

        if (currentFilter === "active" && goal.completed)
            return;

        if (currentFilter === "completed" && !goal.completed)
            return;

        const li = document.createElement("li");

        li.className = "goal";

        li.innerHTML = `
            <div class="left">

                <input
                    type="checkbox"
                    class="check"
                    ${goal.completed ? "checked" : ""}>

                <span class="${goal.completed ? "completed" : ""}">
                    ${goal.text}
                </span>

            </div>

            <span class="delete">🗑️</span>
        `;

        // Checkbox

        const checkbox =
            li.querySelector(".check");

        checkbox.addEventListener("change", () => {

            goals[index].completed =
                checkbox.checked;

            saveGoals();

            renderGoals();

        });

        // Delete

        const deleteBtn =
            li.querySelector(".delete");

        deleteBtn.addEventListener("click", () => {

            goals.splice(index, 1);

            saveGoals();

            renderGoals();

        });

        goalList.appendChild(li);

    });

    updateProgress();

}

//goal addition
function addGoal() {

    const text =
        goalInput.value.trim();

    if (text === "")
        return;

    goals.push({

        text: text,

        completed: false

    });

    saveGoals();

    renderGoals();

    goalInput.value = "";

}

//click button
// Button Click
// -----------------------

addBtn.addEventListener("click", addGoal);

//when u press enter

goalInput.addEventListener("keypress", function (e) {

    if (e.key === "Enter") {

        addGoal();

    }

});

//filter button

const filterButtons =
    document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        currentFilter =
            button.dataset.filter;

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        renderGoals();

    });

});

//loading of saved goals
const savedGoals =
    JSON.parse(localStorage.getItem("goals"));

if (savedGoals) {

    goals = savedGoals;

}

renderGoals();


//clock updation-

// hour.style.transform =
// `translateX(-50%) rotate(${hourDeg}deg)`;

// minute.style.transform =
// `translateX(-50%) rotate(${minuteDeg}deg)`;

// second.style.transform =
// `translateX(-50%) rotate(${secondDeg}deg)`;

const hourHand = document.getElementById("hour");
const minuteHand = document.getElementById("minute");
const secondHand = document.getElementById("second");

function updateClock() {

    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // Angles
    const secondDeg = seconds * 6;

    const minuteDeg = minutes * 6 + seconds * 0.1;

    const hourDeg = (hours % 12) * 30 + minutes * 0.5;

    secondHand.style.transform =
        `translateX(-50%) rotate(${secondDeg}deg)`;

    minuteHand.style.transform =
        `translateX(-50%) rotate(${minuteDeg}deg)`;

    hourHand.style.transform =
        `translateX(-50%) rotate(${hourDeg}deg)`;
}

// Run immediately
updateClock();

// Update every second
setInterval(updateClock, 1000);

//quote-

const quotes = [

{
text:"The expert in anything was once a beginner.",
author:"Helen Hayes"
},

{
text:"Dream big. Start small. Act now.",
author:"Robin Sharma"
},

{
text:"Discipline is choosing what you want most over what you want now.",
author:"Abraham Lincoln"
},

{
text:"Small progress is still progress.",
author:"Keep Going ✨"
},

{
text:"Success doesn't come from motivation. It comes from consistency.",
author:"Unknown"
},

{
text:"Focus on being productive, not busy.",
author:"Tim Ferriss"
},

{
text:"Your future self is watching you right now.",
author:"Unknown"
},

{
text:"One hour today is worth two tomorrow.",
author:"Benjamin Franklin"
},

{
text:"You don't have to be perfect. You just have to start.",
author:"Unknown"
},

{
text:"Stay patient. Stay consistent. Stay hungry.",
author:"Keep Building 🚀"
}

];

const randomQuote = quotes[Math.floor(Math.random()*quotes.length)];

document.getElementById("quoteText").textContent =
`"${randomQuote.text}"`;

document.getElementById("quoteAuthor").textContent =
`— ${randomQuote.author}`;