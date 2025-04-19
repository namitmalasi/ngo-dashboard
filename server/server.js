import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin/login", authRoutes);
app.use("", reportRoutes);
connectDB();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Hello from server"));
app.listen(PORT, () => {
  console.log("Server running!!!");
});
