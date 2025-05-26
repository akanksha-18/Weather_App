
import { WeatherProvider } from "./context/WeatherContext";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ErrorMessage from "./components/ErrorMessage";

const App = () => {
  return (
    <WeatherProvider>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h1>Weather Dashboard</h1>
        <SearchBar />
        <ErrorMessage />
        <WeatherCard />
      </div>
    </WeatherProvider>
  );
};

export default App;
