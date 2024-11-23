export function toggleCheckedState(taskElement){
    taskElement.addEventListener('click', (event) => {
        // Check if the target is the `li::before` simulated by CSS
        if (event.offsetX < 37) { // Assuming ::before is 32px wide + margin and on the left
            taskElement.classList.toggle('checked');
        }
    });

}

console.log("toggleCheckedState is loaded");