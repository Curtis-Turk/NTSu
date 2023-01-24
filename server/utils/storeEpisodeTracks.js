import Track from "../models/Track.js";

const storeEpisodeTracks = (tracks) => {
  const savedTracks = [];

  tracks.forEach((track) => {
    const newTrack = new Track(track);
    savedTracks.push(newTrack._id);
    newTrack.save();
  });

  return savedTracks;
};

export default storeEpisodeTracks;
