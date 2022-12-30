import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(props.temp);
  let [description, setDescription] = useState("");
  let [iconSrc, setIconSrc] = useState("");
  let [error, setError] = useState(false);
  const apiKey = "0ebc654fccbc00189d5408f3d6f15b08";
  const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
  let params = `?q=${props.city}&units=metric&appid=${apiKey}`;

  function handleResponse(response) {
    if (response.status === 200) {
      let iconCode = response.data.weather[0].icon;
      setIconSrc(`https://openweathermap.org/img/wn/${iconCode}@2x.png`);
      setDescription(response.data.weather[0].description);
      setTemperature(Math.round(response.data.main.temp));
    } else {
      setError(true);
    }
  }
  axios.get(baseUrl + params).then((response) => handleResponse(response));

  if (temperature && iconSrc) {
    return (
      <div>
        <h3>{props.city}</h3>
        <img src={iconSrc} alt="Current Weather Icon" />
        <p>{description}</p>
        <p>{temperature}°C</p>
      </div>
    );
  }
  if (error) {
    return <p>Something went wrong, please try again.</p>;
  }
  return <p>Loading temperature for {props.city}...</p>;
}
