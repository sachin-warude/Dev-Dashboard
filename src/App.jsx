import React from "react";
import { Routes, Route, Navigate } from "react-router";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";

const App = () => {
  const isAuthenticate = true;

  return (
    <Routes>
      <Route index element={<Navigate to={<Login />} replace />} />
      {isAuthenticate ? (
        <Route path="/homepage" element={<HomePage />} />
      ) : (
        <Route path="/login" element={<Login />} />
      )}
    </Routes>
  );
};

export default App;
