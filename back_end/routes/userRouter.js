import express from "express";
import userController from "../controllers/userController.js";
import authenticateToken from "../utils/authenticateToken.js";

const router = express.Router();

router.post("/signup", userController.Signup);
router.post("/login", userController.Login);
router.post("/tracks", authenticateToken, userController.UserTracks);
// router.post("/tracks/populate", userController.PopulateTracks);

export default router;
