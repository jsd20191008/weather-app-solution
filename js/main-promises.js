$(function () {
  $('#search').submit((event) => {
    event.preventDefault()
    console.log('submitting')
    const query = $('#query').val()

    processRequest(query)
    clearField()
  })

  function displayResults (weatherData) {
    console.log('data in displayResults:', weatherData)

    const mainTemp = weatherData.main.temp
    let tempClass

    // assign class based on temperature
    if (mainTemp > 90) {
      tempClass = 'hot'
    } else if (mainTemp < 40) {
      tempClass = 'cold'
    } else {
      tempClass = ''
    }

    // Print out city data
    $('#city-data').html(`
      <p class="weather ${tempClass}">current temp: ${mainTemp}</p>

      <p>name: ${weatherData.name}</p>

      <p>
        current description: ${weatherData.weather[0].description}
      </p>

      <p>Min Temp: ${weatherData.main.temp_min}</p>

      <p>Max Temp: ${weatherData.main.temp_max}</p>
    `)
  }

  function processRequest (query) {
    // 1. make an API request to OpenWeather (with city)
    openWeatherApi(query)
      .then((response) => {
        displayResults(response)
      }).catch((error) => {
        // es6 syntax
        console.log(error)
      })
  }

  function openWeatherApi (query) {
    const url = 'https://api.openweathermap.org/data/2.5/weather'
    const apiKey = 'add_your_api_key_here'

      // check if user submitted a city name
      // or a zip code
    let requestParams

    if (isNaN(query)) {
      requestParams = {
        q: query,
        appid: apiKey,
        units: 'imperial' // <-- instructs API to return temp in Fahrenheit
      }
    } else {
      requestParams = {
        zip: query,
        appid: apiKey,
        units: 'imperial' // <-- instructs API to return temp in Fahrenheit
      }
    }

      // make api request using axios
    return axios.get(url, {
      params: requestParams
    })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
    })
  }

  function clearField () {
    $('#query').val('')
  }
})
