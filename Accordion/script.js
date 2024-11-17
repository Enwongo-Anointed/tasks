// Get all header elements inside the sections
const headers = document.querySelectorAll("section > header");

headers.forEach(header => {
    // Add click event listener to each header
    header.addEventListener("click", () => {
        // Find the associated paragraph element with class "answer"
        const answer = header.nextElementSibling;
        
        // Toggle the visibility of the answer
        if (answer) {
            answer.style.display = answer.style.display === "block" ? "none" : "block";
        }
    });
});
