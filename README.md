# Phase 1 Project Guidelines

Project Name: All Cities Weather
Author: Robert Kirui

## escription

All Cities Weather is a JavaScript mvp that allows users to search for weather information of any city in the world. It fetches weather data from OpenWeatherMap API and displays the current temperature, humidity, wind speed, and weather condition (represented by an icon) for the searched city. If the city is not found, an error message is displayed,'Invalid City Name!'

## Objectives
The main objectives of this project are:

  To provide users with up-to-date weather information for any city in the world.
  To display the weather information in a user-friendly way with a visually appealing weather icon.
  To handle errors gracefully when a city is not found or when there is an issue with fetching weather data from the API.

## Achieving these Objectives
The project uses the following approach to achieve its objectives:

DOMContentLoaded event: The JavaScript code listens for the DOMContentLoaded event, which fires when the HTML document has finished loading. This ensures that the JavaScript code is executed after the HTML elements have been loaded and are ready to be manipulated.

OpenWeatherMap API: The project uses the OpenWeatherMap API to fetch weather data for a given city. The API key and URL are set up at the beginning of the code with the provided API key and URL.

Asynchronous Function: The project defines an asynchronous function called checkWeather(city) that makes an API request to the OpenWeatherMap API using the fetch() function. The await keyword is used to wait for the response to be received before proceeding to the next line of code. The response is then parsed into JSON format using the json() method.

Error Handling: The project checks the response status to determine if the city is found or not. If the response status is 404 (city not found), an error message is displayed and the weather information is hidden using the style.display property of the DOM elements. Otherwise, if the city is found, the weather information is updated with the received data.

Weather Icon: The project updates the weather icon based on the weather condition received from the API. If the weather condition is "Clouds", a clouds icon is displayed. If it is "Clear", a clear weather icon is displayed. If it is "Rain", a rain icon is displayed, and so on. The weather icons are represented by image files located in the "images" folder and the src attribute of the weatherIcon DOM element is updated accordingly.

Event Listener: The project adds a click event listener to the search button DOM element. When the search button is clicked, the checkWeather() function is called with the value entered in the search input DOM element as the argument, triggering the weather data fetching process.

## Instructions
To use the All Cities Weather application, follow these steps:

    Open the "index.html" file in a web browser.
    Enter the name of a city in the search input field.
    Click the search button to fetch and display the weather information for the entered city.
    The weather information will be displayed below the search input field, including the city name, temperature, humidity, wind speed, and weather condition icon.
    If the entered city is not found, an error message will be displayed.
    You can search for weather information of multiple cities by repeating the above steps.