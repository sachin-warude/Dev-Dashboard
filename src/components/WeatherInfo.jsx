import React, { useEffect } from "react";
import styles from "./WeatherInfo.module.css";
import { useFetch } from "../hooks/useFetch";
import { useGeolocation } from "../hooks/useGeoLocation";
import Loading from "./Loading";
import Error from "./Error";

const apiKey = import.meta.env.VITE_API_KEY;
const WeatherInfo = () => {
  const {
    latitude: lat,
    longitude: lng,
    error: locationError,
  } = useGeolocation();

  const { data, error, isLoading } = useFetch(
    lat && lng
      ? `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`
      : null,
  );
  const iconCode = data?.weather?.[0]?.icon;
  const isNight = iconCode?.includes("n");
  const iconMap = {
    "01": isNight ? "🌙" : "☀️",
    "02": "⛅",
    "03": "☁️",
    "04": "☁️",
    "09": "🌧️",
    10: "🌦️",
    11: "⛈️",
    13: "❄️",
    50: "🌫️",
  };
  const key = iconCode?.slice(0, 2);
  useEffect(() => {
    console.log(lat);
    console.log(lng);
    console.log(data);
    console.log(error);
    console.log(isLoading);
  }, [data, error, isLoading, lat, lng]);

  if (isLoading) return <Loading />;
  if (error || locationError) return <Error message={error || locationError} />;
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>Weather Info</h2>

      <div className={styles.weatherContent}>
        <div className={styles.locationTemp}>
          <h3 className={styles.location}>{data?.name}</h3>
          <div className={styles.tempContainer}>
            <span className={styles.temperature}>{data?.main?.temp}°C</span>
            {/* <span className={styles.icon}>☁️🌤️</span> */}
            <span className={styles.icon}>{iconMap[key]}</span>
          </div>
        </div>

        <div className={styles.condition}>
          <p className={styles.conditionText}>{data?.weather?.[0]?.main}</p>
        </div>

        <div className={styles.detailsContainer}>
          <div className={styles.detail}>
            <span className={styles.detailLabel}>Humidity:</span>
            <span className={styles.detailValue}>{data?.main?.humidity}</span>
          </div>
          <div className={styles.detail}>
            <span className={styles.detailLabel}>Wind:</span>
            <span className={styles.detailValue}>{data?.wind?.speed} mph</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
