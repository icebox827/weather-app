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
  temperatureLabel.classList.add('temp');
  minTemperatureLabel.classList.add('minTemp');
  maxTemperatureLabel.classList.add('maxTemp');
  pressureLabel.classList.add('pres');
  humidityLabel.classList.add('hum');

  city.setAttribute('id', 'city');
  country.setAttribute('id', 'country');
  weather.setAttribute('id', 'weather');
  temperature.setAttribute('id', 'temperatute');
  minTemperature.setAttribute('id', 'minTemperature');
  maxTemperature.setAttribute('id', 'maxTemperature');
  pressure.setAttribute('id', 'pressure');
  humidity.setAttribute('id', 'humidity');

  cityLabel.innerHTML = '<h2>Enter city</h2>';
  cityInput.innerHTML = '<i class="fa fa-search"></i>';
  searchBtn.innerHTML = 'Search location';
  temperatureLabel.innerHTML = 'Temperature in Celsius<i class="fas fa-thermometer-half"></i>';
  minTemperatureLabel.innerHTML = 'Temperature in Celsius<i class="fas fa-thermometer-half"></i>';
  maxTemperatureLabel.innerHTML = 'Temperature in Celsius<i class="fas fa-thermometer-half"></i>';
  pressureLabel.innerHTML = 'Pressure hPa<i class="fas fa-tachometer-alt"></i>';
  humidityLabel.innerHTML = 'Humidity %<i class="fas fa-tint"></i>';

  form.appendChild(cityLabel);
  form.appendChild(cityInput);
  card.appendChild(cardTitle);
  card.appendChild(cardSubtitle);
  card.appendChild(cardText);
  main.appendChild(form);
  main.appendChild(card);

  return main;
}

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
  const fetchdata = await api('Quebec');

  content.appendChild(header());
  content.appendChild(main());
  content.appendChild(footer());
}

export default loadPage;

//   card.appendChild(cardCity);
//   card.appendChild(cardCountry);
//   card.appendChild(cardWeather);
//   card.appendChild(cardTempLabel);
//   card.appendChild(cardTemp);
//   card.appendChild(cardHumLabel);
//   card.appendChild(cardHumidity);
//   card.appendChild(cardPresLabel);
//   card.appendChild(cardPressure);

//   form.appendChild(cityLabel);
//   form.appendChild(cityInput);
//   form.appendChild(searchBtn);
//   main.appendChild(form);
//   main.appendChild(card);

//   searchBtn.addEventListener('click', async (e) => {
//     e.preventDefault();
//     if (cityInput.value === ' ') return;
//     const fetchData = await api(cityInput.value || 'Quebec');
//     showData(fetchData);
//   });

//   return main;
// }

// const showData = (myData) => {
//   const city = document.getElementById('city');
//   const country = document.getElementById('country');
//   const weather = document.getElementById('weather');
//   const temperature = document.getElementById('temp');
//   const humidity = document.getElementById('humidity');
//   const pressure = document.getElementById('pressure');

//   city.innerHTML = myData.name;
//   country.innerHTML = myData.sys.country;
//   weather.innerHTML = myData.weather[0].description;
//   temperature.innerHTML = myData.main.temp;
//   humidity.innerHTML = myData.main.humidity;
//   pressure.innerHTML = myData.main.pressure;
// };

// async function loadPage() {
//   const content = document.getElementById('content');
//   const fetchData = await api('Quebec');

//   content.appendChild(header());
//   content.appendChild(main());
//   (showData(fetchData));
//   content.appendChild(footer());
// }

// export default loadPage;