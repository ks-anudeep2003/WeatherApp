
// Destructuring, fetch api, string methods, try-catch, if-else, events 

// Accessing all the required html elements

let locEle = document.querySelector('.s-value')
let btnEle = document.querySelector('.s-btn')
let city = document.querySelector('.cityname')
let tempele = document.querySelector('.Temp')
let iconele = document.querySelector('.t-icon')
let desEle = document.querySelector('.description')
let windEle = document.querySelector('.wind')
let countryEle = document.querySelector('.country')

let ApiKey = '' // enter your api key
// functionality to display the weather information dynamically based on user input
btnEle.addEventListener('click',()=>{
    let location = locEle.value
    if(location===''){
        alert('Enter the location')
    }else{
        url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${ApiKey}`
        fetch(url)
        .then((res) => res.json())
        .then((data)=>{
            console.log(data)
            let {name}=data
            let {description,icon}=data.weather[0]
            let {feels_like} = data.main
            let {speed} = data.wind
            let {country} = data.sys

            // change the details of weather dynamic
            city.innerText = name
            desEle.innerText = description
            iconele.src = `https://openweathermap.org/img/wn/${icon}@2x.png`
            tempele.innerHTML = `<span class="Temp display-3">${Math.round(feels_like-273)}<span class="deg">&deg;</span>c</span>`
            windEle.innerHTML = `<li class="list-group-item wind">Wind: ${speed}km/h</li>` 
            countryEle.innerHTML = `<li class="list-group-item country">Country: ${country}</li>`
        })
    }
})
