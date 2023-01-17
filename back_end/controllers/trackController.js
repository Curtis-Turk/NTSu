import Track from "../models/Track.js";
import getTrackLinks from "../api/trackLinksFetch.js";

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
};

export default trackController;
