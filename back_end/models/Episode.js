import mongoose from "mongoose";

const trackSchema = new mongoose.Schema({
  artist: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

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
  allTracks: [trackSchema],
});

const Episode = mongoose.model("Episode", episodeSchema);

// const testEpisode = new Episode({
//   episodeTitle: "episodeTest",
//   episodeImage: "https://example.com/episode1.jpg",
//   allTracks: [
//     { artist: "artist1", title: "title1" },
//     { artist: "artist2", title: "title2" },
//   ],
// });

export default Episode;
