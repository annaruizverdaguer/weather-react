import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>

      <h3>Enter a city to know the current temperature</h3>

      <Search />
      <a href="https://github.com/annaruizverdaguer/weather-react">
        Github repo link
      </a>
    </div>
  );
}

export default App;
