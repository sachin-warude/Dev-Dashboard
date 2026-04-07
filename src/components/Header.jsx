import React from "react";
import styles from "./Header.module.css";
import Button from "./Button";

const Header = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.titleSection}>
        <h1 className={styles.title}>Dev Dashboard</h1>
        <p className={styles.subtitle}>Your Developer Productivity Hub</p>
      </div>
      <Button className={styles.refreshBtn} onClick={handleRefresh}>
        Refresh Data <span className={styles.arrow}>›</span>
      </Button>
    </header>
  );
};

export default Header;
