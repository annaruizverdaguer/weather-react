import "./App.css";
import Search from "./Search";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
      {/* FIX THIS  */}
      {/* <FontAwesomeIcon icon="fa-solid fa-cloud-bolt" />*/}

      <h1 className="main-title">Weather Forecast</h1>

      <Search />

      <a
        href="https://github.com/annaruizverdaguer/weather-react"
        className="git-repo-source"
      >
        Github repo link
      </a>
    </div>
  );
}

export default App;
