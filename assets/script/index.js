let countEl = document.getElementById("count-el")

let count = 0

function increment() {
    count++
    countEl.innerText = count
}

function logger() {
    console.log("Just so you know, the counter is currently at " + count)
}

function reset() {
    count = 0
    countEl.innerText = count
}