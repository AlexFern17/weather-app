import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo.js";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      city: response.data.city,
      feels_like: response.data.temperature.feels_like,
      temperature: response.data.temperature.current,
      condition: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon_url,
      time: new Date(response.data.time * 1000),
    });
    setReady(true);
  }

  function search() {
    const apiKey = "097041f091d320fa0aa8fbb43t7o1142";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function searchCity(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="weatherContainer">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                className="form-control form-control-lg"
                type="search"
                placeholder="Enter a city"
                label="searchBox"
                onChange={searchCity}
              />
            </div>
            <input
              type="submit"
              value="Search"
              className="col-3 btn btn-secondary"
            />
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
