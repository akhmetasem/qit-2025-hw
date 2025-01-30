function saveData() {
    const data = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const text = document.getElementById('text').value;
    const number = document.getElementById('number').value;

    if (data && age && text && number) {
        sessionStorage.setItem('name', data);
        sessionStorage.setItem('age', age);
        sessionStorage.setItem('text', text);
        sessionStorage.setItem('number', number);
        alert('Мәліметтер сақталды');
        clearInputs();
    } else {
        alert('Барлық өрістерді толтырыңыз');
    }
}

function loadData() {
    const name = sessionStorage.getItem('name');
    const age = sessionStorage.getItem('age');
    const text = sessionStorage.getItem('text');
    const number = sessionStorage.getItem('number');
    if (name && age && text && number) {
        alert(`${name}, ${age} жаста (${number} жылы) ${text} айналысады.`);
    } else {
        alert('Мәліметтер жоқ');
    }
}

function removeData() {
    sessionStorage.clear();
    alert('Мәліметтер тазартылды');
}

function clearInputs() {
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('text').value = '';
    document.getElementById('number').value = '';
}












 function colorData() {
    const savedColor = sessionStorage.getItem("selectedColor");
    if (savedColor) {
        document.getElementById("colorInput").value = savedColor;
        document.body.style.backgroundColor = savedColor;
    }
};
function saveData() {
    const color = document.getElementById("colorInput").value;
    sessionStorage.setItem("selectedColor", color);
    document.body.style.backgroundColor = color;
    alert("Түс сақталды");
}
function removeData() {
    sessionStorage.removeItem("selectedColor");
    document.getElementById("colorInput").value = "#ffffff"; 
    document.body.style.backgroundColor = "#ffffff";
    alert("Түс тазартылды");
}