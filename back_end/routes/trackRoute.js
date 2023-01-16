import express from "express";
import Track from "../models/Track.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("We are on track route");
});

router.post("/", (req, res) => {
  // const { track } = req.body;
  console.log(req.body);
  // Episode.findOne({ episodeUrl: episodeUrl }, async (err, existingEpisode) => {
  //   if (err) {
  //     res.status(500).send(err);
  //   } else if (existingEpisode) {
  //     res.send(existingEpisode);
  //   } else {
  //     const ntsData = await ntsScraper(episodeUrl);
  //     const newEpisode = new Episode(ntsData);
  //     newEpisode.save((err) => {
  //       if (err) {
  //         res.status(500).send(err);
  //       } else {
  //         res.send(newEpisode);
  //       }
  //     });
  //   }
  // });

  // app.post("/bandcamp", async (req, res) => {
  //   let data = await bandcampFetch(req.body);
  //   res.json(data);
  // });

  // app.post("/discogs", async (req, res) => {
  //   req.body.secret = process.env.DISCOGS_SECRET;
  //   req.body.key = process.env.DISCOGS_CONSUMER_KEY;
  //   let data = await discogsFetch(req.body);
  //   res.json(data);
  // });

  // app.post("/youtube", async (req, res) => {
  //   req.body.key = process.env.YOUTUBE_KEY;
  //   let data = await youtubeSearch(req.body);
  //   res.json(data);
  // });
});

export default router;
