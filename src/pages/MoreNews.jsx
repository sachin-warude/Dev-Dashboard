import React from "react";
import { useNavigate } from "react-router";
import styles from "./MoreNews.module.css";
import { useFetch } from "../hooks/useFetch";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Button from "../components/Button";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

function MoreNews() {
  const { data, error, isLoading } = useFetch(
    `https://newsapi.org/v2/top-headlines?category=technology&apiKey=${API_KEY}`,
  );
  const navigate = useNavigate();

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Button
          className={styles.backBtn}
          onClick={() => navigate("/homepage")}
        >
          <span className={styles.arrow}>‹</span> Back
        </Button>
        <h1 className={styles.title}>All Tech News</h1>
      </div>

      <div className={styles.newsList}>
        {data?.articles?.map((item, index) => (
          <div key={index} className={styles.newsCard}>
            <div className={styles.newsContent}>
              <h3 className={styles.newsTitle}>{item.title}</h3>
              <p className={styles.newsDescription}>{item.description}</p>
              <div className={styles.newsFooter}>
                <span className={styles.source}>{item.source?.name}</span>
                <span className={styles.date}>
                  {new Date(item.publishedAt).toLocaleDateString()}
                </span>
              </div>
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.readMore}
                >
                  Read Full Article →
                </a>
              )}
            </div>
            {item.urlToImage && (
              <img
                src={item.urlToImage}
                alt={item.title}
                className={styles.newsImage}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoreNews;
