import React, { useState, useEffect } from "react";
import styles from "./GitHubProfile.module.css";
import { useFetch } from "../hooks/useFetch";
import Loading from "./Loading";
import Error from "./Error";

const GitHubProfile = () => {
  const { data, error, isLoading } = useFetch(
    "https://api.github.com/users/sachin-warude",
  );
  if (isLoading) return <Loading />;
  if (error) return <Error message={error} />;
  return (
    <>
      {!isLoading && !error && (
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>GitHub Profile</h2>

          <div className={styles.profileSection}>
            <img
              src={
                data?.avatar_url ??
                `https://avatars.githubusercontent.com/u/1?v=4`
              }
              alt="GitHub Avatar"
              className={styles.avatar}
            />
            <div className={styles.profileInfo}>
              <h3 className={styles.username}>{data?.name ?? `john_doe`}</h3>
              <p className={styles.handle}>{data?.login ?? `@john_doe`}</p>
            </div>
          </div>

          <div className={styles.statsContainer}>
            <div className={styles.stat}>
              <span className={styles.statIcon}>📚</span>
              <span className={styles.statLabel}>Repositories:</span>
              <span className={styles.statValue}>
                {data?.public_repos ?? 0}
              </span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statIcon}>⭐</span>
              <span className={styles.statLabel}>Stars:</span>
              <span className={styles.statValue}>350</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statIcon}>👥</span>
              <span className={styles.statLabel}>Followers:</span>
              <span className={styles.statValue}>{data?.followers ?? 0}</span>
            </div>
          </div>

          <div className={styles.topRepos}>
            <h4 className={styles.topReposTitle}>Top Repositories</h4>
            <div className={styles.repoList}>
              <div className={styles.repoItem}>
                <span className={styles.repoStar}>⭐</span>
                <span className={styles.repoName}>React-Project</span>
                <span className={styles.repoStars}>Stars: 120</span>
              </div>
              <div className={styles.repoItem}>
                <span className={styles.repoStar}>⭐</span>
                <span className={styles.repoName}>Node-App</span>
                <span className={styles.repoStars}>Stars: 90</span>
              </div>
              <div className={styles.repoItem}>
                <span className={styles.repoStar}>⭐</span>
                <span className={styles.repoName}>CSS-Toolkit</span>
                <span className={styles.repoStars}>Stars: 65</span>
              </div>
            </div>
          </div>

          <button className={styles.viewBtn}>View on GitHub</button>
        </div>
      )}
    </>
  );
};

export default GitHubProfile;
