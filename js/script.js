let key = "24b54c90223b9c8379917fb899563181";

function putDataOnScreen(date) {
  document.querySelector(".title-city").innerHTML = "Tempo em " + date.name;
  document.querySelector(".time").innerHTML = Math.floor(date.main.temp) + "°C";
  document.querySelector(".preview-text").innerHTML = date.weather[0].description;
  document.querySelector(".humidity").innerHTML = "Umidade: " + date.main.humidity + "%";
  document.querySelector(".preview-img").src = `https://openweathermap.org/img/wn/${date.weather[0].icon}.png`;
}

async function searchCity(city) {
  let date = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
  ).then((response) => response.json());

  putDataOnScreen(date);
}

function clickBotton() {
  let city = document.querySelector(".input-city").value;

  searchCity(city);
}
