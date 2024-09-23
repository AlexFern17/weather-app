import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="day">{day()}</div>
      <div className="icon">
        <img src={props.data.condition.icon_url} alt="weather-icon" />
      </div>
      <div className="temps">
        <span className="minTemp">
          {Math.round(props.data.temperature.minimum)}°
        </span>{" "}
        <span className="maxTemp">
          {Math.round(props.data.temperature.maximum)}°
        </span>
      </div>
    </div>
  );
}
