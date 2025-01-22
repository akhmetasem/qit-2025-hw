let seconds = 30;
let timerInterval;
const timerElement = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const skipButton = document.getElementById('skip');
const nextButton = document.getElementById('next');
const questions = document.querySelectorAll('.container');
let currentQuestionIndex = 0;

function startTimer() {
    timerInterval = setInterval(() => {
        seconds--;
        timerElement.textContent = "Time: " + seconds + " seconds";
        if (seconds <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function skipQuestion() {
    clearInterval(timerInterval);
    seconds = 30;
    timerElement.textContent = "Time: 30 seconds";
    showNextQuestion();
}

function showNextQuestion() {
    hideQuestions();
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
        currentQuestionIndex = 0;
    }
    questions[currentQuestionIndex].style.display = "block";
    seconds = 30;
    timerElement.textContent = "Time: 30 seconds";
    startTimer();  
}

function hideQuestions() {
    questions.forEach(question => {
        question.style.display = "none";
    });
}

startButton.addEventListener('click', () => {
    startTimer();
});

stopButton.addEventListener('click', () => {
    stopTimer();
});

skipButton.addEventListener('click', () => {
    skipQuestion();
});

nextButton.addEventListener('click', () => {
    showNextQuestion();
});

showNextQuestion();  
