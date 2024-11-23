let btn = document.getElementById('submit').addEventListener('click', addTask);
let task = document.getElementById('text');
let tasks = document.getElementById('created')


// Add an event listener for the Enter key
task.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') { // Check if the key pressed is Enter
        addTask(event); // Trigger the addTask function
    }
});



function addTask(){


    // Prevent the form from submitting
    // event.preventDefault();
    // commented above out becos I commented the form tag out in HTML
        

    let taskText = task.value.trim();

    if(taskText === ''){
        alert ("Please add task");
        return;
    }

    // Create the new task and add to Ul

    let newTask = document.createElement('li');

    newTask.innerHTML = 
    `<span> ${taskText}</span>  
    <button id="delete"><i class="fa-regular fa-trash-can"></i></button>`;

    tasks.appendChild(newTask);


    task.value = ''; // Clear the input field


    // JavaScript to toggle the checked state
    // Add event listener to the `li` to toggle the "checked" state
    newTask.addEventListener('click', (event) => {
        // Check if the target is the `li::before` simulated by CSS
        if (event.offsetX < 37) { // Assuming ::before is 15px wide + margin
            newTask.classList.toggle('checked');
        }
    });

    // Delete task
    newTask.querySelector('#delete').addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent parent `li` click event
        newTask.remove();
    });
   

};