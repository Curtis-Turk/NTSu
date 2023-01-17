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

          console.log(trackLinks);
          console.log("before", existingTrack);
          existingTrack.bandcampUrl = trackLinks.trackurl;
          console.log("after", existingTrack);
          await existingTrack.save();
          // // Track.updateOne(existingTrack)
          // console.log(bandcampUrl);s
          res.send(existingTrack);
        } else {
          console.log("Creating track");
          // console.log(trackTitle);
          // const { bandcampUrl } = await getTrackLinks(req.body);
          // const newTrack = new Track({
          //   artist: trackArtist,
          //   title: trackTitle,
          //   bandcampUrl: bandcampUrl,
          // });
          // await newTrack.save();
          // res.send(newTrack);
        }
      }
    );
    // res.send(req.body);
  },
};

// (req, res) => {
//   const { episodeUrl } = req.body;
//   Episode.findOne(
//     { episodeUrl: episodeUrl },
//     async (err, existingEpisode) => {
//       if (err) {
//         res.status(500).send(err);
//       } else if (existingEpisode) {
//         res.send(existingEpisode);
//       } else {
//         const ntsData = await ntsScraper(episodeUrl);
//         ntsData.allTracks = saveTracks(ntsData.allTracks);
//         const newEpisode = new Episode(ntsData);
//         await newEpisode.save();
//         res.send(newEpisode);
//       }
//     }
//   );
// },
export default trackController;
