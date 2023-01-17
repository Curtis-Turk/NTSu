import Track from "../models/Track.js";
import getTrackLinks from "../api/trackLinksFetch.js";

const trackController = {
  Create: (req, res) => {
    console.log("Reached the create controller");
    const { title, artist } = req.body;
    Track.findOne(
      { title: title, artist: artist },
      async (err, existingTrack) => {
        if (err) {
          console.log("error");
          res.status(500).send(err);
        } else if (existingTrack) {
          console.log("track exists");
          const trackLinks = await getTrackLinks(req.body);
          existingTrack.bandcampUrl = trackLinks.bandcampUrl.trackurl;
          existingTrack.discogsUrl = trackLinks.discogsUrl.trackurl;
          existingTrack.youtubeUrl = trackLinks.discogsUrl.trackurl;
          await existingTrack.save();
          res.send(existingTrack);
        } else {
          console.log("Still need to create track?");
        }
      }
    );
    // res.send(req.body);
  },
};

export default trackController;
