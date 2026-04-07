import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// In-memory user store (replace with database in production)
const users = new Map();

const generateToken = (userId, email) => {
  return jwt.sign({ userId, email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || "7d",
  });
};

export const login = async (req, res) => {
  try {
    const { email, username, password, rememberMe } = req.body;

    // Validate input
    if (!email || !password || !username) {
      return res.status(400).json({
        success: false,
        error: "Email, username, and password are required",
      });
    }

    // Check if user exists (in production, query database)
    const user = Array.from(users.values()).find((u) => u.email === email);

    if (!user) {
      return res.status(401).json({
        success: false,
        error: "Invalid credentials",
      });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        error: "Invalid credentials",
      });
    }

    // Generate token
    const token = generateToken(user.id, user.email);

    res.json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
      },
      rememberMe,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      error: "Login failed",
    });
  }
};

export const register = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    // Validate input
    if (!email || !password || !username) {
      return res.status(400).json({
        success: false,
        error: "Email, username, and password are required",
      });
    }

    // Check if user already exists
    const existingUser = Array.from(users.values()).find(
      (u) => u.email === email,
    );

    if (existingUser) {
      return res.status(409).json({
        success: false,
        error: "Email already registered",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const userId = `user_${Date.now()}`;
    const newUser = {
      id: userId,
      email,
      username,
      hashedPassword,
      createdAt: new Date(),
    };

    users.set(userId, newUser);

    // Generate token
    const token = generateToken(userId, email);

    res.status(201).json({
      success: true,
      message: "Account created successfully",
      token,
      user: {
        id: userId,
        email,
        username,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({
      success: false,
      error: "Registration failed",
    });
  }
};

export const logout = (req, res) => {
  res.json({
    success: true,
    message: "Logged out successfully",
  });
};

export const getProfile = (req, res) => {
  try {
    const user = users.get(req.user.userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        error: "User not found",
      });
    }

    res.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (error) {
    console.error("Profile fetch error:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch profile",
    });
  }
};
