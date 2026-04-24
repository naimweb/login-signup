import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/loginSignup.js";
import { connectDB } from "./config/db.js";

// dotenv load (VERY IMPORTANT)
dotenv.config();

// app init
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// database connect
connectDB();

// routes
app.use("/api/auth", authRoutes);

// test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} 👍`);
});