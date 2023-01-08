import React from "react";
import "./ForecastCard.css";

export default function ForecastCard(props) {
  const iconSrc = `https://openweathermap.org/img/wn/${props.icon}@2x.png`;

  return (
    <div className="forecast-card">
      <div className="forecast-day">{props.day}</div>
      <img
        className="forecast-icon"
        src={iconSrc}
        alt="Forecast Weather Representative Icon"
      />
      <span className="forecast-max-temp">{props.maxTemp}º</span>
      <span className="forecast-min-temp">{props.minTemp}º</span>
    </div>
  );
}
