import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/loginSignup.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;


connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on ${PORT} 👍`);
    });
  })
  .catch((err) => {
    console.log("DB connection failed ❌", err);
  });