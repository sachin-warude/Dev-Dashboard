import React from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/homepage" element={<HomePage />} />
    </Routes>
  );
};

export default App;
