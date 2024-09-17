import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfoContainer">
      <div className="row">
        <div className="col-4 degrees">
          <img src={props.data.icon} className="mt-3" alt="" />
          {Math.round(props.data.temperature)}
          <span className="unit align-text-top">°C</span>
        </div>
        <div className="col-5">
          <ul className="dataColumnOne mt-3">
            <li>Feels Like: {Math.round(props.data.feels_like)}°C</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
        <div className="col-3">
          <ul className="dataColumnTwo mt-3">
            <li className="cityName">{props.data.city}</li>
            <li>
              <FormattedDate date={props.data.time} />
            </li>
            <li className="text-capitalize">{props.data.condition}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
