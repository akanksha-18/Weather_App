
import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import styles from "../styles/ErrorMessage.module.css";

const ErrorMessage = () => {
  const { error } = useContext(WeatherContext);
  return error ? <div className={styles.error}>{error}</div> : null;
};

export default ErrorMessage;
