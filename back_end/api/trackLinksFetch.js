import bandcampSearch from "./bandcampSearch.js";
import discogsSearch from "./discogsFetch.js";
import youtubeSearch from "./youtubeFetch.js";

const getTrackLinks = async (track) => {
  const searchTitle = track.title.split(" ").join("+");
  const searchArtist = track.artist.split(" ").join("+");

  if (!track.bandcampUrl)
    track.bandcampUrl = await bandcampSearch({ searchTitle, searchArtist });

  if (!track.discogsUrl)
    track.discogsUrl = await discogsSearch({ searchTitle, searchArtist });

  if (!track.youtubeUrl)
    track.youtubeUrl = await youtubeSearch({ searchTitle, searchArtist });

  return track;
};

export default getTrackLinks;
