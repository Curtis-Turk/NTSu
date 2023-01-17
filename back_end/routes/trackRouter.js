import express from "express";
import trackController from "../controllers/trackController.js";

const router = express.Router();

router.post("/", trackController.Fetch);

export default router;
