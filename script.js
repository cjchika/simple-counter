const incrementBtn = document.getElementById("increment-btn")
const saveBtn = document.getElementById("save-btn")
let counterEl = document.getElementById("counter-el")
let welcomeText = document.getElementById("welcome-el")


let count = 0;

function increment(){
    count = count + 1;
    counterEl.innerText = count;
}

incrementBtn.addEventListener("click", increment)

function save(){
    console.log(count);
}

saveBtn.addEventListener("click", save)

let name = "Odogwu"

let greeting = "Welcome back";

welcomeText.innerText = `${greeting}, ${name}!`
