import React from "react";
import { Routes, Route, Navigate } from "react-router";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import MoreNews from "./pages/MoreNews";

const App = () => {
  const isAuthenticate = false;

  return (
    <Routes>
      <Route index element={<Navigate to={<Login />} replace />} />
      {isAuthenticate ? (
        <Route path="/homepage" element={<HomePage />} />
      ) : (
        <Route path="/login" element={<Login />} />
      )}
      <Route path="/morenews" element={<MoreNews />} />
    </Routes>
  );
};

export default App;
