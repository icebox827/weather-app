import api from './api';

function header() {
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const name = document.createElement('h1');

  nav.classList.add('navbar');
  name.innerHTML = 'UHM Weather Forecast<i class="fas fa-cloud-sun"></i>';

  nav.appendChild(name);
  header.appendChild(nav);

  return header;
}

function main() {
  const main = document.createElement('main');
  main.classList.add('main');
  main.setAttribute('id', 'main');

  const form = document.createElement('form');
  form.setAttribute('id', 'myForm');

  const cityLabel = document.createElement('label');
  const cityInput = document.createElement('input');
  const searchBtn = document.createElement('button');

  cityLabel.setAttribute('for', 'City');
  cityLabel.classList.add('form-label');
  cityInput.setAttribute('type', 'text');
  cityInput.setAttribute('id', 'cityInput');
  cityInput.setAttribute('name', 'City');
  cityInput.setAttribute('placeholder', 'Enter the name of a city.');

  searchBtn.setAttribute('id', 'button');
  searchBtn.setAttribute('type', 'submit');
  searchBtn.setAttribute('value', 'Search');
  searchBtn.classList.add('submit', 'btn-primary');

  cityLabel.innerHTML = '<h2>City name</h2>';
  cityInput.innerHTML = '<i class="fa fa-search" aria-hidden="true"></i>';
  searchBtn.innerHTML = 'Search location';

  const card = document.createElement('card');
  const cardCity = document.createElement('h3');
  const cardCountry = document.createElement('h4');
  const cardWeather = document.createElement('h5');
  const cardTempLabel = document.createElement('h5');
  const cardTemp = document.createElement('h5');
  const cardHumLabel = document.createElement('h5');
  const cardHumidity = document.createElement('h5');
  const cardPresLabel = document.createElement('h5');
  const cardPressure = document.createElement('h5');

  card.classList.add('card');
  cardTempLabel.classList.add('temp');
  cardHumLabel.classList.add('hum');
  cardPresLabel.classList.add('pres');

  cardTempLabel.innerHTML = 'Temperature';
  cardHumLabel.innerHTML = 'Humidity';
  cardPresLabel.innerHTML = 'Pressure';

  cardCity.setAttribute('id', 'city');
  cardCountry.setAttribute('id', 'country');
  cardWeather.setAttribute('id', 'weather');
  cardTemp.setAttribute('id', 'temp');
  cardHumidity.setAttribute('id', 'humidity');
  cardPressure.setAttribute('id', 'pressure');

  card.appendChild(cardCity);
  card.appendChild(cardCountry);
  card.appendChild(cardWeather);
  card.appendChild(cardTempLabel);
  card.appendChild(cardTemp);
  card.appendChild(cardHumLabel);
  card.appendChild(cardHumidity);
  card.appendChild(cardPresLabel);
  card.appendChild(cardPressure);

  form.appendChild(cityLabel);
  form.appendChild(cityInput);
  form.appendChild(searchBtn);
  main.appendChild(form);
  main.appendChild(card);

  searchBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    if (cityInput.value === ' ') return;
    const fetchData = await api(cityInput.value || 'Quebec');
    showData(fetchData);
  });

  return main;
}

const showData = (myData) => {
  const city = document.getElementById('city');
  const country = document.getElementById('country');
  const weather = document.getElementById('weather');
  const temperature = document.getElementById('temp');
  const humidity = document.getElementById('humidity');
  const pressure = document.getElementById('pressure');

  city.innerHTML = myData.name;
  country.innerHTML = myData.sys.country;
  weather.innerHTML = myData.weather[0].description;
  temperature.innerHTML = myData.main.temp;
  humidity.innerHTML = myData.main.humidity;
  pressure.innerHTML = myData.main.pressure;
};

function footer() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const copyright = document.createElement('p');
  copyright.innerHTML = 'Copyright © 2021 Denis Lafontant';

  const githubLink = document.createElement('a');
  githubLink.href = 'https://github.com/icebox827';

  const githubIcon = document.createElement('i');
  githubIcon.classList.add('fab');
  githubIcon.classList.add('fa-github');

  githubLink.appendChild(githubIcon);
  footer.appendChild(copyright);
  footer.appendChild(githubLink);

  return footer;
}

async function loadPage() {
  const content = document.getElementById('content');
  const fetchData = await api('Quebec');

  content.appendChild(header());
  content.appendChild(main());
  (showData(fetchData));
  content.appendChild(footer());
}

export default loadPage;