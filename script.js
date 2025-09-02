let time = 25 * 60; // 25 minutes

let timerInterval;

let isRunning = false;

function updateDisplay() {

  const minutes = Math.floor(time / 60);

  const seconds = time % 60;

  document.getElementById('timer').textContent =

    `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

}

function startTimer() {

  if (!isRunning) {

    isRunning = true;

    document.getElementById('status').textContent = "You're focusing!";

    timerInterval = setInterval(() => {

      if (time > 0) {

        time--;

        updateDisplay();

      } else {

        clearInterval(timerInterval);

        document.getElementById('status').textContent = "Time's up! Take a break.";

      }

    }, 1000);

  }

}

function pauseTimer() {

  clearInterval(timerInterval);

  isRunning = false;

  document.getElementById('status').textContent = "Paused.";

}

function resetTimer() {

  clearInterval(timerInterval);

  time = 25 * 60;

  isRunning = false;

  updateDisplay();

  document.getElementById('status').textContent = "Ready to focus!";

}

updateDisplay(); // Initial display