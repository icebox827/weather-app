const api = (() => {
  const key = '537fc8e3a71f25b7c88777911464f3c4';
  const data = {};

  const getData = async (city) => {
    const response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`, { mode: 'cors' });
    
    try {
      const jsonObj = await response.json();

      data.name = jsonObj.name;
      data.country = jsonObj.sys.country;
      data.temp = jsonObj.main.temp
      data.weather = jsonObj.weather[0].descrption;
      data.icon = jsonObj.weather[0].icon;
      data.maxTemp = jsonObj.main.temp_max;
      data.minTem = jsonObj.main.temp_min;
      data.pressure = jsonObj.main.pressure;
      data.humidity = jsonObj.main.humidity;
      data.visibility = jsonObj.visibility;
      data.windSpeed = jsonObj.wind.speed;
      data.winDeg = jsonObj.wind.deg;
      data.cloud = jsonObj.cloud.all;
      data.sunRise = jsonObj.sys.sunrise;
      data.sunSet = jsonObj.sys.sunset;
    } catch (error) {
      if(error.cod === '404') {
        data.cod = jsonObj.cod;
      }
    }
  };
  return {getData, data};
})();

export default api;