const API_KEY = "c2737ca1f7fbd51284b32191753b892e";

function geoSuccess(posititon) {
  const lat = posititon.coords.latitude;
  const long = posititon.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherAPI = document.querySelector("#weather");
      const weather = weatherAPI.querySelector("span:first-child");
      const city = weatherAPI.querySelector("span:last-child");
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
    });
}

function geoFail() {
  alert("Can't Find You. Where Are You?? ");
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoFail);
