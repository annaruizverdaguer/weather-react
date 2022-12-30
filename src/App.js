import "./App.css";
import Search from "./Search";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
      {/* FIX THIS  */}
      {/* <FontAwesomeIcon icon="fa-solid fa-cloud-bolt" />*/}

      {/* NEEDS OF THE PROJECT  */}
      {/* DONE: search location, current location  */}
      {/* TODO: show city name, date and time  */}
      {/* DONE: show weather description  */}
      {/* DONE: show weather icon  */}
      {/* DONE: show weather temperature  */}
      {/* TODO: show weather precipitation  */}
      {/* TODO: show weather wind  */}

      <h1>Weather Forecast</h1>

      <Search />

      <a href="https://github.com/annaruizverdaguer/weather-react">
        Github repo link
      </a>
    </div>
  );
}

export default App;
