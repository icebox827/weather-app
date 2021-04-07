const api = async (city) => {
  const key = '537fc8e3a71f25b7c88777911464f3c4';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
  const response = await fetch(url, { mode: 'cors' }).then(e => e.json()); 
  console.log(response);
  console.log(response.name);
  console.log(response.sys.country);
  console.log(response.weather[0].description);
  console.log(response.main.temp);
  console.log(response.main.humidity);
  console.log(response.main.pressure);
  return response
};

export default api;