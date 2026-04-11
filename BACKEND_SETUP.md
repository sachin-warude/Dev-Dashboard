# Backend Setup Instructions

## Quick Start

### 1. Install Backend Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment

```bash
cp .env.example .env
```

### 3. Start Backend Server

```bash
npm run dev
```

The server will run at: `http://localhost:5000`

---

## Frontend Integration

The frontend automatically connects to the backend using the API URL from `.env`:

```
VITE_API_URL=http://localhost:5000/api
```

### Installed Features:

- ✅ **AuthContext** - Global authentication state management
- ✅ **API Service** - Axios client with interceptors
- ✅ **Login Page** - Connected to backend
- ✅ **Token Management** - Automatic token handling

---

## Running Both Frontend and Backend

### Terminal 1 - Frontend:

```bash
npm run dev
```

### Terminal 2 - Backend:

```bash
cd backend
npm run dev
```

---

## API Endpoints

| Method | Endpoint             | Purpose                      |
| ------ | -------------------- | ---------------------------- |
| POST   | `/api/auth/login`    | User login                   |
| POST   | `/api/auth/register` | User registration            |
| POST   | `/api/auth/logout`   | User logout                  |
| GET    | `/api/auth/profile`  | Get user profile (protected) |
| GET    | `/api/health`        | Health check                 |

---

## Testing Login

1. **Create Account** (optional if auto-register on first login):
   - Email: `test@example.com`
   - GitHub Username: `testuser`
   - Password: `password123`

2. **Login** with same credentials

3. **Token** will be automatically stored in localStorage

---

## Available Hooks & Context

### useAuth Hook

```jsx
import { useAuth } from "./context/AuthContext";

const MyComponent = () => {
  const { user, isAuthenticated, token, login, logout } = useAuth();

  return (
    <>
      {isAuthenticated ? (
        <p>Welcome, {user.username}!</p>
      ) : (
        <p>Please log in</p>
      )}
    </>
  );
};
```

---

## Production Checklist

- [ ] Replace Map storage with MongoDB/PostgreSQL
- [ ] Implement email verification
- [ ] Add password reset functionality
- [ ] Enable HTTPS
- [ ] Add rate limiting
- [ ] Implement proper error logging
- [ ] Add security headers (helmet.js)
- [ ] Set secure JWT_SECRET
- [ ] Configure CORS properly
