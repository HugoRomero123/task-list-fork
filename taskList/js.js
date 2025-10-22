//Variables

const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const completeButton = document.getElementsByClassName("completeButton");
const removeButton = document.getElementsByClassName("removeButton");
const taskContainer = document.getElementsByClassName("taskContainer")

function addElements() {

    //variables 2
    
    let taskTextInput = taskInput.value;

    let tasksDivs = document.createElement("div");
    console.log(taskTextInput);

    let p1 = tasksDivs.appendChild(document.createElement("p"));

    p1.setAttribute("id", "p1");

    taskContainer.appendChild(tasksDivs);

    p1.innerHTML = taskTextInput;
}

addButton.addEventListener("click", (event) => {
    console.log("Prueba");
    console.log(document.getElementById("prueba"));
    addElements();
})

