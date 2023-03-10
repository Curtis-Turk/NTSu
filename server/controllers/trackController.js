import Track from "../models/Track.js";
import getTrackLinks from "../api/getTrackLinks.js";
import User from "../models/User.js";

const trackController = {
  Fetch: (req, res) => {
    Track.findOne(
      { title: req.body.title, artist: req.body.artist },
      async (err, existingTrack) => {
        if (err) {
          res.status(500).send(err);
        } else if (existingTrack) {
          const updatedTrack = await getTrackLinks(existingTrack);
          await updatedTrack.save();
          res.send(updatedTrack);
        } else {
          console.log("Still need to create track?");
        }
      }
    );
    // res.send(req.body);
  },
  Save: async (req, res) => {
    Track.findOne({ _id: req.body.track._id }, async (e, track) => {
      await User.updateOne(
        { username: req.body.username },
        { $push: { addedTracks: track._id } }
      );
      const updatedUser = await User.findOne({ username: req.body.username });
      res.send({
        message: "Track Added",
        addedTracks: updatedUser.addedTracks,
      });
    });
    // const updatedUser = await User.findOne({ username: req.body.username });
    // console.log("is it adding?");

    // res.send({ message: "Track Added", addedTracks: updatedUser.addedTracks });
  },

  Remove: (req, res) => {
    // console.log(req.body.track);
    Track.findOne({ _id: req.body.track._id }, async (e, track) => {
      await User.updateOne(
        { username: req.body.username },
        { $pull: { addedTracks: track._id } }
      );
      const updatedUser = await User.findOne({ username: req.body.username });
      res.send({
        message: "Track Removed",
        addedTracks: updatedUser.addedTracks,
      });
    });
    // res.send({ message: "Track Removed" });
  },
};

export default trackController;
