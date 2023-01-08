import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ loaded: false });
  let [error, setError] = useState(false);
  const apiKey = "0ebc654fccbc00189d5408f3d6f15b08";
  const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
  let params = `?q=${props.city}&units=metric&appid=${apiKey}`;

  useEffect(() => {
    setWeatherData({ loaded: false });
  }, [props.city]);

  function capitalizeCity(city) {
    let capCity = "";

    if (city.split(" ").length > 1) {
      let words = city.split(" ");
      let capWords = [];
      words.forEach(function (word) {
        let capWord = word.charAt(0).toUpperCase() + word.slice(1);
        capWords.push(capWord);
      });
      capCity = capWords.join(" ");
    } else {
      capCity = city.charAt(0).toUpperCase() + city.slice(1);
    }
    return capCity;
  }

  function handleResponse(response) {
    if (response.status === 200) {
      let iconCode = response.data.weather[0].icon;
      let desc = response.data.weather[0].description;
      let descriptionCapitalized = desc.charAt(0).toUpperCase() + desc.slice(1);
      setWeatherData({
        loaded: true,
        temperature: Math.round(response.data.main.temp),
        description: descriptionCapitalized,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        icon: `https://openweathermap.org/img/wn/${iconCode}@2x.png`,
      });
    } else {
      setError(true);
    }
  }
  if (weatherData.loaded) {
    return (
      <div className="weather-component">
        <h4>Current weather:</h4>
        <img src={weatherData.icon} alt="Current Weather Icon" />
        <p className="weather-temperature">{weatherData.temperature}°C</p>
        <h3 className="weather-city">{capitalizeCity(props.city)}</h3>
        <p className="weather-description">{weatherData.description}</p>
        <p className="weather-more-info">
          Humidity:{" "}
          <span className="weather-value">{weatherData.humidity}%</span>, Wind:{" "}
          <span className="weather-value">{weatherData.wind}m/s</span>
        </p>
      </div>
    );
  } else {
    if (error) {
      return <p>Something went wrong, please try again.</p>;
    }
    axios.get(baseUrl + params).then((response) => handleResponse(response));
    return <p>Loading weather for {capitalizeCity(props.city)}...</p>;
  }
}
