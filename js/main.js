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

  async function processRequest (query) {
    try {
      // 1. make an API request to OpenWeather (with city)
      const weatherData = await openWeatherApi(query)

      // es6 syntax
      displayResults(weatherData)
    } catch (e) {
      console.log(e)
    }
  }

  async function openWeatherApi (query) {
    try {
      const url = 'https://api.openweathermap.org/data/2.5/weather'
      const apiKey = '07f23638c66ae86b6782afd4869accab'

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
      const response = await axios.get(url, {
        params: requestParams
      })

      console.log(response)
      return response.data
    } catch (e) {
      console.log(e)
    }
  }

  function clearField () {
    $('#query').val('')
  }
})
