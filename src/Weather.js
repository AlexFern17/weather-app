import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="weatherContainer">
        <div className="row">
          <div className="col-9">Search form</div>
          <div className="col-3">Submit button</div>
        </div>
        <div className="row">
          <div className="col-3">88°C</div>
          <div className="col-6">
            <ul>
              <li>Precipitation</li>
              <li>Humidity</li>
              <li>Wind</li>
            </ul>
          </div>
          <div className="col-3">
            <ul>
              <li>Location</li>
              <li>Date</li>
              <li>Condition</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
