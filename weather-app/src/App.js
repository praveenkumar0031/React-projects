//import logo from './logo.svg';
import Search from './components/search/search';
import './App.css';

function App() {
  const handleOnSearchchange=(searchData)=>{
    console.log(searchData);
  }
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchchange}/>
    </div>
  );
}

export default App;
