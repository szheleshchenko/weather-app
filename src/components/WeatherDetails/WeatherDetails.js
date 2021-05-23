import React from "react";
import "./WeatherDetails.css";

const detailsUnits = {
  wind_speed: {
    name: "Ветер",
    unit: " м/с",
  },
  humidity: {
    name: "Влажность",
    unit: "%",
  },
  pressure: {
    name: "Давление",
    unit: " мм рт. ст.",
  },
  rain_chance: {
    name: "Вероятность дождя",
    unit: "%",
  },
};

const WeatherDetails = ({ name, detail }) => {
  return (
    <div className="weather-detail">
      <span className="detail-name">{detailsUnits[name].name}</span>
      <span className="detail">{detail + detailsUnits[name].unit}</span>
    </div>
  );
};

export default WeatherDetails;
