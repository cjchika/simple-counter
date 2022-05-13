const incrementBtn = document.getElementById("increment-btn")
const saveBtn = document.getElementById("save-btn")
let counterEl = document.getElementById("counter-el")
let saveText = document.getElementById("save-el")


let count = 0;

function increment(){
    count += 1;
    counterEl.innerText = count;
}

incrementBtn.addEventListener("click", increment)

function save(){
    let displayText = count + " - "
    saveText.textContent += displayText; 
    counterEl.textContent = 0;
}


saveBtn.addEventListener("click", save)


