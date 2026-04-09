import React, { createContext, useContext, useState, useEffect } from "react";
import { authAPI } from "../services/api";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Initialize auth state from localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      try {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Failed to restore auth state:", error);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password, rememberMe) => {
    try {
      const response = await authAPI.login(email, password, rememberMe);
      const { token, user } = response.data;

      setToken(token);
      setUser(user);
      setIsAuthenticated(true);

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      if (rememberMe) {
        localStorage.setItem("rememberMe", "true");
      }

      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const register = async (email, username, password) => {
    try {
      const response = await authAPI.register(email, username, password);
      const { token, user } = response.data;

      setToken(token);
      setUser(user);
      setIsAuthenticated(true);

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await authAPI.logout();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setUser(null);
      setToken(null);
      setIsAuthenticated(false);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("rememberMe");
    }
  };

  const value = {
    user,
    token,
    loading,
    isAuthenticated,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
