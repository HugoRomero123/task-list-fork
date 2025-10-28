let taskInput = document.getElementById("taskInput");
const taskContainer = document.getElementById("taskContainer");

const addButton = document.getElementById("addButton");
const taskDiv = document.getElementsByClassName("task");

let completeButton = document.getElementById("completeButton");
let removeButton = document.getElementById("removeButton");
let taskText = document.getElementById("taskText");
let task = document.getElementById("task");

var taskCounter = 0;

/*
<div class="task">
    <p id="taskText">Example 1</p>
    <button class="completeButton">Complete</button>
    <button class="removeButton">Remove</button>
</div>
*/

function completeButtonFunction() {
    sTaskText.style.textDecorationLine = "line-through";
}

function removeButtonFunction() {
}

function createTask() {
    taskCounter ++;

    var valueInput = taskInput.value;
    let valueInputLength = valueInput.toString()
    console.log(valueInputLength);
    if (valueInputLength.length > 25) {
        return alert("You exceded the maximum characters!");
    }

    // div
    task = document.createElement("div");
    task.setAttribute("class", "task");

    // p
    taskText = task.appendChild(document.createElement("p"));
    taskText.setAttribute("id", "taskText");

    taskText.innerHTML = valueInput;
    
    // complete btn
    completeButton = task.appendChild(document.createElement("button"));
    let cbid = `completeButton${taskCounter}`
    completeButton.setAttribute("id", cbid);
    completeButton.setAttribute("class", "completeButton");
    completeButton.setAttribute("onclick", "completeButtonFunction();");
    
    completeButton.textContent = "Complete";

    // remove btn
    removeButton = task.appendChild(document.createElement("button"));
    let rmid = `removeButton${taskCounter}`;
    removeButton.setAttribute("id", rmid);
    removeButton.setAttribute("class", "removeButton");
    removeButton.setAttribute("onclick", "removeButtonFunction();");
    removeButton.textContent = "Remove";
    
    taskContainer.appendChild(task);
    return taskCounter;
}

function removeTask() {
    let rbParent = removeButton.parent;
    console.log(rbParent);
}

addButton.addEventListener("click", (event) => {
    createTask();
});