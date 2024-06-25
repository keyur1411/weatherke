import './current-weather.css'

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">
            Jamnagar
          </p>
          <p className="weather-description">
            Sunny
          </p>
        </div>
        <img alt='weather' className='weather-icon' src="icons/01d.png"></img>
      </div>
      <div className="bottom">
        <p className="temperature">18&#8451;</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Deatils</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels likes</span>
            <span className="parameter-value">22&#8451;</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">wind</span>
            <span className="parameter-value">2 m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">2%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">pressure</span>
            <span className="parameter-value">2 atm</span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;