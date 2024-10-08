import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="New York" />
        <footer className="App-footer">
          This application was coded by Alejandra Fernandez and is open sourced
          on <a href="https://github.com/AlexFern17/weather-app">Github</a>.
        </footer>
      </div>
    </div>
  );
}
