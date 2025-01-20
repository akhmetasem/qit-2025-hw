const apiKey = 'fb2cff02b71168e9f0c68fd3f83d168a';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=kk';

document.getElementById('checkWeather').addEventListener('click', () => {
    const cityName = document.getElementById('cityName').value;
    
    if (!cityName) {
        alert('Қала атауын енгізіңіз!');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=kk`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('cityNameResult').textContent = `Қала: ${data.name}`;
                document.getElementById('temperature').textContent = `Температура: ${data.main.temp}°C`;
                document.getElementById('weatherDescription').textContent = `Ауа райы: ${data.weather[0].description}`;
                document.getElementById('errorMessage').textContent = '';
            } else {
                throw new Error('Қала табылмады');
            }
        })
        .catch(error => {
            document.getElementById('errorMessage').textContent = 'Ауа райы деректерін жүктеу мүмкін болмады.';
            document.getElementById('cityNameResult').textContent = '';
            document.getElementById('temperature').textContent = '';
            document.getElementById('weatherDescription').textContent = '';
        });
});