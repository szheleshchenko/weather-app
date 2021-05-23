import React from "react";
import "./city-name.css";
import location from "../../assets/icons/location.svg";

const CityName = ({ city, setCitySelection, setCity }) => {
  const handleClick = () => setCity("Омск");

  return (
    <div className="left-header">
      <h1 className="city-name">{city}</h1>
      <div className="sub-left-header">
        <span onClick={setCitySelection}>Сменить город</span>
        <span onClick={handleClick}>
          <img src={location} alt="my location" />
          Мое местоположение
        </span>
      </div>
    </div>
  );
};

export default CityName;
