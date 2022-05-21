/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";


// getlatlong =  (city)=>{
//   const lat ="http://api.openweathermap.org/geo/1.0/direct"
//     let full =`${lat}?q=${city}&limit=1&appid=${API_KEY}` 
//     console.log(full)

//     const k =  fetch(full).then((res)=> res.json()
//     ).then((data)=>{
  
//         return(data[0])
//     }).catch((e)=>{
//         console.log("e",e)
//     })
//     return k

// }

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city)=> {

    const URL = "http://api.openweathermap.org/data/2.5/weather"
    let finurl = `${URL}?q=${city}&appid=${API_KEY}`

    console.log(finurl)
    const k =  fetch(finurl).then((res)=> res.json()
    ).then((data)=>{
        print(data)
        return(data)
    }).catch((e)=>{
        console.log("e",e)
    })
    return k

  //HINT: Use template literals to create a url with input and an API key

  //CODE GOES HERE
}



/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
searchCity = async () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
  const l = await getWeatherData(city)
  console.log(l)
  showWeatherData(l)
}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
showWeatherData = (weatherData) => {
  //CODE GOES HERE
  document.getElementById('city-name').innerText = weatherData.name
  document.getElementById('weather-type').innerText = weatherData.weather[0].main

  document.getElementById('temp').innerText = weatherData.main.temp
  document.getElementById('min-temp').innerText = weatherData.main.temp_min
  document.getElementById('max-temp').innerText = weatherData.main.temp_max

  
}

