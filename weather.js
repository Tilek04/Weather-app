const iconElement = document.querySelector('.weather-icon');
const locationIcon = document.querySelector('.location-icon');
const tempElement = document.querySelector('.temperature-value p');
const descElement = document.querySelector('.temperature-description p');
const locationElement = document.querySelector('.location p');
const notificaionElement = document.querySelector('.notification');

var input = document.getElementById("search")
let city = ""
let latitude = 0.0
let longitude = 0.0


input.addEventListener("keyup", function (event){

    if (event.keuCode === 13){
        event.preventDefault();

        city = input.value
        getSearchWeather(city)
        console.log(city)
    }

} )

const weather = {

}

weather.temperature = {
    unit: "clsius"
}

const KELVIN = 273

const key = '76f3e08f63285dbe3561fe61b7c72490'

if("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition, shoError)
}  else {
    notificaionElement.getElementsByClassName.display = 'block'
    notificaionElement.innerHTML = '<p> Browser doesnt support geolocation</p>'
}

function setPosition(position) {
    latitude = position.coords.latitude
    logitude = position.coords.longitude

    getWeather(latitude, longitude)
}

locationIcon.addEventListener("click", function(event ) {
    console.log('hey')
    getWeather(latitude, longitude)
})

function shoError(error){
    notificaionElement.style.display = 'block'
    notificaionElement.innerHTML = `<p> ${error.massage}</p>`
}

function getSearchWeather(city){

    let api = `http://openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`


fetch(api)
.then(function (response) {
    let data = response.json()
    return data
})

.then(function (data) {
    weather.temperature.value=Math.floor(data.main.temp -KELVIV)
    weather.description = datd.weather[0].description
    weather.iconId = data.weather[0].icon
    weather.city = data.name
    weather.country = data.sys.country
})
.then(function() {
    displayWeather()
})
}

function getWeather(latitude, longitude) {
   let api = `http://openweathermap.org/data/2.5/weather?latq=${latitude}&lon=${longitude}&appid=${key}`

   
   fetch(api)
.then(function (response) {
    let data = response.json()
    return data
    console.log(data)
})

.then(function (data) {
    weather.temperature.value=Math.floor(data.main.temp -KELVIN)
    weather.description = data.weather[0].description
    weather.iconId = data.weather[0].icon
    weather.city = data.name
    weather.country = data.sys.country
})
.then(function() {
    displayWeather()
})
}

function displayWeather(){

    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png" />`
    tempElement.innerHTML = `${weather.temperature.value} *<span>C</span>`
    descElement.innerHTML = weather.description
    locationElement.innerHTML = `${weather.city}, ${weather.country}`
}


