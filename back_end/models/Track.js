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
  bandcampUrl: {
    type: String,
  },
  youtubeUrl: {
    type: String,
  },
  discogsUrl: {
    type: String,
  },
});

const Track = mongoose.model("Track", trackSchema);

export default Track;
