// Elements
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem('tasks')) ?? [];

function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function renderTasks(){

    taskList.innerText = "";

    const done = tasks.filter(task=>task.completed);
    const undone = tasks.filter(task=>!task.completed);
    const orderedTasks  = [...undone, ...done];

    for (const task of orderedTasks){
        const li = document.createElement("li");
        const input = document.createElement("input");
        const span = document.createElement("span");
        const button = document.createElement("button");
        li.className = "task";
        input.className = "task__checkbox";
        span.className = "task__text";
        button.className = "task__delete";
        input.type = "checkbox";
        input.checked = task.completed;
        span.textContent = task.text;
        button.type = "button";
        button.ariaLabel = "Delete task";
        li.dataset.id = task.id;

        li.append(input, span, button);

        if(task.completed){
            li.classList.add("is-completed");
        }

        taskList.append(li);    
    } 
    saveTasks()
}


function addTask(description){
    const trimmed = description.trim();
    if(trimmed.length === 0) return;
    const taskObject = {id : Date.now(), text : trimmed, completed : false};
    tasks.push(taskObject);
    renderTasks();
}

function toggleTask(id){
    const found = tasks.find(task => task.id === Number(id));
    found.completed = !found.completed;
    renderTasks();
}

function deleteTask(id){
    tasks = tasks.filter(task => task.id !== Number(id));
    renderTasks();
}


taskForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    addTask(taskInput.value);
    taskInput.value = "";
})

taskList.addEventListener("click", (event)=>{
    const closest = event.target.closest(".task");
    if (closest === null) return;
    const gotId = closest.dataset.id;
    if(event.target.classList.contains("task__delete")){
        deleteTask(gotId)
    };
    if(event.target.classList.contains("task__checkbox")){
        toggleTask(gotId)
    };
})



renderTasks();
