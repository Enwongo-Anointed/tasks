// How I import both modules
import { toggleCheckedState  } from "./toggle.js";
import { deleteTask } from "./delete.js";

// Selecting necessary elements
const btn = document.getElementById('submit');
const task = document.getElementById('text');
const tasks = document.getElementById('created')

// Event listener for "Create" button
btn.addEventListener('click', addTask)


// Add an event listener for the Enter key
task.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') { // Check if the key pressed is Enter
        addTask(event); // Trigger the addTask function
    }
});


// Function to create and append a new task
function addTask(){

    const taskText = task.value.trim();

    if(taskText === ''){
        alert ("Please add task");
        return;
    }


    // Create a new <li> element containing the created task and add to Ul
    const newTask = document.createElement('li');

    newTask.innerHTML = `
    <span> ${taskText}</span>  
    <button id="delete"><i class="fa-regular fa-trash-can"></i></button>
    `;

    tasks.appendChild(newTask);


    task.value = ''; // Clear the input field


    // Add functionality for toggling and deleting
    toggleCheckedState(newTask); // Call toggleCheckedState from toggle.js
    deleteTask(newTask);         // Call deleteTask from delete.js

};

console.log("app.js is running");