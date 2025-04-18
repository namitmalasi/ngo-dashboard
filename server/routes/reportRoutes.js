import express from "express";
import { getDashboard, submitReport } from "../controllers/reportController";

const router = express.Router();
router.post("/report", submitReport);
router.get("/dashboard", authenticate, getDashboard);

export default router;
