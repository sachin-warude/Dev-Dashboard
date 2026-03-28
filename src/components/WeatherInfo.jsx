import React from "react";
import styles from "./WeatherInfo.module.css";

const WeatherInfo = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>Weather Info</h2>

      <div className={styles.weatherContent}>
        <div className={styles.locationTemp}>
          <h3 className={styles.location}>New York, NY</h3>
          <div className={styles.tempContainer}>
            <span className={styles.temperature}>72°F</span>
            <span className={styles.icon}>☁️🌤️</span>
          </div>
        </div>

        <div className={styles.condition}>
          <p className={styles.conditionText}>Partly Cloudy</p>
        </div>

        <div className={styles.detailsContainer}>
          <div className={styles.detail}>
            <span className={styles.detailLabel}>Humidity:</span>
            <span className={styles.detailValue}>65%</span>
          </div>
          <div className={styles.detail}>
            <span className={styles.detailLabel}>Wind:</span>
            <span className={styles.detailValue}>8 mph</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
