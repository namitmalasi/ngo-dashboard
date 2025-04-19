import express from "express";
import { getDashboard, submitReport } from "../controllers/reportController.js";
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
router.post("/report", submitReport);
router.get("/dashboard", authenticate, getDashboard);

export default router;
