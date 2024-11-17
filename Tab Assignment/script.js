// button: it is on-click that text-decoration is set to underline
//         still on-click that inner html of display-bar (the "Each" in the p )
//         ...changes to text of button

// const button = document.querySelectorAll('button');

// mine
// const displayBar = document.querySelector(".display-bar");

// function changeText1() {
//         displayBar.textContent = `First Tab Content is diplayed here`;
//         button.style.textDecoration = 'underline';
// };

// function changeText2() {
//         displayBar.textContent = `Second Tab Content is diplayed here`;
// };

// function changeText3() {
//         displayBar.textContent = `Third Tab Content is diplayed here`;
// };

// function changeText4() {
//         displayBar.textContent = `Fourth Tab Content is diplayed here`;
// };

// function changeText5() {
//         displayBar.textContent = `Fifth Tab Content is diplayed here`;
// };

// modified by gpt
const displayBar = document.querySelector(".display-bar");

function changeText1(button) {
    resetUnderline();
    displayBar.textContent = 'First Tab Content is displayed here';
    button.style.textDecoration = 'underline';
}

function changeText2(button) {
    resetUnderline();
    displayBar.textContent = 'Second Tab Content is displayed here';
    button.style.textDecoration = 'underline';
}

function changeText3(button) {
    resetUnderline();
    displayBar.textContent = 'Third Tab Content is displayed here';
    button.style.textDecoration = 'underline';
}

function changeText4(button) {
    resetUnderline();
    displayBar.textContent = 'Fourth Tab Content is displayed here';
    button.style.textDecoration = 'underline';
}

function changeText5(button) {
    resetUnderline();
    displayBar.textContent = 'Fifth Tab Content is displayed here';
    button.style.textDecoration = 'underline';
}

function resetUnderline() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(btn => btn.style.textDecoration = "none");
}
