import React from "react";
import styles from "./index.module.scss";

const WeatherDetails = ({ data }) => {
  return (
    <div className={styles.main}>
      <div className={styles.main__det}>
        <h2>{data.wind.speed} mph</h2>
        <p>Wind</p>
      </div>
      <div className={styles.main__det}>
        <h2>{data.weather[0].description}</h2>
        <p>Description</p>
      </div>
      <div className={styles.main__det}>
        <h2>{data.main.humidity}%</h2>
        <p>Humidity</p>
      </div>
      <div className={styles.main__det}>
        <h2>{data.main.pressure} hPa</h2>
        <p>Pressure</p>
      </div>
      <div className={styles.main__det}>
        <h2>{data.visibility / 1000} km</h2>
        <p>Visibility</p>
      </div>
    </div>
  );
};

export default WeatherDetails;
