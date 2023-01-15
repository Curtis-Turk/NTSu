import mongoose from "mongoose";

const episodeSchema = new mongoose.Schema({
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
