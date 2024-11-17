document.getElementById('btn').addEventListener('click',addTask);
function addTask () {
    let task = document.getElementById('task');

    let tasks = document.getElementById('tasks');
// adding to the list
    let newTask = document.createElement('li');
    newTask.textContent = task.value;

    tasks.appendChild(newTask);

    task.value = ''

}