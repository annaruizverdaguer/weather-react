import React, { useState } from "react";
import axios from "axios";

import Weather from "./Weather.js";

export default function Search() {
  const [city, setCity] = useState("");
  const [information, setInformation] = useState("");
  const apiKey = "0ebc654fccbc00189d5408f3d6f15b08";
  const reverseGeoUrl = "https://api.openweathermap.org/geo/1.0/reverse?";

  function handleSubmit(event) {
    event.preventDefault();
    if (city.length > 0) {
      setInformation(<Weather city={city} temp="null" />);
    } else {
      setInformation(<p>Please enter a city name.</p>);
    }
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  function callWeatherComponent(city) {
    console.log(city);
    setCity(city);
    setInformation(<Weather city={city} temp="null" />);
  }

  function getCityFromCoordinates(latitude, longitude) {
    let params = `&lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    axios
      .get(reverseGeoUrl + params)
      .then((response) => callWeatherComponent(response.data[0].name));
  }

  function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition((position) =>
      getCityFromCoordinates(
        position.coords.latitude,
        position.coords.longitude
      )
    );
  }

  return (
    <div>
      <h4>Search any city to know its weather</h4>
      <form onSubmit={handleSubmit}>
        <input type="input" onChange={changeCity} />
        <button type="submit"> Submit </button>
        <button type="button" onClick={getCurrentLocation}>
          Current Location
        </button>
        <div>{information}</div>
      </form>
    </div>
  );
}
