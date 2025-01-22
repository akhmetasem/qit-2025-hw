const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");
const maxQuestionsText = document.getElementById("maxQuestions");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

const questions = [
    {
        question: "Әлемдегі ең көп сатылған кітап қандай?",
        choice1: "«Гарри Поттер» - Дж. Роулинг",
        choice2: "«Библия»",
        choice3: "«Соғыс және бейбітшілік» - Л.Н. Толстой",
        choice4: "«Шерлок Холмс» - Артур Конан Дойл",
        answer: 2,
    },
    {
        question: "Шекспирдің қай шығармасы әлемдегі ең танымал трагедия болып саналады?",
        choice1: "«Ромео мен Джульетта»",
        choice2: "«Гамлет»",
        choice3: "«Отелло»",
        choice4: "«Макбет»",
        answer: 1,
    },
    {
        question: "Ең алғашқы баспа кітапты кім басып шығарды?",
        choice1: "Леонардо да Винчи",
        choice2: "Иоганн Гутенберг",
        choice3: "Чарльз Диккенс",
        choice4: "Александр Пушкин",
        answer: 2,
    },
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = questions.length;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    maxQuestionsText.innerText = MAX_QUESTIONS;
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        return alert("Ойын аяқталды! Ұпай: " + score);
    }

    questionCounter++;
    questionCounterText.innerText = questionCounter;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener("click", (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply =
            selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if (classToApply === "correct") {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

incrementScore = (num) => {
    score += num;
    scoreText.innerText = score;
};

startGame();
