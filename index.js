// Listen for DOMContentLoaded event, which fires when the HTML document has finished loading
document.addEventListener("DOMContentLoaded", () => {

  // Set up API key and URL for OpenWeatherMap API
  const apiKey = "40e23ce868e39b48adb133dd8a5812c4";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  // Get DOM elements
  const searchBox = document.querySelector(".search input");
  const searchBtn = document.querySelector(".search button");
  const weatherIcon = document.querySelector(".weather-icon");

  // Define an asynchronous function to check weather for a given city
  async function checkWeather(city) {
    // Make an API request and wait for response
    const response = await fetch(apiUrl + city + "&appid=" + apiKey);
    const data = await response.json();

    console.log(data);

    // If response status is 404 (city not found), display error message and hide weather information
    if (response.status == 404) {
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
    } else {
      // If city is found, update the DOM with weather information
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

      // Update weather icon based on weather condition
      if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
      } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
      } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
      } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
      } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
      }

      // Hide error message and show weather information
      document.querySelector(".error").style.display = "none";
      document.querySelector(".weather").style.display = "block";
    }
  }

  // Add click event listener to the search button
  searchBtn.addEventListener("click", () => {
    // Call the checkWeather function with the value entered in the search input
    checkWeather(searchBox.value);
  });
});
