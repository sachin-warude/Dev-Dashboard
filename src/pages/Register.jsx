import React, { useState } from "react";
import { useNavigate } from "react-router";
import styles from "./Login.module.css";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validate passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Validate password length
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      await register(email, username, password);
      // Navigate to home page on success
      navigate("/homepage");
    } catch (err) {
      setError(
        err.response?.data?.error ||
          err.message ||
          "Registration failed. Please try again.",
      );
      console.error("Registration error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <div className={styles.header}>
          <h1 className={styles.title}>Create Account</h1>
          <p className={styles.subtitle}>Join Developer Productivity Hub</p>
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
              type="text"
              id="username"
              className={styles.input}
              placeholder="Enter your GitHub username"
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
              placeholder="Enter a password (min 6 characters)"
              autoComplete="new-password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              disabled={loading}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword" className={styles.label}>
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className={styles.input}
              placeholder="Confirm your password"
              autoComplete="new-password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              required
              disabled={loading}
            />
          </div>

          <button type="submit" className={styles.submitBtn} disabled={loading}>
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <div className={styles.divider}>
          <span>OR</span>
        </div>

        <button type="button" className={styles.socialBtn} disabled={loading}>
          <span>📱</span> Continue with GitHub
        </button>

        <div className={styles.footer}>
          <p>
            Already have an account?{" "}
            <button
              type="button"
              className={styles.signupLink}
              onClick={() => navigate("/login")}
              style={{
                background: "none",
                border: "none",
                color: "inherit",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              Sign in here
            </button>
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

export default Register;
