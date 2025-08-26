import { useEffect, useState } from "react";
import Search from "../search";
import styles from "./style.module.css";

interface Weather {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  weather: Array<{
    description: string;
  }>;
}

const Weather = () => {
  const [weather, setWeather] = useState<Weather | null>(null);

  const searchWeather = async (searchKey: string) => {
    const searchAPI = `https://api.openweathermap.org/data/2.5/weather?q=${searchKey}&appid=cb6109ae69b3df161000c3d05363ce58&units=metric`;
    const res = await fetch(searchAPI, {
      headers: {
        Accept: "application/json",
      },
    });

    if (!res.ok)
      return console.log(
        `Error found while searching for current weather update for ${searchKey}`
      );

    const result = await res.json();
    setWeather(result as Weather);
  };

  const handleSearch = (searchKey: string) => {
    searchWeather(searchKey);
  };

  const getCurrentDate = () => {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  useEffect(() => {
    searchWeather("Chittagong");
  }, []);

  return (
    <div className={styles.container}>
      <Search
        initValue="Chittagong"
        onSearch={(searchKey: string) => handleSearch(searchKey)}
      />
      {weather && (
        <div className={styles.detailsContainer}>
          <h2 className={styles.location}>{weather?.name}</h2>
          <p className={styles.date}>{getCurrentDate()}</p>
          <div className={styles.temperatureDetails}>
            <div className={styles.currentTemp}>
              <h3 className={styles.label}>Current</h3>
              <p className={styles.value}>
                {weather?.main.temp}&nbsp;<sup>o</sup>C
              </p>
            </div>
            <div className={styles.currentFeelingTemp}>
              <h3 className={styles.label}>Feels Like</h3>
              <p className={styles.value}>
                {weather?.main.feels_like}&nbsp;<sup>o</sup>C
              </p>
            </div>
          </div>
          <div className={styles.otherDetails}>
            <div className={styles.windDetails}>
              <h3 className={styles.label}>Wind Speed</h3>
              <p className={styles.value}>{weather?.wind.speed} mi/h</p>
            </div>
            <div className={styles.currentFeelingTemp}>
              <h3 className={styles.label}>Humidity</h3>
              <p className={styles.value}>{weather?.main.humidity}%</p>
            </div>
          </div>
          <h2 className={styles.weatherDesc}>
            {weather?.weather[0].description}
          </h2>
        </div>
      )}
    </div>
  );
};

export default Weather;
