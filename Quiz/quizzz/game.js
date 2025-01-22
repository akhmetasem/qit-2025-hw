startButton1.addEventListener('click', () => {
    startTimer(timerElement1, seconds1, timerInterval1);
});

startButton2.addEventListener('click', () => {
    startTimer(timerElement2, seconds2, timerInterval2);
});

startButton3.addEventListener('click', () => {
    startTimer(timerElement3, seconds3, timerInterval3);
});


resetButton1.addEventListener('click', () => {
    seconds1 = 30;
    timerElement1.textContent = "Time 30 seconds";
    clearInterval(timerInterval1);
});

resetButton2.addEventListener('click', () => {
    seconds2 = 30;
    timerElement2.textContent = "Time 30 seconds";
    clearInterval(timerInterval2);
});

resetButton3.addEventListener('click', () => {
    seconds3 = 30;
    timerElement3.textContent = "Time 30 seconds";
    clearInterval(timerInterval3);
});
const nextButton = document.getElementById('next');


const questions = document.querySelectorAll('.uefa_container');  

let currentQuestionIndex = 0;  


questions[currentQuestionIndex].style.display = "block";

function hideQuestions() {
    questions.forEach(question => {
        question.style.display = "none";
    });
}


nextButton.addEventListener('click', () => {
    hideQuestions();
    currentQuestionIndex++;  

    
    if (currentQuestionIndex >= questions.length) {
        currentQuestionIndex = 0;
    }

   
    questions[currentQuestionIndex].style.display = "block";
});