
import { useContext, useState } from "react";
import { WeatherContext } from "../context/WeatherContext";
import styles from "../styles/SearchBar.module.css";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const { setCity } = useContext(WeatherContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setCity(input.trim());
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <input
        type="text"
        value={input}
        placeholder="Enter city"
        onChange={(e) => setInput(e.target.value)}
        className={styles.searchInput}
      />
      <button type="submit" className={styles.searchBtn}>Search</button>
    </form>
  );
};

export default SearchBar;
