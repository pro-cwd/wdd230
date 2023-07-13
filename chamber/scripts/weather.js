const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#description');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.74&lon=6.63&units=metric&appid=1ce02409f68cb2fb2a0f889799ee056a'

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}
apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`
    let desc = data.weather[0].description
    let icon = data.weather[0].icon
    const iconsrc = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    weatherIcon.setAttribute('src', iconsrc)
    weatherIcon.setAttribute('alt', 'clear sky')
    captionDesc.textContent = `${desc}`
}

// weather forecast
window.addEventListener('DOMContentLoaded', () => {
    const apiKey = '1ce02409f68cb2fb2a0f889799ee056a';
    const lat = '-0.9333';
    const lon = '-79.2167';
  
    const forecastContainer = document.getElementById('forecast-container');
  
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}&cnt=1&*3`)
        .then(response => response.json())
        .then(data => {
        const forecastList = data.list;
        const forecastDays = {};
  
        // Group forecast data by day
        forecastList.forEach(forecast => {
            const date = new Date(forecast.dt_txt);
            const day = date.toLocaleDateString('es-EC', { weekday: 'long' });
            console.log(day)
  
            if (!forecastDays[day]) {
            forecastDays[day] = [];
            }
  
            forecastDays[day].push(forecast);
        });
  
        // Display forecast for each day
        Object.entries(forecastDays).forEach(([day, forecasts]) => {

            const forecastDay = document.createElement('div');
            forecastDay.className = 'forecast-day';
  
            const heading = document.createElement('h4');
            heading.textContent = day;
            forecastDay.appendChild(heading);

            forecasts.forEach(forecast => {
            const temperature = forecast.main.temp.toFixed(1);
            const description = forecast.weather[0].description;
                
            const forecastInfo = document.createElement('p');
            forecastInfo.textContent = `${temperature}°C - ${description}`;
  
            forecastDay.appendChild(forecastInfo);
            });
                forecastContainer.appendChild(forecastDay);
        });
      })
      .catch(error => {
        console.error('Error:', error);
        forecastContainer.textContent = 'An error occurred while fetching the forecast.';
      });
  });
  

