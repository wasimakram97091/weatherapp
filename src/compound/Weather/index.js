import React, { useState } from "react";
import styles from "./index.module.scss";
import WeatherDetails from "./WeatherDetails";

const Weather = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState();
  const [disable, setDisable] = useState(false);

  const cheakBtn = () => {
    const api_key = "5fa58ce8115be1673526715d1c9ca3f9";

    const myApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    fetch(myApi)
      .then((data) => {
        return data.json();
      })
      .then((mydata) => {
        if (mydata.cod === "404") {
          alert("City not found");
        } else {
          setData(mydata);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCityHandler = (event) => {
    setCity(event.target.value);
    setDisable(event.target.value !== "");
  };
  return (
    <div className={styles.main}>
      <h1>
        <u>
          WEATHER - Live & Forecast <i className="fa-solid fa-cloud-sun-rain"></i>
        </u>
      </h1>
      <div className={styles.main__inp}>
        <input type="text" placeholder="enter your city" onChange={getCityHandler} />

        <button onClick={cheakBtn} disabled={!disable ? "disabled" : ""}>
          <i className="fa-solid fa-eye"></i>
        </button>
      </div>

      {data ? (
        <React.Fragment>
          <div className={styles.main__des}>
            <img src={`https://api.openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="weather img" />

            <h1>
              {parseInt(data.main.temp)}
              <sup>o</sup>C <span className={styles.main__des__s}>{data.weather[0].main}</span>
            </h1>
            <h3>
              {data.name}
              <span>({data.sys.country})</span>
            </h3>
          </div>
          <WeatherDetails data={data} />
        </React.Fragment>
      ) : (
        <p className={styles.main__msg}>Weather will show here...</p>
      )}
    </div>
  );
};

export default Weather;
