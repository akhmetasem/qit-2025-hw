// const apiUrl = 'https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/questions';
// const nextButton = document.getElementById('next');
// const questions = document.querySelectorAll('.choice-container');
// const questionElement = document.getElementById('question');


// let seconds = 30;
// let timerInterval;
// const timerElement = document.getElementById('timer');
// let currentQuestionIndex = 0;

// function startTimer() {
//     timerInterval = setInterval(() => {
//         seconds--;
//         timerElement.textContent = "Time: " + seconds + " seconds";
//         if (seconds <= 0) {
//             clearInterval(timerInterval);
//             alert("Time's up!");
//         }
//     }, 1000);
// }

// async function fetchQuestions() {
//     try {
//         const response = await fetch(apiUrl);
//         const data = await response.json();

       
//         showQuestion(data[currentQuestionIndex]);

        
//         startTimer();
//     } catch (error) {
//         console.error('Error fetching questions:', error);
//     }
// }

// function showQuestion(data) {
//     questionElement.textContent = data.question;

    
//     const choiceContainers = document.querySelectorAll('.choice-container');
//     data.options.forEach((option, index) => {
//         const choiceTextElement = choiceContainers[index].querySelector('.choice-text');
//         choiceTextElement.textContent = option; 
//     });
// }

// function hideQuestions() {
//     questions.forEach(question => {
//         question.style.display = "none";
//     });
// }

// function showNextQuestion() {
//     hideQuestions();
//     currentQuestionIndex++;

//     if (currentQuestionIndex >= questions.length) {
//         currentQuestionIndex = 0;
//     }

    
//     showQuestion(data[currentQuestionIndex]);

//     seconds = 30;
//     timerElement.textContent = "Time: 30 seconds";
//     startTimer();  
// }


// nextButton.addEventListener('click', () => {
//     showNextQuestion();
// });

// fetchQuestions();  

// [
//     {
//       "question": "Сұрақтың мәтіні",
//       "answer": "Дұрыс жауап",
//       "options": [
//         "Опция A",
//         "Опция B",
//         "Опция C",
//         "Опция D"
//       ]
//     },
//     ...
//   ]
  

//   let questionsData = []; 

// async function fetchQuestions() {
//     try {
//         const response = await fetch(apiUrl);
//         questionsData = await response.json();  
//         showQuestion(questionsData[currentQuestionIndex]);
//         startTimer();
//     } catch (error) {
//         console.error('Error fetching questions:', error);
//     }
// }
