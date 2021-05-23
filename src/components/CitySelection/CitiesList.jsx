import React from "react";
import cities from "./cities";
import { getValidCityName } from "./getValidCityName";

const CitiesList = ({ query, setCity, closeCitySelection }) => {
  const handleListingClick = (e) => {
    const cityName = e.target.innerText;
    setCity(getValidCityName(cityName));
    closeCitySelection();
  };

  return (
    <div className="cities-list">
      {cities
        .filter((city) => city.indexOf(query.toLowerCase()) === 0)
        .map((city, i) => (
          <span onClick={handleListingClick} key={i}>
            {city}
          </span>
        ))}
    </div>
  );
};

export default CitiesList;
