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