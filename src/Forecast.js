import React, { useEffect, useState } from "react";
import axios from "axios";
import ForecastCard from "./ForecastCard";

export default function Forecast(props) {
  let [printInfo, setPrintInfo] = useState(null);
  let [loaded, setLoaded] = useState(false);
  const apiKey = "0ebc654fccbc00189d5408f3d6f15b08";
  const baseUrl = "https://api.openweathermap.org/data/2.5/";
  let params = `onecall?lat=${props.latitude}&lon=${props.longitude}&exclude=minutely,hourly&units=metric&appid=${apiKey}`;
  let week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  function handleResponse(response) {
    let forecastContainer = [];
    for (let i = 1; i < 6; i++) {
      let date = new Date(response[i].dt * 1000);
      let day = week[date.getDay()];
      let icon = response[i].weather[0].icon;
      let maxTemp = Math.round(response[i].temp.max);
      let minTemp = Math.round(response[i].temp.min);

      forecastContainer.push(
        <ForecastCard
          day={day}
          icon={icon}
          maxTemp={maxTemp}
          minTemp={minTemp}
        />
      );
    }
    setPrintInfo(forecastContainer);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="forecast-wrapper">
        <h4>Forecast for the following days:</h4>
        {printInfo}
      </div>
    );
  } else {
    axios.get(baseUrl + params).then((response) => {
      handleResponse(response.data.daily);
    });
    return (
      <div className="forecast-wrapper">
        <h4>Forecast for the following days:</h4>
        <p>Loading forecast for {props.city}</p>
      </div>
    );
  }
}
