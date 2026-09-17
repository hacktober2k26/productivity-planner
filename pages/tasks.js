const taskInput=document.getElementById("taskInput");
const addTaskBtn=document.getElementById("addTaskBtn");
const taskList=document.getElementById("taskList");
const progress=document.getElementById("progress");
const search=document.getElementById("searchTask");

const priority=document.getElementById("priority");
const category=document.getElementById("category");
const dueDate=document.getElementById("dueDate");

const clearCompleted=document.getElementById("clearCompleted");

const filterButtons=document.querySelectorAll(".filter");

let currentFilter="all";

let tasks=JSON.parse(localStorage.getItem("tasks"))||[];



function saveTasks(){

    localStorage.setItem("tasks",JSON.stringify(tasks));

}



function updateProgress(){

    const completed=tasks.filter(task=>task.completed).length;

    progress.innerText=`${completed} of ${tasks.length} Completed`;

}



function renderTasks(){

    taskList.innerHTML="";

    const keyword=search.value.toLowerCase();

    tasks.forEach((task,index)=>{

        if(currentFilter==="active" && task.completed) return;

        if(currentFilter==="completed" && !task.completed) return;

        if(!task.text.toLowerCase().includes(keyword)) return;

        const li=document.createElement("li");

        li.className="task";

        li.innerHTML=`

        <div class="left">

        <input type="checkbox"

        ${task.completed?"checked":""}>

        <div class="task-info">

        <span class="${task.completed?"completed":""}">

        ${task.text}

        </span>

        <span class="priority ${task.priority.toLowerCase()}">

        ${task.priority}

        </span>

        <span class="category">

        📂 ${task.category}

        </span>

        <span class="date">

        📅 ${task.date || "No Date"}

        </span>

        </div>

        </div>

        <span class="delete">🗑️</span>

        `;

        const checkbox=li.querySelector("input");

        checkbox.addEventListener("change",()=>{

            tasks[index].completed=checkbox.checked;

            saveTasks();

            renderTasks();

        });

        li.querySelector(".delete").addEventListener("click",()=>{

            tasks.splice(index,1);

            saveTasks();

            renderTasks();

        });

        taskList.appendChild(li);

    });

    updateProgress();

}



function addTask(){

    const text=taskInput.value.trim();

    if(text==="") return;

    tasks.push({

        text:text,

        priority:priority.value,

        category:category.value,

        date:dueDate.value,

        completed:false

    });

    saveTasks();

    renderTasks();

    taskInput.value="";

    dueDate.value="";

}



addTaskBtn.addEventListener("click",addTask);

taskInput.addEventListener("keypress",e=>{

    if(e.key==="Enter") addTask();

});

search.addEventListener("input",renderTasks);



filterButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        filterButtons.forEach(btn=>btn.classList.remove("active"));

        button.classList.add("active");

        currentFilter=button.dataset.filter;

        renderTasks();

    });

});



clearCompleted.addEventListener("click",()=>{

    tasks=tasks.filter(task=>!task.completed);

    saveTasks();

    renderTasks();

});



renderTasks();