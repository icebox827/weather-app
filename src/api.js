const api = (() => {
  const key = '537fc8e3a71f25b7c88777911464f3c4';
  const data = {};

  const getData = async (city) => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${key}`, { mode: 'cors' });
  }
})();