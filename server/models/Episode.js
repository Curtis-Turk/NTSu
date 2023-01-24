import mongoose from 'mongoose';

const episodeSchema = new mongoose.Schema({
	episodeUrl: {
		type: String,
		required: true,
	},
	episodeTitle: {
		type: String,
		required: true,
	},
	episodeImage: {
		type: String,
		required: true,
	},
	allTracks: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Track',
		},
	],
});

const Episode = mongoose.model('Episode', episodeSchema);

export default Episode;
