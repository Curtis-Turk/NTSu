import express from "express";
import Episode from "../models/Episode.js";
import Track from "../models/Track.js";
import ntsScraper from "../api/ntsScraper.js";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("ep deleted");
  Episode.remove({
    episodeUrl:
      "https://www.nts.live/shows/canyoufeelthesun-w-call-super-parris/episodes/can-you-feel-the-sun-5th-january-2023",
  });
});

router.post("/", (req, res) => {
  const { episodeUrl } = req.body;

  Episode.findOne({ episodeUrl: episodeUrl }, async (err, existingEpisode) => {
    if (err) {
      res.status(500).send(err);
    } else if (existingEpisode) {
      console.log("Episode already exists");
      res.send(existingEpisode);
    } else {
      const ntsData = await ntsScraper(episodeUrl);

      const savedTracks = [];
      ntsData.allTracks.forEach((track) => {
        const newTrack = new Track(track);
        savedTracks.push(newTrack._id);
        newTrack.save((e) => {
          if (e) {
            res.status(500).send(err);
          } else {
            // console.log("in save", newTrack._id);
          }
        });
      });

      ntsData.allTracks = savedTracks;

      const newEpisode = new Episode(ntsData);

      console.log(newEpisode._id);
      newEpisode.save();

      Episode.findOne({ episodeUrl: episodeUrl })
        .populate({
          path: "allTracks",
        })
        .exec((episode) => res.send(episode));
    }
  });
});

export default router;
