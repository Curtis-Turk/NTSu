import express from 'express';

const router = express.Router();
import episodeController from '../controllers/episodeController.js';

router.post('/', episodeController.Create);
router.post('/populate', episodeController.PopulateTracks);
router.delete('/devepisode/', episodeController.Delete);

export default router;
