function saveData() {
    const inputField = document.getElementById("dataInput");
    if (inputField.value.trim() !== "") {
        alert(`Мәлімет жіберілді: ${inputField.value}`);
        inputField.value = "";
    } else {
        alert("Мәлімет енгізіңіз!");
    }
}