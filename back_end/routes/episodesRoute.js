import express from "express";
import Episode from "../models/Episode.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("We are on episodes");
});

router.post("/", (req, res) => {
  const { episodeTitle, episodeImage, allTracks } = req.body;

  const newEpisode = new Episode({
    episodeTitle: episodeTitle,
    episodeImage: episodeImage,
    allTracks: allTracks,
  });

  // console.log(newEpisode);

  newEpisode.save((error) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send(newEpisode);
    }
  });
});

export default router;
