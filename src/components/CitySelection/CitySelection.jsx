import React, { useState } from "react";
import cities from "./cities";
import { getValidCityName } from "./getValidCityName";
import CitiesList from "./CitiesList";

import "./city-selection.css";

const CitySelection = ({ closeCitySelection, setCity }) => {
  const [query, setQuery] = useState("");
  const [isListing, setListing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query === "") setCity((prevCity) => prevCity);
    else setCity(getValidCityName(query));
    closeCitySelection();
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (!cities.includes(value) && value.length > 0) setListing(true);
    if (value === "" || cities.includes(value)) setListing(false);
    setQuery(value);
  };

  return (
    <div className="left-header">
      <form onSubmit={handleSubmit} className={`select-city`}>
        <input
          placeholder="Петропавловск-Камчатский"
          value={query}
          autoFocus={true}
          onChange={handleChange}
        />
        {isListing ? (
          <CitiesList
            query={query}
            setCity={setCity}
            closeCitySelection={closeCitySelection}
          />
        ) : (
          ""
        )}
        <button type="submit">OK</button>
      </form>
    </div>
  );
};

export default CitySelection;
