import express from "express";
import userController from "../controllers/userController.js";

const router = express.Router();

router.post("/signup", userController.Signup);
router.post("/login", userController.Login);

export default router;