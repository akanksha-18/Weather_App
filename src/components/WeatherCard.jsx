
import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import styles from "../styles/WeatherCard.module.css";

const WeatherCard = () => {
  const { weatherData } = useContext(WeatherContext);

  if (!weatherData) return null;

  const { name, main, wind, weather } = weatherData;
  const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className={styles.card}>
      <h2>{name}</h2>
      <img src={icon} alt={weather[0].description} />
      <p>Condition: {weather[0].main}</p>
      <p>Temperature: {main.temp} °C</p>
      <p>Humidity: {main.humidity} %</p>
      <p>Wind Speed: {wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
