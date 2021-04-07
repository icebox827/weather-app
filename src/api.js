const api = async (city) => {
  const key = '537fc8e3a71f25b7c88777911464f3c4';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
  const response = await fetch(url, { mode: 'cors' }).then(e => e.json()); 
  
  return response
};

export default api;