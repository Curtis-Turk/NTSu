import express from 'express';
import Episode from '../models/Episode.js';
import Track from '../models/Track.js';
import ntsScraper from '../api/ntsScraper.js';
import saveTracks from '../utils/saveTracks.js';

const router = express.Router();
import episodeController from '../controllers/episodeController.js';

router.post('/', episodeController.Create);
router.post('/populate', episodeController.PopulateTracks);
router.delete('/devepisode/', episodeController.Delete);

export default router;
