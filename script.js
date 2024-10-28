const apiKey = 'fbb34ef6745a4778912193849242909';

async function fetchWeather() {
    const city = document.getElementById("cityInput").value;
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        displayWeather(data.current.condition.text);
    } catch (error) {
        document.getElementById("weatherDisplay").innerText = "Fel! Stad hittades inte.";
    }
}

function displayWeather(condition) {
    const weatherDisplay = document.getElementById("weatherDisplay");
    weatherDisplay.innerText = ""; // Rensa tidigare väderdata

    const emojiMap = {
        Sunny: "☀️",
        Rain: "🌧️",
        Cloudy: "☁️",
        Snow: "❄️",
        Thunderstorm: "⛈️",
        Drizzle: "🌦️",
        Mist: "🌫️",
        Overcast: "🌥️",
    };

    // Visa emoji för väderförhållande eller en generell emoji om vädret inte hittas
    weatherDisplay.innerText = emojiMap[condition] || "🤷‍♂️";
}
