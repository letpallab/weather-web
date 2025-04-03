const apikey = "350c2791d79df16f31bb6700063324a1";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const weatherContainer = document.querySelector(".weather");

const search = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search button");

const weatherImg = document.querySelector(".weather-icon");

const weather = document.querySelector(".weather-info h1");
const cityName = document.querySelector(".weather-info h2");
const description = document.querySelector(".weather-info p");
const humidity = document.querySelector(".humidity-info h5");
const wind = document.querySelector(".wind-info p");

async function getWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    
    if(response.status == "404") {
        alert("City not found!");
        weatherContainer.style.display = "none";
        return;
    } else {
        const data = await response.json();
        console.log(data);
        weather.innerHTML = Math.round(data.main.temp) + "°C";
        cityName.innerHTML = data.name;
        description.innerHTML = data.weather[0].description;
        humidity.innerHTML = data.main.humidity + "%";
        wind.innerHTML = Math.round(data.wind.speed) + " km/h";
    
        if(data.weather[0].main == "Clouds"){
            weatherImg.src = "images/cloud.png";
        }else if(data.weather[0].main == "Clear"){
            weatherImg.src = "images/sun.png";
        }else if(data.weather[0].main == "Rain"){
            weatherImg.src = "images/rain.png";
        }else if(data.weather[0].main == "Snow"){    
            weatherImg.src = "images/snow.png";
        }else if(data.weather[0].main == "Mist"){
            weatherImg.src = "images/mist.png";
        }else if(data.weather[0].main == "Wind"){
            weatherImg.src = "images/wind.png";
        }else if(data.weather[0].main == "Thunderstorm"){
            weatherImg.src = "images/tl.webp";
        }
        weatherContainer.style.display = "block";
    }
}

searchBtn.addEventListener("click", () => {
    getWeather(search.value);
});

