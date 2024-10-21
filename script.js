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
    `

    tasks.appendChild(newTask);


    task.value = '';

}

// function addTask () {
//     let task = document.getElementById('task')

//     let tasks = document.getElementById('tasks')

//    let newTask = document.createElement('li');
// //    newTask.textContent = task.value;


//     tasks.appendChild(newTask);

//     task.value = ''
// }

