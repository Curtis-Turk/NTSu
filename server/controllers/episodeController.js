import Episode from "../models/Episode.js";
import Track from "../models/Track.js";
import ntsScraper from "../api/ntsScraper.js";
import storeEpisodeTracks from "../utils/storeEpisodeTracks.js";

const episodeController = {
  Create: (req, res) => {
    const { episodeUrl } = req.body;
    Episode.findOne(
      { episodeUrl: episodeUrl },
      async (err, existingEpisode) => {
        if (err) {
          res.status(500).send(err);
        } else if (existingEpisode) {
          res.send(existingEpisode);
        } else {
          const ntsData = await ntsScraper(episodeUrl);
          ntsData.allTracks = storeEpisodeTracks(ntsData.allTracks);
          const newEpisode = new Episode(ntsData);
          await newEpisode.save();
          res.send(newEpisode);
        }
      }
    );
  },

  PopulateTracks: async (req, res) => {
    const url = req.body.episodeUrl;
    const episodePop = await Episode.findOne({ episodeUrl: url });
    await episodePop.populate({ path: "allTracks" });
    res.send(episodePop);
  },

  Delete: async (req, res) => {
    const devUrl =
      "https://www.nts.live/shows/canyoufeelthesun-w-call-super-parris/episodes/can-you-feel-the-sun-5th-january-2023";
    console.log("Episode deleted");

    await Episode.deleteOne({
      episodeUrl: devUrl,
    });
    await Track.deleteMany();
  },
  Recents: async (req, res) => {},
};

export default episodeController;
