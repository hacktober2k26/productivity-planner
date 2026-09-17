// ==============================
// DAILY PLANNER
// ==============================

// Container where planner will be displayed
const plannerContainer = document.getElementById("plannerContainer");

// Time Slots
const hours = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM"
];

// Load saved planner
let plannerData =
JSON.parse(localStorage.getItem("planner")) || {};

// Save planner
function savePlanner(){

    localStorage.setItem(
        "planner",
        JSON.stringify(plannerData)
    );

}

// Render Planner
function renderPlanner(){

    plannerContainer.innerHTML = "";

    const currentHour = new Date().getHours();

    hours.forEach((hour,index)=>{

        const row = document.createElement("div");
        row.className = "time-slot";

        //8pm to am
    const actualHour = index + 8;

if(actualHour === currentHour){

    row.classList.add("current-hour");

}
else if(actualHour < currentHour){

    row.classList.add("past-hour");

}
else{

    row.classList.add("future-hour");

}

        // Time Label
        const label = document.createElement("div");

        label.className = "time";

        label.innerText = hour;

        // Input
        const input = document.createElement("input");

        input.type = "text";

        input.placeholder = "Write your plan...";

        input.value = plannerData[hour] || "";

        input.addEventListener("input",()=>{

            plannerData[hour] = input.value;

            savePlanner();

        });

        row.appendChild(label);

        row.appendChild(input);

        plannerContainer.appendChild(row);

    });

}

// Initial Render
renderPlanner();