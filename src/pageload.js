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
  form.setAttribute('id', 'myForm')

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
  searchBtn.setAttribute('value', 'Search')
  searchBtn.classList.add('submit', 'btn-primary');

  cityLabel.innerHTML = '<h2>City name</h2>';
  cityInput.innerHTML = '<i class="fa fa-search" aria-hidden="true"></i>'
  searchBtn.innerHTML = 'Search location';

  searchBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    if (cityInput.value === " ") return;
    const fetchData = await api.getData(cityInput.value);
    showData;
  });

  main.appendChild(form);
  form.appendChild(cityLabel);
  form.appendChild(cityInput);
  form.appendChild(searchBtn);

  return main;
}

const showData = (myData) => {
  const card = document.createElement('card');
  const cardName = document.createElement('h3');
  const cardCountry = document.createElement('h4');
  const cardTemperature = document.createElement('h6');
  const cardWeather = document.createElement('h6');
  const cardMaxTemp = document.createElement('h6');
  const cardMinTemp = document.createElement('h6');
  const cardPressure = document.createElement('h6');
  const cardHumidity = document.createElement('h6');
  const cardVisibility = document.createElement('h6');
  const cardWindSpeed = document.createElement('h6');
  const cardWinDeg = document.createElement('h6');
  const cardCloud= document.createElement('h6');
  const cardSunRise = document.createElement('h6');
  const cardSunSet = document.createElement('h6');

  cardName.innerHTML = `${myData.name}`;
  cardCountry.innerHTML = `${myData.country}`;
  cardTemperature.innerHTML = `${myData.temp}`;
  cardWeather.innerHTML = `${myData.weather}`;
  cardMaxTemp.innerHTML = `${myData.maxTemp}`;
  cardMinTemp.innerHTML = `${myData.minTemp}`;
  cardPressure.innerHTML = `${myData.pressure}`;
  cardHumidity.innerHTML = `${myData.humidity}`;
  cardVisibility.innerHTML = `${myData.visibility}`;
  cardWindSpeed.innerHTML = `${myData.windSpeed}`;
  cardWinDeg.innerHTML = `${myData.winDeg}`;
  cardCloud.innerHTML = `${myData.cloud}`;
  cardSunRise.innerHTML = `${myData.sunRise}`;
  cardSunSet.innerHTML = `${myData.sunSet}`;

  card.classList.add('card');

  card.appendChild(cardName);
  card.appendChild(cardCountry);
  card.appendChild(cardTemperature);
  card.appendChild(cardWeather);
  card.appendChild(cardMaxTemp);
  card.appendChild(cardMinTemp);
  card.appendChild(cardPressure);
  card.appendChild(cardHumidity);
  card.appendChild(cardVisibility);
  card.appendChild(cardWindSpeed);
  card.appendChild(cardWinDeg);
  card.appendChild(cardCloud);
  card.appendChild(cardSunRise);
  card.appendChild(cardSunSet);

  return card;
}

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

function loadPage () {
  const content = document.getElementById('content');

  content.appendChild(header());
  content.appendChild(main());
  content.appendChild(showData());
  content.appendChild(footer());
}

export default loadPage;