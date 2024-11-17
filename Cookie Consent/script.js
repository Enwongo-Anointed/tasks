const cookieBox = document.querySelector(".wrapper"),
    buttons = document.querySelectorAll(".button");

const executeCodes = () => {
    // if cookie contains Annointed it will be returned and below of this code will not run
    if(document.cookie.includes("Annointed")) return;
    cookieBox.classList.add("show")

    buttons.forEach(button =>{
        button.addEventListener("click", () => {
            cookieBox.classList.remove("show");


            // if button has acceptBtn id
            if(button.id == "acceptBtn") {
                console.log("contains")
            }
            // setcookies for 1 month. 60 = 1min, 60 = 1hr, 24 = 1day, 30 = 30days
            document.cookie = "cookieBy = Annointed; max-age =" + 60 * 60 * 24 * 30;
        })
    } )
};

// executeCodes function will be caled on webpage load
window.addEventListener("load", executeCodes);
