import logo from "./logo.svg";
import MoviesList from "./MoviesList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <div>
          <h1 className="text">The movies List </h1>
          <h4 className="text">This a Totaly random list </h4>
          <img alt="image here " src="111" className="Listimge" />
        </div>
        <div>
          <MoviesList />
        </div>
      </div>
    </div>
  );
}

export default App;
