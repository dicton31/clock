let startTime, elapsedTime = 0, timerInterval;
let running = false;

function updateClock() {
    let now = new Date();
    let hours = (now.getHours() ) % 24; // Add 1 hour, handle overflow at 24
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    document.getElementById("clock").innerText = 
        String(hours).padStart(2, '0') + ":" + 
        String(minutes).padStart(2, '0') + ":" + 
        String(seconds).padStart(2, '0');
}

setInterval(updateClock, 1000); // Update clock every second
updateClock(); // Show time immediately on load

function formatTime(ms) {
    let totalSeconds = Math.floor(ms / 1000);
    let hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    let minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    let seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function startStopwatch() {
    if (!running) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            document.getElementById("display").innerText = formatTime(elapsedTime);
        }, 1000);
        running = true;
    }
}

function stopStopwatch() {
    clearInterval(timerInterval);
    running = false;
}

function resetStopwatch() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    document.getElementById("display").innerText = "00:00:00";
    running = false;
}