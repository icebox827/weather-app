const api = (() => {
  const key = '537fc8e3a71f25b7c88777911464f3c4';
  const myData = {};

  const getData = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    console.log(url);
    console.log(city);
    const response = await fetch(url, { mode: 'cors' });  
    
    try {
      const myJson = await response.json();

      myData.name = myJson.name;
      myData.country = myJson.sys.country;
      myData.temp = myJson.main.temp
      myData.weather = myJson.weather[0].descrption;
      myData.maxTemp = myJson.main.temp_max;
      myData.minTemp = myJson.main.temp_min;
      myData.pressure = myJson.main.pressure;
      myData.humidity = myJson.main.humidity;
      myData.visibility = myJson.visibility;
      myData.windSpeed = myJson.wind.speed;
      myData.winDeg = myJson.wind.deg;
      myData.cloud = myJson.cloud.all;
      myData.sunRise = myJson.sys.sunrise;
      myData.sunSet = myJson.sys.sunset;
    } catch (error) {
      if(myJson.cod === '404') {
        return error;
      }
    }
  };

  return {getData, myData};
})();

export default api;