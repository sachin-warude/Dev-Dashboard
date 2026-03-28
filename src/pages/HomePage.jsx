import React from "react";
import styles from "./HomePage.module.css";
import Header from "../components/Header";
import GitHubProfile from "../components/GitHubProfile";
import WeatherInfo from "../components/WeatherInfo";
import TechNews from "../components/TechNews";

function HomePage() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.dashboardGrid}>
        <GitHubProfile />
        <WeatherInfo />
        <TechNews />
      </div>
    </div>
  );
}

export default HomePage;
