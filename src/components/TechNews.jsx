import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import styles from "./TechNews.module.css";
import { useFetch } from "../hooks/useFetch";
import Loading from "./Loading";
import Error from "./Error";
import Button from "./Button";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const TechNews = () => {
  const { data, error, isLoading } = useFetch(
    `https://newsapi.org/v2/top-headlines?category=technology&apiKey=${API_KEY}`,
  );
  const navigate = useNavigate();
  console.log(data);
  if (isLoading) return <Loading />;
  if (error) return <Error />;
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>Tech News</h2>

      <div className={styles.newsList}>
        {data?.articles?.slice(0, 5)?.map((item, index) => (
          <div key={index} className={styles.newsItem}>
            <span className={styles.bullet}>•</span>
            <p className={styles.newsText}>{item.title}</p>
          </div>
        ))}
      </div>
      <Button className={styles.moreBtn} onClick={() => navigate("/moreNews")}>
        More News <span className={styles.arrow}>›</span>
      </Button>
      {/* <button className={styles.moreBtn}>
        More News <span className={styles.arrow}>›</span>
      </button> */}
    </div>
  );
};

export default TechNews;
