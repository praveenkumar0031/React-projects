//import logo from './logo.svg';
import Search from './components/search/search';
import './App.css';
import CurrentWeather from './components/current-weather/current-weather';

function App() {
  
  const handleOnSearchchange=(searchData)=>{
    console.log(searchData);
  }
  return (
    <div className="container">
      <Search  onSearchChange={handleOnSearchchange}/>
      <CurrentWeather/>
    </div>
  );
}

export default App;
