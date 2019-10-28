# Build a Weather App

Here's an exciting challenge: You'll be building a small weather app, using your newfound skills with APIs!

***

## Instructions

#### Get an API Key for the OpenWeather API

For this lab you'll be using the Open Weather Data API. In order to use it, please follow these steps:

1. Sign up for a free [Open Weather Map](https://home.openweathermap.org/users/sign_up) account!

2. Once you've signed up, you're given an [API key](https://home.openweathermap.org/api_keys). Copy that API key and keep track of it somewhere!

3. Go to [OpenWeatherMap](http://openweathermap.org/api) and scroll down, you'll see a section that says "API Documentation."

4. Open Insomnia to check out the data you're working with and to verify that your api key works. Make a GET request to the following URL in Insomnia, adding your API key to the end.

5. Review these instructions on how you should structure your API requests: https://openweathermap.org/appid#use

```
https://api.openweathermap.org/data/2.5/weather?q=brooklyn&appid=[PUT YOUR API KEY HERE]

https://api.openweathermap.org/data/2.5/weather?zip=10010&appid=[PUT YOUR API KEY HERE]
```

#### ⚡️ Plan your implementation approach using pseudocode
If you find the assignment too challenging to complete, you can bet the first place to check is your pseudocode!

#### ⚡️ You need to make the following files to support the app:
- [ ] `main.js`
- [ ] `index.html`
- [ ] `style.css`

Note: The design of the app is totally up to you, we're mainly interested in the functionality

#### ⚡️ Your page should have:
- [ ] An **input field** for a user to enter a zip code or city name
- [ ] A **submit button**
- [ ] When the submit button is clicked:
    - [ ] A **GET** request should fetch the weather data from the OpenWeather API
    - [ ] The following data should be rendered to the page:
        - [ ] City name
        - [ ] Current temperature (displayed in Fahrenheit)
        - [ ] Weather description
        - [ ] Min temp
        - [ ] Max temp
- [ ] Have the temperature turn blue if under 40, and red if above 90.

Here are some zip codes / city names to test!

- 99501 (Anchorage)
- 99723 (Barrow, AK)
- 60605 (Chicago)
- 70124 (New Orleans)
- 77030 (Houston, TX)
- 00902 (San Juan, Puerto Rico)
- 46923 (Delphi, IN)
- 94123 (San Francisco, CA)

#### Tips

* Work smarter not harder, reference past work to get you started (see the Giphy API code along from lesson 08)

* Read the Open Weather API documentation, the documentation contains code examples that helps you figure out how to use the API
