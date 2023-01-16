import express from 'express';
import Episode from '../models/Episode.js';
import Track from '../models/Track.js';
import ntsScraper from '../api/ntsScraper.js';

const router = express.Router();

router.delete('/devepisode/', async (req, res) => {
	const devUrl =
		'https://www.nts.live/shows/canyoufeelthesun-w-call-super-parris/episodes/can-you-feel-the-sun-5th-january-2023';
	console.log('Episode deleted');

	await Episode.deleteOne({
		episodeUrl: devUrl,
	});

	await Track.deleteMany();
});

router.post('/', (req, res) => {
	const { episodeUrl } = req.body;

	Episode.findOne({ episodeUrl: episodeUrl }, async (err, existingEpisode) => {
		if (err) {
			res.status(500).send(err);
		} else if (existingEpisode) {
			console.log('Episode already exists');
			res.send(existingEpisode);
		} else {
			const ntsData = await ntsScraper(episodeUrl);

			const savedTracks = [];
			ntsData.allTracks.forEach((track) => {
				const newTrack = new Track(track);
				savedTracks.push(newTrack._id);
				newTrack.save((e) => {
					if (e) {
						res.status(500).send(err);
					} else {
						// console.log('in save:', newTrack._id);
					}
				});
			});

			ntsData.allTracks = savedTracks;

			const newEpisode = new Episode(ntsData);

			await newEpisode.save();

			res.send(newEpisode);
		}
	});
});

router.post('/populate', async (req, res) => {
	const url = req.body.episodeUrl;
	const episodePop = await Episode.findOne({ episodeUrl: url });
	await episodePop.populate({ path: 'allTracks' });
	res.send(episodePop);
});

export default router;
