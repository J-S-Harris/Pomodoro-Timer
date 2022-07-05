// Design Stuff

const soundEffect = new Audio('timer.mp3')


// Text Entry Stuff

const entryBox = document.getElementById('inputBox');
entryBox.value = '20'
entryBox.style.textAlign = 'center'



// Countdown Stuff

let seconds = 60    // This will count if 60 seconds has passed

let countdown = 20   // 'countdown' is the time to count down
const timer = document.createElement('h1')
timer.innerText = countdown // 'timer' is the time box

goAndCountdown.append(timer)

let countingDown = 0    // 'countingDown' is 1 if counting
let bothCheck = 0   // Checks if a 20 should start when timer == 0

// Main Function that decrements timer, etc.

function countDownwards() {
    document.title = `Time left: ${countdown} minutes`;
    console.log(seconds, countdown)
    seconds -= 1;


    if (seconds == 0) {
        countdown -= 1;
        document.title = `Time left: ${countdown} minutes`;
        timer.innerText = countdown;
        seconds = 60
        if (countdown % 2 == 0) {
            timer.style.color = 'orange'
        } else {
            timer.style.color = 'darkgrey'
        }
    }
    
    
    if (countdown == 0 && bothCheck == 1) {
        bothCheck = 0;
        countdown = 20;
        document.title = `Break time! ${countdown} minutes`;
        soundEffect.play();
        setTimeout(alert('rest time!'),1000)

    } else if (countdown == 0 && bothCheck == 0) {
        timer.style.color = 'black'
        startButton.innerText = 'Start:'
        soundEffect.play();
        document.title = `Time's up!`;
        timer.innerText = "Time's up!"
        clearTimeout(countDown)
    }
    }



// Start-Stop Button stuff:

const startButton = document.getElementById('goButton')

startButton.addEventListener('click',() => {

    if (countingDown == 0) {
        countDown = setInterval(countDownwards,1);
        countingDown += 1;
        startButton.innerText = 'Stop'
        if (countdown % 2 == 0) {
            timer.style.color = 'orange'
        } else {
            timer.style.color = 'darkgrey'
        }


    } else {
        countingDown = 0;
        startButton.innerText = 'Start:'
        clearTimeout(countDown);
        seconds = 60;
        timer.style.color = 'black'
    }
} )




// Set Timer Button stuff:
const setTimerButton = document.getElementById('setTimer')

setTimerButton.addEventListener('click',() => {
    countdown = entryBox.value
    timer.innerText = countdown
    clearTimeout(countDown)
    startButton.innerText = 'Start:'
    countingDown = 0;
})





// Buttons and logic:


// 40 Min Timer
const fortyMinTimer = document.getElementById('40')

fortyMinTimer.addEventListener('click',() => {
    countdown = 40
    timer.innerText = countdown
    clearTimeout(countDown)
    startButton.innerText = 'Start:'
    countingDown = 0;
} )


// 20 Min Timer
const twentyMinTimer = document.getElementById('20')

twentyMinTimer.addEventListener('click',() => {
    countdown = 20
    timer.innerText = countdown
    clearTimeout(countDown)
    startButton.innerText = 'Start:'
    countingDown = 0;
} )


// 40+20 Minute Timer
const sixtyMinTimer = document.getElementById('60');

sixtyMinTimer.addEventListener('click',() => {
    countdown = 40
    timer.innerText = countdown
    startButton.innerText = 'Start:'
    countingDown = 0;
    bothCheck = 1
    clearTimeout(countDown)
})