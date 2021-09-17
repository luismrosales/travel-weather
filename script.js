var search = document.querySelector("#city-search");
var searchButton = document.querySelector(".result");
var city = document.getElementById("city");
var temp = document.getElementById("temp");
var wind = document.getElementById("wind");
var humidity = document.getElementById("humidity");
var uv = document.getElementById("uv");
var searchButton = document.getElementById("search");

fetch(
  "https://api.openweathermap.org/data/2.5/forecast?q=atlanta&appid=d91f911bcf2c0f925fb6535547a5ddc9"
)
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=atlanta&appid=d91f911bcf2c0f925fb6535547a5ddc9&units=imperial"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        displayInfo(data);
      });
  });

var displayInfo = function (data) {
  searchButton.addEventListener("click", function () {
    city.textContent = data.name;
    temp.textContent = "Temp: " + data.main.temp + " \u00B0 F ";
    wind.textContent = "Wind: " + data.wind.speed + " MPH";
    humidity.textContent = "Humidity: " + data.main.humidity + " %";
    uv.textContent = "hello sir";
  });
};
