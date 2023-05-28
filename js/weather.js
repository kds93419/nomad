const API_KEY = "bbcab540fbfdbc23caea516fd407c2a7"


function onGeoOk(position){
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  console.log("you live in", lat, long);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url).then((response) => response.json()).
  then((data) =>{
  const weather = document.querySelector("#weather span:first-child");
  const city = document.querySelector("#weather span:last-child");
  console.log(city);
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  });
}

function onGeoError(){
  alert("cant find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);