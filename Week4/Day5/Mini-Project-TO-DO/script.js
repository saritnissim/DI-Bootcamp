const tasks = [];

// Add task function
function addTask(event) {
    event.preventDefault(); // Prevent form submission

    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") return; // Do nothing if input is empty

    tasks.push(taskText);

    renderTask(taskText);
    taskInput.value = ""; // Clear input field
}

// Render task to DOM
function renderTask(taskText) {
    const listTasks = document.querySelector(".listTasks");

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    const fontAwesomeX = document.createElement('i')
    fontAwesomeX.classList.add('fa-brands','fa-square-x-twitter')
    fontAwesomeX.style = "color: #ff2600"

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const taskLabel = document.createElement("label");
    taskLabel.textContent = taskText;


    taskDiv.appendChild(fontAwesomeX)
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(taskLabel);

    listTasks.appendChild(taskDiv);
}

// Attach event listener to form
const taskForm = document.getElementById("taskForm");
taskForm.addEventListener("submit", addTask);
