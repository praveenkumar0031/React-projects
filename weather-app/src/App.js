import { useState } from 'react';
import Search from './components/search/search';
import './App.css';
import CurrentWeather from './components/current-weather/current-weather';
import { weather_Api_Url, weather_Api_Key } from './api';

function App() {
  const [currentWeather, SetCurrentWeather] = useState(null);
  const [forecast, SetForeCast] = useState(null);

  const handleOnSearchchange = (searchData) => {
    //console.log(searchData);
    const [lat, lon] = searchData.value.split(" ");

    const CurrentWeatherFetch = fetch(`${weather_Api_Url}/weather?lat=${lat}&lon=${lon}&appid=${weather_Api_Key}&units=metric`);
    const ForecastFetch = fetch(`${weather_Api_Url}/forecast?lat=${lat}&lon=${lon}&appid=${weather_Api_Key}&units=metric`);

    Promise.all([CurrentWeatherFetch, ForecastFetch]).then(async (response) => {
      const WeatherResponse = await response[0].json();
      const ForecastResponse = await response[1].json();

      SetCurrentWeather({ city: searchData.label, ...WeatherResponse });
      SetForeCast({ city: searchData.label, ...ForecastResponse });

    })
      .catch((err) => console.log(err));
  }
  console.log(currentWeather);
  console.log(forecast);
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchchange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
    </div>
  );
}

export default App;
