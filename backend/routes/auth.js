import express from "express";
import {
  login,
  register,
  logout,
  getProfile,
} from "../controllers/authController.js";
import { authenticateToken, validateInput } from "../middleware/auth.js";

const router = express.Router();

// Public routes
router.post("/login", validateInput, login);
router.post("/register", validateInput, register);
router.post("/logout", logout);

// Protected routes
router.get("/profile", authenticateToken, getProfile);

export default router;
