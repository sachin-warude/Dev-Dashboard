import React from "react";
import Header from "./components/Header";
import GitHubProfile from "./components/GitHubProfile";
import WeatherInfo from "./components/WeatherInfo";
import TechNews from "./components/TechNews";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="dashboardGrid">
        <GitHubProfile />
        <WeatherInfo />
        <TechNews />
      </div>
    </div>
  );
};

export default App;
