import express from "express";
import Episode from "../models/Episode.js";
import ntsScraper from "../api/ntsScraper.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("We are on episodes");
});

router.post("/", (req, res) => {
  const { episodeUrl } = req.body;

  Episode.findOne({ episodeUrl: episodeUrl }, async (err, existingEpisode) => {
    if (err) {
      res.status(500).send(err);
    } else if (existingEpisode) {
      res.status(409).send(existingEpisode);
    } else {
      const ntsData = await ntsScraper(episodeUrl);
      const newEpisode = new Episode(ntsData);
      newEpisode.save((error) => {
        if (error) {
          res.status(500).send(error);
        } else {
          res.send(newEpisode);
        }
      });

      res.send({ message: "need to save" });
    }
  });
});

export default router;
