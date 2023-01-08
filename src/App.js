import "./App.css";
import Search from "./Search";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div>
      {/* FIX THIS  */}
      {/* <FontAwesomeIcon icon="fa-solid fa-cloud-bolt" />*/}
      <div className="App">
        <h1 className="main-title">Weather Forecast</h1>

        <Search />
      </div>
      <p className="footer">
        Coded by Anna Ruiz Verdaguer. Check the{" "}
        <a
          href="https://github.com/annaruizverdaguer/weather-react"
          className="git-repo-source"
        >
          source code
        </a>
        !
      </p>
    </div>
  );
}

export default App;
