import React from "react";
import "./Weather.css";

export default function Weather() {
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
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAQBJREFUaN7t2csNwyAMBmBGYYSMwhgdgxEYjRW6ARu4HNyqB0CKednElf5b2/hLSALGAICRHKMABSjgUMDdD7xfLifkxByoJOJ33O3/nwHIhVgsKDWKriXhb+0WQD6wJxZegvhlADzrcUDhpeFlpwLyAa5BZ711Na4pgAXFNxFdABw2K4r/R9iRgLiw+N89MQSATxvYFN8F2DB0qkOJCggbi/8m9AASA0AiAXBuA0ziKIDACBAogMgIECkAYBUFKEABzwOIf4yKf5HJnkqIn8wxmk775y5oxC8pj1jUH9FWEd/YOqK1eERz94j2euFqUCF7NzjYbzHpLqUCFKCAJfkAq7RimK7qUtAAAAAASUVORK5CYII=" />
            88<span className="unit align-top">°C</span>
          </div>
          <div className="col-5">
            <ul className="dataColumnOne">
              <li>Precipitation: 0%</li>
              <li>Humidity: 54%</li>
              <li>Wind: 6 mph</li>
            </ul>
          </div>
          <div className="col-3">
            <ul className="dataColumnTwo">
              <li className="cityName">Red Oak</li>
              <li>Sun 1:00 PM</li>
              <li>Sunny</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
