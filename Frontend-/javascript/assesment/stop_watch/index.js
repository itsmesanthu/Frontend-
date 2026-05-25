let hourSpan = document.getElementById('hour')
let minuteSpan = document.getElementById('minute')
let secondSpan = document.getElementById('second')
let start = document.getElementById('start')
let stop = document.getElementById('stop')
let reset = document.getElementById('reset')

let hours = 0
let minutes = 0
let seconds = 0
let timer = null

function updateDisplay() {
    hourSpan.innerText = hours.toString().padStart(2, '0')
    minuteSpan.innerText = minutes.toString().padStart(2, '0')
    secondSpan.innerText = seconds.toString().padStart(2, '0')
}

start.addEventListener('click', () => {
    if (!timer) {
        timer = setInterval(() => {
            seconds++
            if (seconds === 60) {
                seconds = 0
                minutes++
            }
            if (minutes === 60) {
                minutes = 0
                hours++
            }
            updateDisplay()
        }, 1000)
    }
})

stop.addEventListener('click', () => {
    clearInterval(timer)
    timer = null
})

reset.addEventListener('click', () => {
    clearInterval(timer)
    timer = null
    hours = 0
    minutes = 0
    seconds = 0
    updateDisplay()
})
