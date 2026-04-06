import React, { useState, useEffect } from "react";
import styles from "./GitHubProfile.module.css";
import { useFetch } from "../hooks/useFetch";
import Loading from "./Loading";
import Error from "./Error";
import Button from "./Button";

const GitHubProfile = () => {
  const [topRepoData, setTopRepoData] = useState([]);
  const { data, error, isLoading } = useFetch(
    "https://api.github.com/users/sachin-warude",
  );
  const {
    data: starData,
    error: starError,
    isLoading: starLoading,
  } = useFetch(
    data ? `https://api.github.com/users/${data?.login}/starred` : null,
  );
  useEffect(() => {
    if (starData) {
      const topRepo = starData
        .toSorted((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 3);
      setTopRepoData(topRepo);
    }
  }, [starData, starData]);
  if (isLoading || starLoading) return <Loading />;
  if (error || starError) return <Error message={error || starError} />;
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
              {topRepoData.map((repo) => {
                return (
                  <div className={styles.repoItem} key={repo.id}>
                    <span className={styles.repoStar}>⭐</span>
                    <span className={styles.repoName}>{repo.name}</span>
                    <span className={styles.repoStars}>
                      Stars: {repo.stargazers_count}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <Button
            className={styles.viewBtn}
            href={data?.html_url}
            target="_blank"
          >
            View on GitHub
          </Button>
        </div>
      )}
    </>
  );
};

export default GitHubProfile;
