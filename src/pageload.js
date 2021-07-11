import api from './api';

function header() {
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const name = document.createElement('h1');

  nav.classList.add('navbar');
  name.innerHTML = 'My Open Weather<i class="fas fa-cloud-sun"></i>';

  nav.appendChild(name);
  header.appendChild(nav);

  return header;
}

function main() {
  const main = document.createElement('main');
  const form = document.createElement('form');
  const cityLabel = document.createElement('label');
  const cityInput = document.createElement('input');
  const searchBtn = document.createElement('button');
  const card = document.createElement('card');
  const cardTitle = document.createElement('div');
  const cardSubtitle = document.createElement('div');
  const cardText = document.createElement('div');
  const city = document.createElement('h3');
  const country = document.createElement('h4');
  const weather = document.createElement('h5');
  const icon = document.createElement('img');
  const temperatureLabel = document.createElement('h5');
  const temperature = document.createElement('h5');
  const minTemperatureLabel = document.createElement('h5');
  const minTemperature = document.createElement('h5');
  const maxTemperatureLabel = document.createElement('h5');
  const maxTemperature = document.createElement('h5');
  const pressureLabel = document.createElement('h5');
  const pressure = document.createElement('h5');
  const humidityLabel = document.createElement('h5');
  const humidity = document.createElement('h5');

  main.classList.add('main');
  main.setAttribute('id', 'main');

  form.setAttribute('id', 'myForm');

  cityLabel.classList.add('form-label');
  cityLabel.setAttribute('for', 'city');

  cityInput.classList.add('form-input');
  cityInput.setAttribute('type', 'text');
  cityInput.setAttribute('name', 'city');
  cityInput.setAttribute('id', 'cityInput');
  cityInput.setAttribute('placeholder', 'Enter location');

  searchBtn.classList.add('submit', 'btn-primary');
  searchBtn.setAttribute('type', 'submit');
  searchBtn.setAttribute('value', 'Search');
  searchBtn.setAttribute('id', 'button');

  card.classList.add('card');
  cardTitle.classList.add('card-title');
  cardSubtitle.classList.add('card-subtitle');
  cardText.classList.add('card-text');
  icon.classList.add('image');
  temperatureLabel.classList.add('temp');
  minTemperatureLabel.classList.add('minTemp');
  maxTemperatureLabel.classList.add('maxTemp');
  pressureLabel.classList.add('pres');
  humidityLabel.classList.add('hum');

  city.setAttribute('id', 'city');
  country.setAttribute('id', 'country');
  icon.setAttribute('id', 'icon');
  weather.setAttribute('id', 'weather');
  temperature.setAttribute('id', 'temperatute');
  minTemperature.setAttribute('id', 'minTemperature');
  maxTemperature.setAttribute('id', 'maxTemperature');
  pressure.setAttribute('id', 'pressure');
  humidity.setAttribute('id', 'humidity');

  cityLabel.innerHTML = '<h2>Enter city</h2>';
  cityInput.innerHTML = '<i class="fa fa-search"></i>';
  searchBtn.innerHTML = 'Search location';
  temperatureLabel.innerHTML = 'Temperature C <i class="fas fa-thermometer-half"></i>';
  minTemperatureLabel.innerHTML = 'Min temperature <i class="fas fa-thermometer-half"></i>';
  maxTemperatureLabel.innerHTML = 'Max Temperature <i i class="fas fa-thermometer-half"></i>';
  pressureLabel.innerHTML = 'Pressure hPa <i class="fas fa-tachometer-alt"></i>';
  humidityLabel.innerHTML = 'Humidity % <i class="fas fa-tint"></i>';

  form.appendChild(cityLabel);
  form.appendChild(cityInput);
  form.appendChild(searchBtn);
  cardTitle.appendChild(city);
  cardSubtitle.appendChild(country);
  cardText.appendChild(icon);
  cardText.appendChild(weather);
  cardText.appendChild(temperatureLabel);
  cardText.appendChild(temperature);
  cardText.appendChild(minTemperatureLabel);
  cardText.appendChild(minTemperature);
  cardText.appendChild(maxTemperatureLabel);
  cardText.appendChild(maxTemperature);
  cardText.appendChild(pressureLabel);
  cardText.appendChild(pressure);
  cardText.appendChild(humidityLabel);
  cardText.appendChild(humidity);
  card.appendChild(cardTitle);
  card.appendChild(cardSubtitle);
  card.appendChild(cardText);
  main.appendChild(form);
  main.appendChild(card);

  searchBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    if (cityInput.value === ' ') return;
    const fetchdata = await api(cityInput.value || 'London');
    showData(fetchdata);
  });

  return main;
}

const showData = (myData) => {
  const cityData = document.getElementById('city');
  const countryData = document.getElementById('country');
  const iconData = document.getElementById('icon');
  const weatherData = document.getElementById('weather');
  const temperatureData = document.getElementById('temperature');
  const minTemperatureData = document.getElementById('minTemperature');
  const maxTemperatureData = document.getElementById('maxTemperature');
  const pressureData = document.getElementById('pressure');
  const humidityData = document.getElementById('humidity');

  cityData.innerHTML = myData.name;
  countryData.innerHTML = myData.sys.country;
  iconData.innerHTML = myData.weather[0].icon;
  weatherData.innerHTML = myData.weather[0].description;
  temperatureData.innerHTML = myData.main.temp;
  minTemperatureData.innerHTML = myData.main.temp_min;
  maxTemperatureData.innerHTML = myData.main.temp_max;
  pressureData.innerHTML = myData.main.pressure;
  humidityData.innerHTML = myData.main.humidity;
};

function footer() {
  const footer = document.createElement('footer');
  const copyright = document.createElement('h5');
  const githubLink = document.createElement('a');
  const githubIcon = document.createElement('i');

  footer.classList.add('footer');

  copyright.innerHTML = 'Built with <i class="fa fa-heart"></i> by <em>Denis Lafontant</em> <i class="fa fa-copyright"></i>2021';
  githubLink.href = 'https://github.com/icebox827';

  githubIcon.classList.add('fab');
  githubIcon.classList.add('fa-github');

  githubLink.appendChild(githubIcon);
  footer.appendChild(githubLink);
  footer.appendChild(copyright);

  return footer;
}

async function loadPage() {
  const content = document.getElementById('content');
  const fetchdata = await api('London');

  content.appendChild(header());
  content.appendChild(main());
  (showData(fetchdata));
  content.appendChild(footer());
}

export default loadPage;
