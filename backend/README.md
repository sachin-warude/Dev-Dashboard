# Dev Dashboard Backend Setup

## Overview

This backend provides authentication endpoints for the Dev Dashboard app. It includes user registration, login, and profile management.

## Features

- ✅ User Login
- ✅ User Registration
- ✅ JWT Token Authentication
- ✅ Password Hashing with bcryptjs
- ✅ CORS enabled
- ✅ Input Validation

## Installation

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file from `.env.example`:

```bash
cp .env.example .env
```

4. Update `.env` with your configuration:

```
PORT=5000
NODE_ENV=development
JWT_SECRET=your_jwt_secret_key_here_change_in_production
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:5173
```

## Running the Server

### Development (with auto-reload):

```bash
npm run dev
```

### Production:

```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### Authentication Routes

#### POST `/api/auth/login`

Login with email, username, and password.

**Request:**

```json
{
  "email": "user@example.com",
  "username": "github_username",
  "password": "password123",
  "rememberMe": false
}
```

**Response (Success):**

```json
{
  "success": true,
  "message": "Login successful",
  "token": "eyJhbGc...",
  "user": {
    "id": "user_123",
    "email": "user@example.com",
    "username": "github_username"
  }
}
```

#### POST `/api/auth/register`

Create a new account.

**Request:**

```json
{
  "email": "user@example.com",
  "username": "github_username",
  "password": "password123"
}
```

**Response (Success):**

```json
{
  "success": true,
  "message": "Account created successfully",
  "token": "eyJhbGc...",
  "user": {
    "id": "user_123",
    "email": "user@example.com",
    "username": "github_username"
  }
}
```

#### POST `/api/auth/logout`

Logout the user (clears client-side token).

**Response:**

```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

#### GET `/api/auth/profile`

Get current user profile (requires authentication).

**Headers:**

```
Authorization: Bearer <token>
```

**Response:**

```json
{
  "success": true,
  "user": {
    "id": "user_123",
    "email": "user@example.com",
    "username": "github_username"
  }
}
```

#### GET `/api/health`

Health check endpoint.

**Response:**

```json
{
  "message": "Backend is running"
}
```

## Project Structure

```
backend/
├── server.js                 # Main server file
├── package.json             # Dependencies
├── .env.example             # Environment variables template
├── controllers/
│   └── authController.js    # Authentication logic
├── routes/
│   └── auth.js              # Authentication routes
└── middleware/
    └── auth.js              # Authentication middleware & validators
```

## Next Steps for Production

1. **Replace In-Memory Storage**: Replace the Map-based user store with a proper database (MongoDB, PostgreSQL, etc.)
2. **Add Email Verification**: Implement email verification for new registrations
3. **Add Password Reset**: Implement forgot password functionality
4. **Rate Limiting**: Add rate limiting to prevent brute force attacks
5. **Error Logging**: Implement proper error logging
6. **Security Headers**: Add helmet.js for security headers
7. **Validation**: Use express-validator for comprehensive input validation
8. **Environment Variables**: Ensure all sensitive data is in .env file

## Troubleshooting

### CORS Error

Make sure `FRONTEND_URL` in `.env` matches your frontend's URL and that the backend is allowing it.

### JWT Token Expired

Check the `JWT_EXPIRE` value. Default is 7 days.

### Port Already in Use

Change the `PORT` in `.env` file if port 5000 is already in use.
