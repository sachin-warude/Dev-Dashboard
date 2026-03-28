import React from "react";
import styles from "./TechNews.module.css";

const TechNews = () => {
  const newsItems = [
    "JavaScript Frameworks to Watch in 2024",
    "AI Innovations Transforming the Industry",
    "Apple Unveils New AR Glasses",
    "Quantum Computing Breakthrough Achieved",
  ];

  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>Tech News</h2>

      <div className={styles.newsList}>
        {newsItems.map((item, index) => (
          <div key={index} className={styles.newsItem}>
            <span className={styles.bullet}>•</span>
            <p className={styles.newsText}>{item}</p>
          </div>
        ))}
      </div>

      <button className={styles.moreBtn}>
        More News <span className={styles.arrow}>›</span>
      </button>
    </div>
  );
};

export default TechNews;
