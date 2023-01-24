import express from "express";

const router = express.Router();
import episodeController from "../controllers/episodeController.js";

router.post("/", episodeController.Create);
router.post("/populate", episodeController.PopulateTracks);
router.delete("/devepisode/", episodeController.Delete);
router.get("/recents", episodeController.Recents);

export default router;
