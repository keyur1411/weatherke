import Search from './components/Search';
import './App.css'
import CurrentWeather from './components/current-weather';

function App() {
  const handleOnSearchChange = (serachData) => {
    console.log(serachData);
  }
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}></Search>
      <CurrentWeather></CurrentWeather>
    </div>
  );
}

export default App;
