import { useState, useEffect } from "react";

import CityName from "./components/CityName/CityName";
import CitySelection from "./components/CitySelection/CitySelection";
import TemperatureUnits from "./components/TemperatureUnits/TemperatureUnits";
import Weather from "./components/Weather/Weather";
import WeatherDetails from "./components/WeatherDetails/WeatherDetails";

const api_key = "9a6f39e33a6d6bf1caf30ead2e47e1b2";
const defaultWeather = {
  temp: 0, // Температура в °C.
  description: "Загружаю данные...", // Описание погоды, напр.: "Ясно", "Преимущественно солнечно".
  id: 800, // ID погоды, напр.: 500 - "Rain", 600 - "Snow", 800 - "Clear sky".
  details: {
    wind_speed: 0, // Скорость ветра в м/с.
    humidity: 0, // Влажность в %.
    pressure: 0, // Давление.
    rain_chance: 0, // Вероятность дождя.
  },
};

function WeatherApp() {
  const [isCitySelection, setCitySelection] = useState(false);
  const [city, setCity] = useState("Омск");
  const [unit, setUnit] = useState("celsius");
  const [weather, setWeather] = useState(defaultWeather);

  const temp =
    unit === "celsius"
      ? weather.temp.toFixed(0)
      : ((weather.temp * 9) / 5 + weather.temp).toFixed(0);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric&lang=ru`
    )
      .then((data) => data.json())
      .then((data) => {
        setWeather({
          temp: data.main.temp,
          description: data.weather[0].description,
          id: data.weather[0].id,
          details: {
            wind_speed: data.wind.speed,
            humidity: data.main.humidity,
            pressure: (data.main.pressure * 0.75).toFixed(0),
            // Поскольку параметр ниже есть только в платном API,
            // чтобы выводить хоть что-то, я подставил следующую формулу.
            rain_chance: data.main.humidity / 2,
          },
        });
      })
      .catch(() => {
        setWeather({
          ...defaultWeather,
          description: "Не удалось найти данные о погоде в этом городе! :(",
        });
      });
  }, [city]);

  const handleClick = () => setCitySelection(!isCitySelection);

  return (
    <div className={`weather-app ${weather.id < 800 ? "rain" : ""}`}>
      <header>
        {isCitySelection ? (
          <CitySelection closeCitySelection={handleClick} setCity={setCity} />
        ) : (
          <CityName
            city={city}
            setCitySelection={handleClick}
            setCity={setCity}
          />
        )}
        <TemperatureUnits unit={unit} setUnit={setUnit} />
      </header>
      <main>
        <Weather
          temp={temp}
          id={weather.id}
          unit={unit}
          description={weather.description}
        />
      </main>
      <footer>
        {Object.keys(weather.details).map((detail, i) => (
          <WeatherDetails
            key={i}
            name={detail}
            detail={weather.details[detail]}
          />
        ))}
      </footer>
    </div>
  );
}

export default WeatherApp;
