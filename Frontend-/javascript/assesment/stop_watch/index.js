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

// Start Function
start.addEventListener('click', () => {

    if (timer !== null) {
        clearInterval(timer)
    }

    timer = setInterval(() => {

        seconds++

        if (seconds == 60) {
            seconds = 0
            minutes++
        }

        if (minutes == 60) {
            minutes = 0
            hours++
        }

        hourSpan.innerText = String(hours).padStart(2, '0')
        minuteSpan.innerText = String(minutes).padStart(2, '0')
        secondSpan.innerText = String(seconds).padStart(2, '0')

    }, 1000)

})

// Stop Function
stop.addEventListener('click', () => {
    clearInterval(timer)
})

// Reset Function
reset.addEventListener('click', () => {

    clearInterval(timer)

    hours = 0
    minutes = 0
    seconds = 0

    hourSpan.innerText = "00"
    minuteSpan.innerText = "00"
    secondSpan.innerText = "00"

})