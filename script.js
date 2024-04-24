const container = document.querySelector('.container');
const search = document.querySelector('#search-button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');

search.addEventListener('click', () => {
  const APIKey = '81dbc84bff3a6d9c67d3bdf5814232e2';
  const city = document.querySelector('#search-box').value;
  
  if (city === '') return;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then(response => response.json())
    .then(json => {
      const image = document.querySelector('.weather-box img');
      const temperature = document.querySelector('.weather-box .temperature');
      const description = document.querySelector('.weather-box .description');
      const humidity = document.querySelector('.weather-details .humidity span');
      const wind = document.querySelector('.weather-details .wind span');

      switch (json.weather[0].main) {
        case 'Clear':
          image.src = 'images/clear.webp';
          break;
        case 'Rain':
          image.src = 'images/rain1.webp';
          break;
        case 'Snow':
          image.src = 'images/snow.png';
          break;
        case 'Clouds':
          image.src = 'images/clouds.png';
          break;
        case 'Mist':
          image.src = 'images/mist.webp';
          break;
        case 'Haze':
          image.src = 'images/haze.png'; 
          break;
        default:
          image.src = 'images/cloudy.png';
      }

      temperature.innerHTML = `${parseInt(json.main.temp)}<span>℃</span>`;
      description.innerHTML =  `${json.weather[0].description}`;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
    });
});
