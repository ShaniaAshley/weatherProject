let currentDate = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentDate.getDay()];
let hour = currentDate.getHours();
let minutes = currentDate.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

if (hour < 10) {
  hour = `0${hour}`;
}

let today = document.querySelector(".today");
today.innerHTML = `${day} ${hour}:${minutes}`;

function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let h1 = document.querySelector("h1");
  if (cityInput.value) {
    h1.innerHTML = `${cityInput.value}`;
  } else {
    h1.innerHTML = null;
    alert("Please enter a city");
  }
  function displayTemperature(response) {
    let currentTemperature = Math.round(response.data.temperature.current);

    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = `${currentTemperature}`;
  }

  let apiKey = "ee3f74296064o2a32tfa7db8cb4f076b";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityInput.value}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
