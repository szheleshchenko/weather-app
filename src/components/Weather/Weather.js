import React from "react";
import "./weather.css";
import sun from "../../assets/icons/sun.svg";
import rain from "../../assets/icons/rain.svg";
import storm from "../../assets/icons/storm.svg";
import cloud from "../../assets/icons/cloud.svg";
import partly_cloudy from "../../assets/icons/partly_cloudy.svg";

function getWeatherIcon(id) {
  if (id < 300) return storm;
  if (id < 700) return rain;
  if (id < 801) return sun;
  if (id === 801) return cloud;
  return partly_cloudy;
}

const Weather = ({ temp, description, unit, id }) => (
  <>
    <div className="weather">
      <img alt="sun" src={getWeatherIcon(id)} />
      {temp + `${unit === "celsius" ? "°" : "F"}`}
    </div>
    <span className="weather-description">
      {description[0].toUpperCase() + description.slice(1)}
    </span>
  </>
);

export default Weather;
