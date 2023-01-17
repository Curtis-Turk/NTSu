import bandcampSearch from "./bandcampSearch.js";

const getTrackLinks = async ({ artist, title }) => {
  const searchTitle = title.split(" ").join("+");
  const searchArtist = artist.split(" ").join("+");

  return await bandcampSearch({ searchTitle, searchArtist });
};

export default getTrackLinks;
