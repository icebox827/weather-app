const api = (() => {
  const key = '537fc8e3a71f25b7c88777911464f3c4';
  const data = {};

  const getData = async (city) => {
    const response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`, { mode: 'cors' });
  }
})();