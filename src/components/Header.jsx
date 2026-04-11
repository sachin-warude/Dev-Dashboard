import React from "react";
import { useNavigate } from "react-router";
import styles from "./Header.module.css";
import { useAuth } from "../context/AuthContext";
import Button from "./Button";

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.titleSection}>
        <h1 className={styles.title}>Dev Dashboard</h1>
        <p className={styles.subtitle}>Your Developer Productivity Hub</p>
      </div>
      <div className={styles.actionSection}>
        <Button className={styles.refreshBtn} onClick={handleRefresh}>
          Refresh Data <span className={styles.arrow}>›</span>
        </Button>
        {user && (
          <div className={styles.userSection}>
            <span className={styles.userName}>
              {user.username || user.email}
            </span>
            <Button className={styles.logoutBtn} onClick={handleLogout}>
              Logout
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
