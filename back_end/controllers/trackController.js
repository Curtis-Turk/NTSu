import Track from '../models/Track.js';

const trackController = {
	Create: (req, res) => {
		const { trackTitle, trackArtist } = req.body;
		Track.findOne(
			{ title: trackTitle, artist: trackArtist },
			async (err, existingTrack) => {
				if (err) {
					res.status(500).send(err);
				} else if (existingTrack) {
					res.send(existingTrack);
				} else {
					const { bandcampUrl } = getTrackLinks(req.body);

					const newTrack = new Track({
						artist: trackArtist,
						title: trackTitle,
						bandcampUrl: bandcampUrl,
					});
					await newTrack.save();
					res.send(newTrack);
				}
			}
		);
		res.send(req.body);
	},
};

// (req, res) => {
//   const { episodeUrl } = req.body;
//   Episode.findOne(
//     { episodeUrl: episodeUrl },
//     async (err, existingEpisode) => {
//       if (err) {
//         res.status(500).send(err);
//       } else if (existingEpisode) {
//         res.send(existingEpisode);
//       } else {
//         const ntsData = await ntsScraper(episodeUrl);
//         ntsData.allTracks = saveTracks(ntsData.allTracks);
//         const newEpisode = new Episode(ntsData);
//         await newEpisode.save();
//         res.send(newEpisode);
//       }
//     }
//   );
// },
export default trackController;
