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
    default: "",
  },
  youtubeUrl: {
    type: String,
    default: "",
  },
  discogsUrl: {
    type: String,
    default: "",
  },
});

const Track = mongoose.model("Track", trackSchema);

export default Track;
