
function onGeoOk(position){
    const api = "7a88cf09189e829c500d94d2096b9edd"
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${api}&units=metric`;

    fetch(url).then(response => response.json()).then((data)=> {
        const weather = document.querySelector("#weatherInform span:first-child");
        const city = document.querySelector("#weatherInform span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError()
{
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);