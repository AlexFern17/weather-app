import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          Mon
          <div className="icon">ICON</div>
          <div className="temps">
            <span className="minTemp">10°</span>
            <span className="maxTemp">19°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
