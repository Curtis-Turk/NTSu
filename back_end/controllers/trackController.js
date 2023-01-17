import Track from "../models/Track.js";
import getTrackLinks from "../api/trackLinksFetch.js";

const trackController = {
  Create: (req, res) => {
    console.log(req.body.title, req.body.artist);
    Track.findOne(
      { title: req.body.title, artist: req.body.artist },
      async (err, existingTrack) => {
        if (err) {
          console.log("error");
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
