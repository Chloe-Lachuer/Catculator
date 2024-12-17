//DOM
const keyboard = [...document.querySelectorAll(".key")];
console.log(keyboard);
const keyboardCode = keyboard.map(code => code.dataset.code);
console.log(keyboardCode);

document.addEventListener("keydown", (e))