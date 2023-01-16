import mongoose from "mongoose";

const trackSchema = new mongoose.Schema({
  // _id: Schema.Types.ObjectId,
  artist: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const Track = mongoose.model("Track", trackSchema);

export default Track;
