# Dev Dashboard

## 📌 Overview

The **Dev Dashboard** is a React-based application that aggregates data from multiple APIs and displays it in a single, unified interface. It helps developers monitor useful information like GitHub stats, weather, and tech news in real time.

---

## 🎯 Objective

- Practice React fundamentals and advanced hooks
- Handle multiple API calls
- Manage async data and UI states
- Build reusable and scalable components

---

## ⚙️ Core Functionalities

### 1. GitHub Profile Section

- Fetch user data from GitHub API
- Display:
  - Username
  - Followers
  - Repository count
  - Top repositories (sorted by stars)

---

### 2. Weather Section

- Fetch real-time weather data
- Display:
  - City name
  - Temperature
  - Weather condition
  - Humidity and wind speed

---

### 3. Tech News Section

- Fetch latest tech news
- Display:
  - Headlines
  - Source
  - Short description

---

### 4. Global Dashboard

- Combine all sections into a single UI
- Show loading states while fetching data
- Show error messages if API fails

---

## 🔄 Async Data Handling

- Use `useEffect` for API calls
- Use `async/await` for fetching data
- Handle:
  - Loading state
  - Error state
  - Success state

---

## 🧠 React Hooks Used

### 1. useState

- Store API data
- Manage loading and error states

### 2. useEffect

- Trigger API calls on component mount

### 3. useMemo

- Optimize expensive calculations like sorting repositories

### 4. useCallback

- Prevent unnecessary re-renders

### 5. Custom Hook (useFetch)

- Reusable API fetching logic

---

## 🧱 Project Structure

```
src/
  components/
    Header.jsx
    GitHubCard.jsx
    WeatherCard.jsx
    NewsList.jsx
  hooks/
    useFetch.js
  services/
    api.js
  App.jsx
```

---

## ⭐ Advanced Features (Optional)

- Search GitHub user
- Dark/Light mode toggle
- API response caching (localStorage)
- Retry failed API calls
- Refresh button
- Charts for data visualization

---

## 🚀 Expected Outcome

After completing this project, you will be able to:

- Handle multiple APIs in React
- Manage asynchronous data efficiently
- Build reusable custom hooks
- Optimize performance using React hooks
- Structure scalable React applications

---

## 🏁 Conclusion

The Dev Dashboard project simulates real-world frontend challenges such as API integration, state management, and performance optimization. It is a strong portfolio proj
