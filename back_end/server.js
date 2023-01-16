import express from 'express';
import cors from 'cors';
import pkg from 'body-parser';
const { json } = pkg;
import dotenv from 'dotenv';
dotenv.config();

import discogsFetch from './api/discogsFetch.js';
import bandcampFetch from './api/bandcampFetch.js';
import youtubeSearch from './api/youtubeFetch.js';

import mongoose from 'mongoose';
mongoose.set('strictQuery', false);

import episodesRoute from './routes/episodesRoute.js';
import episodeSchema from './models/Episode.js';

import trackRoute from './routes/trackRoute.js';

mongoose.connect('mongodb://localhost/ntsu', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once('open', () => {
	console.log('MongoDB database connection established successfully');
});

const app = express();

app.use(cors());
app.use(json());

app.use('/episode', episodesRoute);
app.use('/track', trackRoute);

app.get('/', (req, res) => {
	res.json({ message: 'welcome' });
});

app.post('/bandcamp', async (req, res) => {
	let data = await bandcampFetch(req.body);
	res.json(data);
});

app.post('/discogs', async (req, res) => {
	req.body.secret = process.env.DISCOGS_SECRET;
	req.body.key = process.env.DISCOGS_CONSUMER_KEY;
	let data = await discogsFetch(req.body);
	res.json(data);
});

app.post('/youtube', async (req, res) => {
	req.body.key = process.env.YOUTUBE_KEY;
	let data = await youtubeSearch(req.body);
	res.json(data);
});

app.get('/api', (req, res) => {
	res.json({ message: 'hello' });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
	console.log(`Express app listening on ${PORT}`);
});
