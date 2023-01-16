import express from 'express';
import Track from '../models/Track.js';

const router = express.Router();

router.get('/', (req, res) => {
	res.send('We are on track route');
});

export default router;
