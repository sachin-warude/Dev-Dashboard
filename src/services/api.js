import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token to requests if it exists
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Handle token expiration
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 403) {
      // Token expired or invalid
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

export const authAPI = {
  login: (email, password, rememberMe) =>
    apiClient.post("/auth/login", { email, password, rememberMe }),

  register: (email, username, password) =>
    apiClient.post("/auth/register", { email, username, password }),

  logout: () => apiClient.post("/auth/logout"),

  getProfile: () => apiClient.get("/auth/profile"),

  getHealth: () => apiClient.get("/health"),
};

export default apiClient;
