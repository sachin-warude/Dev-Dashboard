import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        email,
        username,
        password,
        rememberMe,
      });

      if (response.data.success) {
        // Store token and user info
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        if (rememberMe) {
          localStorage.setItem("rememberMe", "true");
        }

        // Navigate to home page
        navigate("/");
      }
    } catch (err) {
      setError(err.response?.data?.error || "Login failed. Please try again.");
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <div className={styles.header}>
          <h1 className={styles.title}>DevHub</h1>
          <p className={styles.subtitle}>Developer Productivity Hub</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          {error && <div className={styles.errorMessage}>{error}</div>}

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className={styles.input}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="username" className={styles.label}>
              GitHub UserName
            </label>
            <input
              type="username"
              id="username"
              className={styles.input}
              placeholder="Enter your gitHub username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              className={styles.input}
              placeholder="Enter your password"
              value={password}
              suggested="current-password"
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
            />
          </div>

          <div className={styles.checkboxGroup}>
            <input
              type="checkbox"
              id="rememberMe"
              className={styles.checkbox}
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              disabled={loading}
            />
            <label htmlFor="rememberMe" className={styles.checkboxLabel}>
              Remember me
            </label>
            <a href="#" className={styles.forgotLink}>
              Forgot password?
            </a>
          </div>

          <button type="submit" className={styles.submitBtn} disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className={styles.divider}>
          <span>OR</span>
        </div>

        <button className={styles.socialBtn}>
          <span>📱</span> Continue with GitHub
        </button>

        <div className={styles.footer}>
          <p>
            Don't have an account?{" "}
            <a href="#" className={styles.signupLink}>
              Sign up here
            </a>
          </p>
        </div>
      </div>

      <div className={styles.features}>
        <div className={styles.feature}>
          <span className={styles.featureIcon}>⚡</span>
          <h3>Fast Performance</h3>
          <p>Lightning-fast analytics and data processing</p>
        </div>
        <div className={styles.feature}>
          <span className={styles.featureIcon}>🔒</span>
          <h3>Secure</h3>
          <p>Enterprise-grade security for your data</p>
        </div>
        <div className={styles.feature}>
          <span className={styles.featureIcon}>📊</span>
          <h3>Real-time Insights</h3>
          <p>Live dashboards and instant notifications</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
