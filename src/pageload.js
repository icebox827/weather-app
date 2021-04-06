import api from './api';

function header() {
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const name = document.createElement('h1');

  nav.classList.add('navbar');
  name.innerHTML = 'UHM Weather Forecast';

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
  const searchBtn = document.createElement('button').addEventListener('click', async () => {
    if (cityInput.value === "") return;
    const weatherData = await api.getData(cityInput.value)
    
  });

  cityLabel.setAttribute('for', 'City');
  cityInput.setAttribute('type', 'text');
  cityInput.setAttribute('id', 'cityInput');
  cityInput.setAttribute('name', 'City');
  cityInput.setAttribute('placeholder', 'Please enter the name of a city.');

  // searchBtn.setAttribute('id', 'button');
  // searchBtn.setAttribute('type', 'submit');
  // searchBtn.classList.add('btn btn-success');

  cityLabel.innerHTML = '<h2>City name</h2>';
  cityInput.innerHTML = '<i class="fa fa-search" aria-hidden="true"></i>'

  main.appendChild(form);
  form.appendChild(cityLabel);
  form.appendChild(cityInput);
  // form.appendChild(searchBtn);

  return main;
}

function showData() {
  const card = document.createElement('card');
  const cardName = document.createElement('h3');
  const cardCountry = document.createElement('h4');
  const cardTemperature = document.createElement('h6');
  const cardWeather = document.createElement('h6');
  const cardIcon = document.createElement('img');
  const cardMaxTemp = document.createElement('h6');
  const cardMinTemp = document.createElement('h6');
  const cardPressure = document.createElement('h6');
  const cardHumidity = document.createElement('h6');
  const cardVisibility = document.createElement('h6');
  const cardWinSpeed = document.createElement('h6');
  const cardWinDeg = document.createElement('h6');
  const cardCloud= document.createElement('h6');
  const cardSunSet = document.createElement('h6');
  const cardSunSRise = document.createElement('h6');

  cardName.innerHTML = `${myData.name}`;

  card.classList.add('card');

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
  content.appendChild(footer());
}

export default loadPage;