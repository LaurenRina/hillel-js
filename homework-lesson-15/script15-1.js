async function searchCity(city) {
  let apiKey = "3e5761385c02293899defe61082c2901";
  let apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  const coords = `lat=${data[0].lat}&lon=${data[0].lon}`;
  await getForecast(coords);
  return coords;
}

async function getForecast(coords) {
  let apiKey = "3e5761385c02293899defe61082c2901";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?${coords}&appid=${apiKey}&units=metric`;
  const response = await fetch(apiUrl);
  const data = await response.json();

  let temperature = document.querySelector("#temperature");
  let max = document.querySelector("#max");
  let min = document.querySelector("#min");
  let city = document.querySelector("#city");
  let feels = document.querySelector("#feels");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");

  temperature.innerHTML = data.main.temp.toFixed(0);
  max.innerHTML = data.main.temp_max.toFixed(0);
  min.innerHTML = data.main.temp_min.toFixed(0);
  city.innerHTML = data.name;
  feels.innerHTML = data.main.feels_like.toFixed(0);
  humidity.innerHTML = data.main.humidity;
  wind.innerHTML = data.wind.speed.toFixed(0);
}

function submit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  searchCity(searchInput.value);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", submit);

searchCity("Rome");
