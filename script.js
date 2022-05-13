const incrementBtn = document.getElementById("increment-btn")
const saveBtn = document.getElementById("save-btn")
let counterEl = document.getElementById("counter-el")


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

let username = 'Odogwu'

let message = 'You have new notification'

let messageToUser = `${message}, ${username}!`
console.log(messageToUser);

let name = "Odogwu";

let greeting = "Hi, I am "

let myGreeting = `${greeting}${name}`;

console.log(myGreeting);