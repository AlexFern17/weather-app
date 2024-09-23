import React, { useState } from "react";

export default function WeatherMetric(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsuis(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span className="degrees">
        <span className="temperature">{props.celsius}</span>
        <span className="unit align-text-top">
          °C /{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <span className="degrees">
        <span className="temperature">{fahrenheit}</span>
        <span className="unit align-text-top">
          <a href="/" onClick={showCelsuis}>
            °C{" "}
          </a>
          / °F
        </span>
      </span>
    );
  }
}
