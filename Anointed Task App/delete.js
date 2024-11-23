export function deleteTask(taskElement) {
    // Delete task
    const deleteButton = taskElement.querySelector('#delete');

    deleteButton.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent parent `li` click event
        taskElement.remove();
    });    
    
};

console.log("deleteTask is loaded");
