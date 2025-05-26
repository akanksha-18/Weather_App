// src/context/WeatherContext.jsx
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const WeatherContext = createContext();

const API_KEY = '8ede93bd64e48faed1f8c831d77213d5'; // Replace with your OpenWeatherMap API key

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState(localStorage.getItem("lastCity") || "Delhi");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async (selectedCity) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
      setError("");
      localStorage.setItem("lastCity", selectedCity);
    } catch (err) {
      setError("City not found or API error.");
      setWeatherData(null);
    }
  };

  useEffect(() => {
    fetchWeather(city);

    const interval = setInterval(() => {
      fetchWeather(city);
    }, 30000); // Poll every 30 seconds

    return () => clearInterval(interval);
  }, [city]);

  return (
    <WeatherContext.Provider value={{ city, setCity, weatherData, error, fetchWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};
