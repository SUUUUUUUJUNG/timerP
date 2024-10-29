let timer;
let totalSeconds = 0;

function updateTimerDisplay() {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById('hours').value = String(hours).padStart(2, '0');
    document.getElementById('minutes').value = String(minutes).padStart(2, '0');
    document.getElementById('seconds').value = String(seconds).padStart(2, '0');
}

function startTimer() {
    if (!timer) {
        timer = setInterval(() => {
            if (totalSeconds > 0) {
                totalSeconds--;
                updateTimerDisplay();
            } else {
                stopTimer();
            }
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    stopTimer();
    totalSeconds = 0;
    updateTimerDisplay();
}

function addTime(secondsToAdd) {
    totalSeconds += secondsToAdd;
    updateTimerDisplay();
}
