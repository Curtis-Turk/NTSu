import bandcampSearch from "./bandcampSearch.js";
import discogsSearch from "./discogsFetch.js";
import youtubeSearch from "./youtubeFetch.js";

const getTrackLinks = async ({ artist, title }) => {
  const searchTitle = title.split(" ").join("+");
  const searchArtist = artist.split(" ").join("+");

  const bandcampUrl = await bandcampSearch({ searchTitle, searchArtist });
  const discogsUrl = await discogsSearch({ searchTitle, searchArtist });
  const youtubeUrl = await youtubeSearch({ searchTitle, searchArtist });
  const trackLinks = {
    bandcampUrl: bandcampUrl,
    discogsUrl: discogsUrl,
    youtubeUrl: youtubeUrl,
  };
  return trackLinks;
};

export default getTrackLinks;
