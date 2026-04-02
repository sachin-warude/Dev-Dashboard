import React, { useEffect } from "react";
import styles from "./TechNews.module.css";
import { useFetch } from "../hooks/useFetch";

const newsItems = [
  "JavaScript Frameworks to Watch in 2024",
  "AI Innovations Transforming the Industry",
  "Apple Unveils New AR Glasses",
  "Quantum Computing Breakthrough Achieved",
];
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const TechNews = () => {
  const { data, error, isLoading } = useFetch(
    `https://newsapi.org/v2/top-headlines?category=technology&apiKey=${API_KEY}`,
  );

  useEffect(() => {
    console.log(data);
    console.log(error);
    console.log(isLoading);
  }, [data, error, isLoading]);
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
