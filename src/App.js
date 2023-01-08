import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div>
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
