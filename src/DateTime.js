import React from "react";

export default function DateTime() {
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let date = new Date();
  let day = week[date.getDay()];
  let hours = date.getHours();
  let minutes = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();

  return (
    <p>
      {day}, {hours}:{minutes}
    </p>
  );
}
