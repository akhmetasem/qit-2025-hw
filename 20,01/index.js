const timerButton = document.getElementById('timer');
let timeLeft = 15;
function startTimer() {
    const interval = setInterval(() => {
        timeLeft--; 
        timerButton.textContent = timeLeft;
    
     
        if (timeLeft <= 0) {
          clearInterval(interval);
          alert("Уақыт тоқтады!"); 
          timerButton.textContent = "15"; 
        }
      }, 1000); 
    }
    
   
    timerButton.addEventListener('click', startTimer);
