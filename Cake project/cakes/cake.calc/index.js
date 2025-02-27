const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');
let operators = ["+", "-", "*", "/", "%"]

let output = "";

function calculate (buttonValue) {
    if(buttonValue == "=" && output !== "") {
        output = eval(output)
    } else if (buttonValue == "C") {
        output = ""
    } else if (buttonValue == "+/-") {
        output = eval(output) * -1
    } else if (buttonValue == "del") {
        output = output.toString().slice(0, -1)
    } else {
        if (operators.includes(buttonValue) && operators.includes(output[output.length-1])) {
            output = output.slice(0, -1) + buttonValue
        } else {
            output += buttonValue
        }
    }
    display.value = output
}

buttons.forEach (button => {
    button.addEventListener('click', (e) => {
        console.log(e.target.dataset.value);
        
        calculate(e.target.dataset.value)
    })
})
