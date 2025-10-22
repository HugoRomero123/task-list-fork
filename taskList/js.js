let taskInput = document.getElementById("taskInput");
const taskContainer = document.getElementById("taskContainer");

const addButton = document.getElementById("addButton");
const taskDiv = document.getElementsByClassName("task");
const removeButton = document.getElementsByClassName("removeButton");

let taskList = {};

/*
<div class="task">
    <p id="taskText">Example 1</p>
    <button class="completeButton">Complete</button>
    <button class="removeButton">Remove</button>
</div>
*/

function createTask() {
    var valueInput = taskInput.value;
    let valueInputLength = valueInput.toString()
    console.log(valueInputLength);
    if (valueInputLength.length > 25) {
        return alert("You exceded the maximum characters!");
    }

    // div
    let task = document.createElement("div");
    task.setAttribute("class", "task");

    // p
    let taskText = task.appendChild(document.createElement("p"));
    taskText.setAttribute("id", "taskText");

    taskText.innerHTML = valueInput;
    
    // complete btn
    let completeButton = task.appendChild(document.createElement("button"));
    completeButton.setAttribute("class", "completeButton");
    completeButton.textContent = "Complete";

    // remove btn
    let removeButton = task.appendChild(document.createElement("button"));
    removeButton.setAttribute("class", "removeButton");
    removeButton.textContent = "Remove";

    taskContainer.appendChild(task);
}

function removeTask() {
    let rbParent = removeButton.parent;
    console.log(rbParent);
}

addButton.addEventListener("click", (event) => {
    createTask();
});