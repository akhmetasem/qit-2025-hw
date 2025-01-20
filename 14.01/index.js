
    function fetchUsersData() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    try {
        const response =fetch(url)
        if (!response.ok) {
            throw new Error('Деректерді алу кезінде қате орын алды');
        }
        const users =  response.json();
        displayUsers(users);
    } catch (error) {
        console.error('Қате орын алды!', error);
        document.getElementById('errorMessage').textContent = 'Қате орын алды!';
    }
}


function displayUsers(users) {
    const usersList = document.getElementById('usersList');
    usersList.innerHTML = ''; 

    users.forEach(user => {


        const userName = document.createElement('h3');
        userName.textContent = `Қолданушы аты: ${user.name}`;

        const userEmail = document.createElement('p');
        userEmail.textContent = `Email: ${user.email}`;

        userBlock.appendChild(userName);
        userBlock.appendChild(userEmail);

    });
}

// Деректерді алу
fetchUsersData();
