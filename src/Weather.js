import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      city: response.data.city,
      feels_like: response.data.temperature.feels_like,
      temperature: response.data.temperature.current,
      condition: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon_url,
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <div className="weatherContainer">
          <div className="row">
            <div className="col-9">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Enter a city"
                label="searchBox"
              />
            </div>
            <div className="col-3 btn btn-secondary">Search</div>
          </div>
          <div className="row mt-3">
            <div className="col-4 degrees">
              <img src={weatherData.icon} />
              {Math.round(weatherData.temperature)}
              <span className="unit align-middle">°C</span>
            </div>
            <div className="col-5">
              <ul className="dataColumnOne">
                <li>Feels Like: {Math.round(weatherData.feels_like)}°C</li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} km/h</li>
              </ul>
            </div>
            <div className="col-3">
              <ul className="dataColumnTwo">
                <li className="cityName">{weatherData.city}</li>
                <li>Sun 1:00 PM</li>
                <li>{weatherData.condition}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "097041f091d320fa0aa8fbb43t7o1142";
    let city = "New York";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
