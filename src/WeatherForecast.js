import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let city = props.city;
  const [ready, setReady] = useState(false);
  const [forecastData, setForecastData] = useState();

  useEffect(() => {
    setReady(false);
  }, [props.city]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecastData.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let forecastKey = `097041f091d320fa0aa8fbb43t7o1142`;
    let forecastURL = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${forecastKey}`;
    axios.get(forecastURL).then(handleResponse);

    return null;
  }
}
