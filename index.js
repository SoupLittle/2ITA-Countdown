// Countdown
var countdownElement = document.getElementById('countdown');
var countdownEndDate = new Date('June 21, 2024 15:30:00').getTime();

function updateCountdown() {
    var now = new Date().getTime();
    var distance = countdownEndDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.textContent = pad(days) + "d " + pad(hours) + "h " + pad(minutes) + "m " + pad(seconds) + "s ";

    if (distance < 0) {
        clearInterval(countdownInterval);
        countdownElement.textContent = "EXPIRED";
    }
}

var countdownInterval = setInterval(updateCountdown, 1000);

function pad(number) {
    return (number < 10 ? '0' : '') + number;
}

// Timer/Stopwatch
var timerElement = document.getElementById('timer');
var startTime;
var timerInterval;
var stopwatchInterval;
var stopwatchStartTime;

function startTimer() {
    startTime = Date.now() - (stopwatchStartTime ? stopwatchStartTime : 0);
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    var elapsedTime = Date.now() - startTime;
    var hours = Math.floor(elapsedTime / 3600000);
    var minutes = Math.floor((elapsedTime % 3600000) / 60000);
    var seconds = Math.floor((elapsedTime % 60000) / 1000);

    timerElement.textContent = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
}

function switchToTimer() {
    clearInterval(stopwatchInterval);
    clearInterval(timerInterval);
    stopwatchStartTime = 0;
    timerElement.textContent = '00:00:00';
    startTimer();
}


function switchToStopwatch() {
    clearInterval(timerInterval);
    clearInterval(stopwatchInterval);
    timerElement.textContent = '00:00:00';
    stopwatchStartTime = Date.now() - startTime;
    stopwatchInterval = setInterval(updateTimer, 1000);
}

// Start with Timer
switchToTimer();