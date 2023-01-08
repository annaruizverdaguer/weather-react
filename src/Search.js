import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

import DateTime from "./DateTime.js";
import Weather from "./Weather.js";
import Forecast from "./Forecast.js";

export default function Search() {
  const [city, setCity] = useState("");
  const [weatherComponent, setWeatherComponent] = useState("");
  const [information, setInformation] = useState("");
  const apiKey = "0ebc654fccbc00189d5408f3d6f15b08";
  const geoUrl = "https://api.openweathermap.org/geo/1.0/direct?";
  const reverseGeoUrl = "https://api.openweathermap.org/geo/1.0/reverse?";

  function getCoordinatesFromCity(city) {
    let params = `&q=${city}&appid=${apiKey}`;
    return axios.get(geoUrl + params);
  }

  function getCityFromCoordinates(latitude, longitude) {
    let params = `&lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    return axios.get(reverseGeoUrl + params);
  }

  function getWeatherAndForecastFromCity(event) {
    event.preventDefault();

    if (city.length > 0) {
      getCoordinatesFromCity(city).then((response) => {
        setWeatherComponent(
          <div>
            <Weather city={city} />
            <Forecast
              latitude={response.data[0].lat}
              longitude={response.data[0].lon}
              city={city}
            />
          </div>
        );
      });
    } else {
      setInformation(<p>Please enter a city name.</p>);
    }
  }

  function getWeatherAndForecastFromCoordinates(event) {
    event.preventDefault();

    getCurrentLocation()
      .then((position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        getCityFromCoordinates(latitude, longitude).then((response) => {
          let currentCity = response.data[0].name;
          setCity(currentCity);

          setWeatherComponent(
            <div>
              <Weather city={currentCity} />
              <Forecast
                latitude={latitude}
                longitude={longitude}
                city={currentCity}
              />
            </div>
          );
        });
      })
      .catch((err) => {
        console.log(err);
        setInformation(
          <p>We couldn't get a city name for your coordinates :/</p>
        );
      });
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  function callGeoLocationAPI() {
    return new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject)
    );
  }

  function getCurrentLocation() {
    return callGeoLocationAPI();
  }

  return (
    <div className="search">
      <h4 className="search-title">Search any city to know its weather</h4>
      <form onSubmit={getWeatherAndForecastFromCity}>
        <input
          type="input"
          onChange={changeCity}
          className="search-input"
          placeholder="Enter a city..."
        />
        <button type="submit" className="search-button search-submit">
          {" "}
          Submit{" "}
        </button>
        <button
          type="button"
          onClick={getWeatherAndForecastFromCoordinates}
          className="search-button search-current-location"
        >
          Current Location
        </button>
        <DateTime />
        <div>{information}</div>
        <div>{weatherComponent}</div>
      </form>
    </div>
  );
}
