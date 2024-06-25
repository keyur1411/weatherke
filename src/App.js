import Search from './components/Search';
import './App.css'
import CurrentWeather from './components/current-weather';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import { useState } from 'react';
import Forecast from './components/forecast'

function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);


  const handleOnSearchChange = (serachData) => {
    const [lat, lon] = serachData.value.split("");

    const CurrentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const WeatherForecast = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([CurrentWeatherFetch, WeatherForecast])
      .then(async (res) => {
        const WetherRes = await res[0].json();
        const ForecastRes = await res[1].json();
        setCurrentWeather({ city: serachData.label, ...WetherRes });
        setForecast({ city: serachData.label, ...ForecastRes });
      })
      .catch((err) => {
        console.log(err);
      })
  }
  console.log(currentWeather);
  console.log(forecast);
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}></Search>
      {currentWeather && <CurrentWeather data={currentWeather}></CurrentWeather>}
      {forecast && <Forecast data={forecast}></Forecast>}
    </div>
  );
}

export default App;
