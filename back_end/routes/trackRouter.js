import express from 'express';
import trackController from '../controllers/trackController.js';

const router = express.Router();

router.post('/', trackController.Create);

export default router;
