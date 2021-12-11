const roullete = document.querySelector(".roullete");
const startBtn = document.querySelector(".startBtn");
const stopBtn = document.querySelector(".stopBtn");
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);

let count = 45
let intervalEx

function start() {
    if (!intervalEx) {
        intervalEx = setInterval(rotate, 1000)
    }
    console.log('START')
}


function rotate() {
    roullete.style.transform = `rotate(${count}deg)`
    count += 45
    console.log('ÇA TOURNE')
}

function stop() {
    clearInterval(intervalEx)
    intervalEx = null

    console.log('Stop')

}


