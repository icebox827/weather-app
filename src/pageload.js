import { format } from 'node:path';
import api from './api';

function header() {
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const name = document.createElement('h1');

  nav.classList.add('navbar');
  name.innerHTML = 'UHM Weather Forecast';

  nav.appendChild(name);
  header.appendChild(navBar);

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

  cityLabel.setAttribute('for', 'City');
  cityInput.setAttribute('type', 'text');
  cityInput.setAttribute('id', 'cityInput');
  cityInput.setAttribute('name', 'City');
  cityInput.setAttribute('placeholer', 'Please enter the name of a city.');

  cityLabel.innerHTML = '<h2>City name</h2>';

  main.appendChild(form);
  form.appendChild(cityLabel);
  form.appendChild(cityInput);

  return main;
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