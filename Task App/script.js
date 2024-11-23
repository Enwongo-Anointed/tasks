let btn = document.getElementById('submit').addEventListener('click', addTask);
let task = document.getElementById('task');
let tasks = document.getElementById('tasks');


function addTask(){
    let taskText = task.value.trim();

    if(taskText === ''){
        alert ("Please add task");
        return;
    }

    // Add to Ul

    let newTask = document.createElement('li')

    newTask.innerHTML = `
    <span> ${taskText}</span>
    <button id="delete">X</button>
    `;

    tasks.appendChild(newTask);


    task.value = ''; //makes the input bar empty once again after submitting

    // Add delete functionality to the 'X' button
    // let deleteButton = newTask.querySelector('.delete');
    // deleteButton.addEventListener('click', function() {
    //     tasks.removeChild(newTask)
    // });
    
    // ... (rest of your code)

// Add event listener to the 'delete' button
document.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON' && event.target.id === 'delete') {
        const liToDelete = event.target.parentElement; // Get the parent li element
        liToDelete.remove(); // Remove the li element from the DOM
    }
});
}

// function addTask () {
//     let task = document.getElementById('task')

//     let tasks = document.getElementById('tasks')

//    let newTask = document.createElement('li');
// //    newTask.textContent = task.value;


//     tasks.appendChild(newTask);

//     task.value = ''
// }

