import Search from './components/Search';
import './App.css'

function App() {
  const handleOnSearchChange = (serachData) => {
    console.log(serachData);
  }
  return (
    <div className="container">
      <Search OnSearchChange={handleOnSearchChange}></Search>
    </div>
  );
}

export default App;
