const APIKEY ="04897ac5ae905795f5d9c11f0a129fef";
     

const searchBox = document.getElementById("city");
const searchBtn = document.getElementById("btn");

async function checkWeather(city = 'Bengaluru') {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKEY}`);
    let data = await res.json();
    console.log(data)
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value)
})
searchBox.addEventListener("keyup", (e)=>{
    if (e.key == "Enter") {
        checkWeather(searchBox.value)
    }
})

checkWeather()