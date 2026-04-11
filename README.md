# Dev Dashboard

## 📌 Overview

The **Dev Dashboard** is a comprehensive React-based application that aggregates data from multiple APIs and displays it in a single, unified interface with authentication. It helps developers monitor useful information like GitHub stats, weather, and tech news in real time.

---

## 🎯 Features

### User Authentication

- **Login/Register** - User authentication with JWT tokens
- **Protected Routes** - Dashboard access only for authenticated users
- **Session Management** - Remember me functionality
- **Logout** - Secure logout with token cleanup

### 1. GitHub Profile Section

- Fetch user data from GitHub API
- Display:
  - Username
  - Avatar
  - Followers count
  - Repository count
  - Top starred repositories

### 2. Weather Section

- Fetch real-time weather data using geolocation
- Display:
  - Current location/city name
  - Temperature in Celsius
  - Weather condition with emoji icons
  - Humidity and wind speed

### 3. Tech News Section

- Fetch latest technology news
- Display:
  - News headlines
  - Source attribution
  - Publication date
  - Full article links
  - Browse more news on a dedicated page

### 4. Global Dashboard

- Combine all sections into a responsive UI
- Show loading states while fetching data
- Show error messages if APIs fail
- Refresh data button
- User profile display with logout option

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Free API Keys:
  - [OpenWeatherMap API](https://openweathermap.org/api)
  - [NewsAPI](https://newsapi.org/)

### Installation

#### 1. Clone and Setup Backend

```bash
cd backend
npm install
```

#### 2. Create Backend Environment File

Copy the example env file:

```bash
cp .env.example .env
```

The `.env` file should contain:

```
PORT=5000
NODE_ENV=development
JWT_SECRET=your_jwt_secret_key_here_change_in_production
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:5173
```

#### 3. Setup Frontend

```bash
npm install
```

#### 4. Create Frontend Environment File

Copy the example env file:

```bash
cp .env.example .env.local
```

The `.env.local` file should contain:

```
VITE_API_URL=http://localhost:5000/api
VITE_WEATHER_API_KEY=your_openweather_api_key_here
VITE_NEWS_API_KEY=your_newsapi_key_here
```

### How to Get API Keys

#### OpenWeatherMap API Key

1. Visit [openweathermap.org](https://openweathermap.org/api)
2. Sign up for a free account
3. Go to API keys section
4. Copy your API key and add it to `.env.local`

#### NewsAPI Key

1. Visit [newsapi.org](https://newsapi.org/)
2. Sign up for free
3. Copy your API key
4. Add it to `.env.local`

---

## 🏃 Running the Application

### Terminal 1 - Start Backend Server

```bash
cd backend
npm run dev
```

The backend will run on: `http://localhost:5000`

### Terminal 2 - Start Frontend Development Server

```bash
npm run dev
```

The frontend will run on: `http://localhost:5173`

---

## 📝 Usage

### First Time Setup

1. **Open** http://localhost:5173 in your browser
2. **Click** "Sign up here" to create a new account
3. **Enter** your:
   - Email
   - GitHub username (used to fetch your GitHub profile)
   - Password (minimum 6 characters)
4. **Click** "Create Account"

### Logging In

1. **Enter** your email and password
2. **Optional**: Check "Remember me" to stay logged in
3. **Click** "Sign In"

### Dashboard Features

Once logged in, you can:

- **View GitHub Profile** - See your GitHub stats and top repositories
- **Check Weather** - View current weather based on your location
- **Browse Tech News** - Read the latest technology news
- **Refresh Data** - Click "Refresh Data" to update all information
- **Logout** - Click your username dropdown and select Logout

---

## 🔄 Async Data Handling

- Use `useEffect` for API calls
- Use `async/await` for fetching data
- Proper handling of:
  - Loading states
  - Error states
  - Success states

---

## 🧠 React Hooks Used

### 1. useState

- Store API data
- Manage loading and error states
- Manage form inputs

### 2. useEffect

- Trigger API calls on component mount
- Cleanup on unmount

### 3. useContext

- Global authentication state management

### 4. useNavigate

- Client-side routing

### 5. Custom Hooks

- `useFetch` - Reusable data fetching logic
- `useGeolocation` - Get user's location for weather

---

## 🧱 Project Structure

```
Dev-Dashboard/
├── backend/
│   ├── controllers/
│   │   └── authController.js      # Authentication logic
│   ├── middleware/
│   │   └── auth.js                # JWT verification
│   ├── routes/
│   │   └── auth.js                # Auth endpoints
│   ├── .env                        # Backend environment variables
│   ├── .env.example                # Example env file
│   ├── package.json
│   ├── server.js                   # Express server
│   └── README.md
│
├── src/
│   ├── components/
│   │   ├── Button.jsx              # Reusable button component
│   │   ├── Error.jsx               # Error display component
│   │   ├── GitHubProfile.jsx       # GitHub profile display
│   │   ├── Header.jsx              # Dashboard header
│   │   ├── Loading.jsx             # Loading spinner
│   │   ├── ProtectedRoute.jsx      # Auth-protected route wrapper
│   │   ├── TechNews.jsx            # Tech news display
│   │   ├── WeatherInfo.jsx         # Weather display
│   │   └── *.module.css            # Component styles
│   │
│   ├── context/
│   │   └── AuthContext.jsx         # Global auth state
│   │
│   ├── hooks/
│   │   ├── useFetch.js             # Custom fetch hook
│   │   └── useGeoLocation.js       # Geolocation hook
│   │
│   ├── pages/
│   │   ├── HomePage.jsx            # Main dashboard
│   │   ├── Login.jsx               # Login page
│   │   ├── Register.jsx            # Registration page
│   │   ├── MoreNews.jsx            # Extended news page
│   │   └── *.module.css            # Page styles
│   │
│   ├── services/
│   │   └── api.js                  # Axios API client
│   │
│   ├── App.jsx                     # Main app component with routing
│   ├── index.css                   # Global styles
│   ├── main.jsx                    # App entry point
│
├── .env.example                    # Frontend env template
├── .env.local                      # Frontend environment variables
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
├── BACKEND_SETUP.md
└── README.md
```

---

## 🔐 Authentication Flow

1. **Registration/Login** → Backend validates credentials and generates JWT
2. **Token Storage** → JWT stored in localStorage
3. **API Requests** → Token automatically added to request headers
4. **Protected Routes** → ProtectedRoute component checks authentication
5. **Token Expiration** → Automatic logout on expired/invalid token

---

## 🛠️ Technologies Used

### Frontend

- **React 19** - UI framework
- **React Router 7** - Client-side routing
- **Axios** - HTTP client with interceptors
- **Vite** - Build tool
- **CSS Modules** - Scoped styling

### Backend

- **Express.js** - Web framework
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin requests
- **dotenv** - Environment configuration

### APIs

- **GitHub API** - User profiles and repositories
- **OpenWeatherMap API** - Real-time weather data
- **NewsAPI** - Technology news headlines
- **Geolocation API** - User location

---

## 📋 Installed Features

- ✅ **Authentication System** - Register, login, logout
- ✅ **JWT Token Management** - Secure token handling
- ✅ **Protected Routes** - Dashboard access control
- ✅ **API Integration** - GitHub, Weather, News APIs
- ✅ **Error Handling** - User-friendly error messages
- ✅ **Loading States** - UI feedback during data fetching
- ✅ **Responsive Design** - Works on mobile and desktop
- ✅ **Session Persistence** - Remember me functionality
- ✅ **Custom Hooks** - Reusable logic components

---

## 📊 Development Notes

### Current Limitations

- **User Storage**: Currently uses in-memory storage (meant for development)
  - Users are lost on server restart
  - To persist users, integrate with a database (MongoDB, PostgreSQL, etc.)

### Future Enhancements

- Add database integration (MongoDB/PostgreSQL)
- Implement GitHub OAuth login
- Add user preferences/settings page
- Add password reset functionality
- Add more dashboard widgets
- Dark mode toggle
- Email notifications
- Caching strategy for API calls

---

## 🐛 Troubleshooting

### "Invalid API Key" Error

- Verify API keys in `.env.local` are correct
- Check that API keys are active in their respective dashboards

### "Cannot GET /api/auth/login"

- Ensure backend server is running on port 5000
- Check that `VITE_API_URL` in `.env.local` matches backend URL

### Geolocation not working

- Allow location permission in browser
- Ensure HTTPS (or localhost) for geolocation to work
- Check browser console for specific errors

### "CORS Error"

- Verify `FRONTEND_URL` in backend `.env` matches your frontend URL
- Ensure backend has CORS middleware enabled

---

## 📝 API Endpoints

### Authentication

- `POST /api/auth/register` - Create new account
- `POST /api/auth/login` - Login with credentials
- `POST /api/auth/logout` - Logout
- `GET /api/auth/profile` - Get current user profile (protected)

### Health Check

- `GET /api/health` - Backend health status

---

## 📦 Build for Production

### Frontend

```bash
npm run build
npm run preview
```

### Backend

- Set `NODE_ENV=production`
- Generate strong JWT_SECRET
- Set proper FRONTEND_URL for CORS

---

## 📄 License

This project is open source and available under the MIT License.
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
```
