import React from "react";
import "./temperature-units.css";

const TemperatureUnits = ({ unit, setUnit }) => {
  const changeUnit = ({ target }) => {
    if (target.innerText === "C") setUnit("celsius");
    if (target.innerText === "F") setUnit("fahrenheit");
  };

  return (
    <div className="right-header">
      <div className={`unit ${unit}`}>
        <button onClick={changeUnit}>C</button>
        <button onClick={changeUnit}>F</button>
      </div>
    </div>
  );
};

export default TemperatureUnits;
