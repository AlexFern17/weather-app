import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate.js";
import WeatherInfo from "./WeatherInfo.js";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

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

  if (ready) {
    return (
      <div className="Weather">
        <WeatherInfo data={weatherData} />
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
