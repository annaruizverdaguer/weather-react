import React, { useState } from "react";

import Weather from "./Weather.js";

export default function Search() {
  const [city, setCity] = useState("Barcelona");
  const [information, setInformation] = useState("Search for a city!");

  function handleSubmit(event) {
    event.preventDefault();
    if (city.length > 0) {
      setInformation(<Weather city={city} temp="null" />);
    } else {
      setInformation("Please enter a city name.");
    }
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="input" onChange={changeCity} />
      <button type="submit"> Submit </button>
      <div>{information}</div>
    </form>
  );
}
