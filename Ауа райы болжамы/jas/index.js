const apiKey = "fb2cff02b71168e9f0c68fd3f83d168a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    try {
        const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
            return;
        }

        const data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/3222/3222800.png";
        } else if (data.weather[0].main === "Clear") {
            weatherIcon.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Weather-clear.svg/1200px-Weather-clear.svg.png";
        } else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/4724/4724094.png";
        } else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src = "https://static.vecteezy.com/system/resources/thumbnails/009/585/430/small_2x/rain-drop-from-cartoony-cloud-free-free-png.png";
        } else if (data.weather[0].main === "Mist") {
            weatherIcon.src = "https://i.pinimg.com/736x/f2/ce/00/f2ce005e2f0a1e6379368e6f452cf48a.jpg";
        }

        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";

    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
