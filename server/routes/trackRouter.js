import express from 'express';
import trackController from '../controllers/trackController.js';
import authenticateToken from '../utils/authenticateToken.js';

const router = express.Router();

router.post('/', trackController.Fetch);
router.post('/save', authenticateToken, trackController.Save);
router.post('/remove', authenticateToken, trackController.Remove);

export default router;
