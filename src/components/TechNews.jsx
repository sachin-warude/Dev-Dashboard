import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import styles from "./TechNews.module.css";
import { useFetch } from "../hooks/useFetch";
import Loading from "./Loading";
import Error from "./Error";
import Button from "./Button";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const PAGESIZE = 5;
const TechNews = () => {
  const { data, error, isLoading } = useFetch(
    `https://newsapi.org/v2/top-headlines?category=technology&pageSize=${PAGESIZE}&apiKey=${API_KEY}`,
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
            <Button href={item.url} className={styles.newsText} target="_blank">
              {item.title}
            </Button>
          </div>
        ))}
      </div>
      <Button
        className={styles.moreBtn}
        onClick={() => navigate("/morenews")}
        target="_blank"
      >
        More News <span className={styles.arrow}>›</span>
      </Button>
    </div>
  );
};

export default TechNews;
