import express from "express";
import trackController from "../controllers/trackController.js";
import authenticateToken from "../utils/authenticateToken.js";

const router = express.Router();

router.post("/", trackController.Fetch);
router.post("/save", authenticateToken, trackController.Save);

export default router;
